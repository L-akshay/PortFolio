import { NextResponse } from "next/server";
import { z } from "zod";
import { portfolioKnowledge } from "@/data";
import { rateLimit, clientKeyFromHeaders } from "@/lib/rate-limit";
import { retrievePortfolioContext } from "@/lib/chatbot/retrieve-context";
import { buildSystemPrompt } from "@/lib/chatbot/build-system-prompt";
import { generateChatResponse, isAiConfigured } from "@/lib/chatbot/provider";
import {
  findFallbackResponse,
  genericFallback,
  FALLBACK_PREFIX,
} from "@/lib/chatbot/fallback-responses";

export const runtime = "nodejs";

const turnSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(500),
});

const chatSchema = z.object({
  message: z.string().trim().min(1, "Message is empty").max(500),
  // Only recent history is accepted; older turns are trimmed client-side too.
  history: z.array(turnSchema).max(10).default([]),
});

const RATE_MAX = Number(process.env.CHAT_RATE_LIMIT_MAX ?? 20);
const RATE_WINDOW = Number(process.env.CHAT_RATE_LIMIT_WINDOW ?? 600);

export async function POST(request: Request) {
  const key = clientKeyFromHeaders(request.headers);
  const limit = rateLimit(`chat:${key}`, { max: RATE_MAX, windowSeconds: RATE_WINDOW });
  if (!limit.allowed) {
    return NextResponse.json(
      { reply: "You're sending messages a bit fast — please try again in a few minutes." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  // Basic request-size guard before JSON parsing.
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 32_000) {
    return NextResponse.json({ reply: "Request too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ reply: "Invalid request." }, { status: 400 });
  }

  const parsed = chatSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { reply: "Please send a message under 500 characters." },
      { status: 400 },
    );
  }

  const { message, history } = parsed.data;

  // Fallback-only mode: no AI provider configured.
  if (!isAiConfigured()) {
    const fallback = findFallbackResponse(message);
    return NextResponse.json({
      reply: fallback ?? genericFallback,
      source: "fallback",
    });
  }

  try {
    const context = retrievePortfolioContext(message, portfolioKnowledge);
    const systemPrompt = buildSystemPrompt(context);
    // Keep the last few turns only — enough for coherence, bounded for cost.
    const turns = [...history.slice(-6), { role: "user" as const, content: message }];
    const reply = await generateChatResponse(systemPrompt, turns);
    return NextResponse.json({ reply, source: "ai" });
  } catch {
    // Provider failed — no chat content is logged, only the failure itself.
    console.error("chat: provider request failed");
    const fallback = findFallbackResponse(message);
    return NextResponse.json({
      reply: fallback
        ? `${FALLBACK_PREFIX}\n\n${fallback}`
        : "I'm having trouble generating a response right now. You can browse the Experience and Projects sections, or email lakshaydawar2006@gmail.com directly.",
      source: "fallback",
    });
  }
}

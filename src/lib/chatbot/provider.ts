import Anthropic from "@anthropic-ai/sdk";

/**
 * All AI-provider-specific logic lives in this module. The provider and key
 * come from environment variables and never reach the client bundle.
 *
 *   AI_PROVIDER = "anthropic" (default) | "openai"
 *   AI_API_KEY  = provider API key; empty disables AI (fallback-only mode)
 *   AI_MODEL    = optional model override
 */

export type ChatTurn = { role: "user" | "assistant"; content: string };

const REQUEST_TIMEOUT_MS = 15_000;
const MAX_RESPONSE_TOKENS = 500;

export function isAiConfigured(): boolean {
  return Boolean(process.env.AI_API_KEY);
}

export async function generateChatResponse(
  systemPrompt: string,
  turns: ChatTurn[],
): Promise<string> {
  const provider = process.env.AI_PROVIDER ?? "anthropic";
  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) throw new Error("AI provider not configured");

  if (provider === "openai") {
    return generateWithOpenAI(apiKey, systemPrompt, turns);
  }
  return generateWithAnthropic(apiKey, systemPrompt, turns);
}

async function generateWithAnthropic(
  apiKey: string,
  systemPrompt: string,
  turns: ChatTurn[],
): Promise<string> {
  const client = new Anthropic({
    apiKey,
    timeout: REQUEST_TIMEOUT_MS,
    maxRetries: 1,
  });

  const response = await client.messages.create({
    model: process.env.AI_MODEL || "claude-opus-4-8",
    max_tokens: MAX_RESPONSE_TOKENS,
    system: [
      {
        type: "text",
        text: systemPrompt,
        // The system prompt (rules + portfolio context) is identical across
        // visitors, so cache it to cut cost and latency.
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: turns,
  });

  const text = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("");
  if (!text) throw new Error("Empty response from provider");
  return text;
}

async function generateWithOpenAI(
  apiKey: string,
  systemPrompt: string,
  turns: ChatTurn[],
): Promise<string> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.AI_MODEL || "gpt-4o-mini",
      max_tokens: MAX_RESPONSE_TOKENS,
      messages: [{ role: "system", content: systemPrompt }, ...turns],
    }),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`OpenAI returned ${res.status}`);
  const json = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const text = json.choices?.[0]?.message?.content;
  if (!text) throw new Error("Empty response from provider");
  return text;
}

import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit, clientKeyFromHeaders } from "@/lib/rate-limit";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message is too short").max(3000),
  // Honeypot — real users never fill this hidden field. Validation must not
  // reject it (that would tip off bots); the value is checked after parsing.
  company: z.string().max(200).optional(),
});

export async function POST(request: Request) {
  const key = clientKeyFromHeaders(request.headers);
  const limit = rateLimit(`contact:${key}`, { max: 5, windowSeconds: 3600 });
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many messages — please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 },
    );
  }

  // Honeypot tripped: pretend success so bots learn nothing.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    // Email sending not configured — tell the client to fall back to mailto.
    return NextResponse.json({ ok: false, fallback: true }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [to],
        reply_to: parsed.data.email,
        subject: `[Portfolio] ${parsed.data.subject}`,
        text: `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Email provider returned ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    // No message content is logged — only that delivery failed.
    console.error("contact: email delivery failed");
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please email me directly." },
      { status: 502 },
    );
  }
}

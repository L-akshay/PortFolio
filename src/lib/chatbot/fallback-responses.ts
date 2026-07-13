import { faq } from "@/data/chatbot-faq";

export const FALLBACK_PREFIX =
  "I'm temporarily unable to generate a custom response, but here is the relevant information from the portfolio:";

/**
 * Deterministic answers for common questions — used when no AI provider is
 * configured or the provider call fails. Returns null when nothing matches.
 */
export function findFallbackResponse(message: string): string | null {
  const normalized = message.toLowerCase();
  let best: { answer: string; score: number } | null = null;

  for (const item of faq) {
    const score = item.triggers.filter((t) => normalized.includes(t)).length;
    if (score > 0 && (!best || score > best.score)) {
      best = { answer: item.answer, score };
    }
  }
  return best?.answer ?? null;
}

export const genericFallback =
  "I can answer questions about Lakshay's experience, projects, skills and availability. Try asking about his work at Web3Task, his Android experience, or how to contact him — or browse the Experience and Projects sections.";

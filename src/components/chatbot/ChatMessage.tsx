"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

/**
 * Renders one chat message. Assistant text is rendered as plain text with
 * internal links (/#section, /resume, /projects) made clickable — no HTML or
 * markdown is ever injected, which removes the sanitization problem entirely.
 */
function renderWithLinks(text: string): React.ReactNode[] {
  const parts = text.split(/(\/(?:#[a-z-]+|resume|projects|privacy)\b)/g);
  return parts.map((part, i) =>
    /^\/(?:#[a-z-]+|resume|projects|privacy)\b/.test(part) ? (
      <Link key={i} href={part} className="text-primary underline underline-offset-2">
        {part}
      </Link>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed whitespace-pre-wrap",
          isUser
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "border-border bg-elevated text-foreground rounded-bl-sm border",
        )}
      >
        {isUser ? message.content : renderWithLinks(message.content)}
      </div>
    </div>
  );
}

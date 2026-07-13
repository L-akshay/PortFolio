"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, RotateCcw, Minus, Send, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { ChatMessage, type Message } from "./ChatMessage";
import { SuggestedQuestions } from "./SuggestedQuestions";

const initialMessage: Message = {
  role: "assistant",
  content: `Hi! I'm ${profile.name}'s portfolio assistant. Ask me about his experience, projects, skills or availability.`,
};

export function ChatPanel({ onMinimize }: { onMinimize: () => void }) {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, sending]);

  // Escape minimizes the panel.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onMinimize();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onMinimize]);

  async function send(text: string) {
    const trimmed = text.trim().slice(0, 500);
    if (!trimmed || sending) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          // Send only recent turns; the server trims further.
          history: nextMessages.slice(-7, -1),
        }),
      });
      const json = (await res.json()) as { reply?: string };
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            json.reply ??
            "Something went wrong — please try again or use the contact form.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn't reach the server. Please try again, or email me via the Contact section.",
        },
      ]);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }

  function reset() {
    setMessages([initialMessage]);
    inputRef.current?.focus();
  }

  return (
    <motion.div
      role="dialog"
      aria-label={`Chat with ${profile.name}'s portfolio assistant`}
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
      className="fixed inset-x-0 bottom-0 z-50 flex h-[85dvh] flex-col rounded-t-2xl border border-border bg-surface shadow-2xl sm:inset-x-auto sm:right-5 sm:bottom-5 sm:h-auto sm:max-h-[560px] sm:w-[390px] sm:rounded-2xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl border-b border-border bg-elevated px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold">Ask about {profile.name}</p>
            <p className="flex items-center gap-1.5 text-xs text-muted">
              <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
              Portfolio assistant
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={reset}
            aria-label="Reset conversation"
            className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <RotateCcw className="size-4" />
          </button>
          <button
            type="button"
            onClick={onMinimize}
            aria-label="Minimize chat"
            className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <Minus className="size-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto p-4"
        aria-live="polite"
      >
        {messages.map((m, i) => (
          <ChatMessage key={i} message={m} />
        ))}
        {sending ? (
          <div className="flex items-center gap-2 text-xs text-muted">
            <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
            Thinking…
          </div>
        ) : null}
        {messages.length === 1 ? (
          <SuggestedQuestions onSelect={send} disabled={sending} />
        ) : null}
      </div>

      {/* Input */}
      <form
        className="flex items-center gap-2 border-t border-border p-3"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <label htmlFor="chat-input" className="sr-only">
          Your question
        </label>
        <input
          id="chat-input"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={500}
          placeholder="Ask a question…"
          className="flex-1 rounded-xl border border-border bg-elevated px-3.5 py-2.5 text-sm placeholder:text-muted/60"
        />
        <button
          type="submit"
          disabled={sending || !input.trim()}
          aria-label="Send message"
          className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
        >
          <Send className="size-4" aria-hidden="true" />
        </button>
      </form>
    </motion.div>
  );
}

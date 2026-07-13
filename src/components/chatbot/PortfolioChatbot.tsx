"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { MessageCircleQuestion, X } from "lucide-react";
import { cn } from "@/lib/utils";

// The panel (and framer-motion inside it) loads only when first opened.
const ChatPanel = dynamic(() => import("./ChatPanel").then((m) => m.ChatPanel), {
  ssr: false,
});

const SEEN_KEY = "chatbot-seen";

const storageListeners = new Set<() => void>();
function subscribeSeen(cb: () => void) {
  storageListeners.add(cb);
  return () => storageListeners.delete(cb);
}
function readSeen(): boolean {
  try {
    return localStorage.getItem(SEEN_KEY) !== null;
  } catch {
    return true; // storage unavailable — behave as already seen (no pulse)
  }
}
function markSeen() {
  try {
    localStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* ignore */
  }
  storageListeners.forEach((cb) => cb());
}

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Subtle pulse only on the visitor's first visit (false during SSR).
  const seen = useSyncExternalStore(subscribeSeen, readSeen, () => true);
  const pulse = !seen;

  function openChat() {
    setOpen(true);
    markSeen();
  }

  function minimize() {
    setOpen(false);
    // Return focus to the trigger for keyboard users.
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (dismissed) return null;

  return (
    <>
      {open ? <ChatPanel onMinimize={minimize} /> : null}

      <div
        className={cn(
          "fixed right-4 bottom-4 z-40 flex items-center gap-2 sm:right-5 sm:bottom-5",
          open && "hidden",
        )}
      >
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Hide chat assistant"
          className="border-border bg-surface text-muted rounded-full border p-1.5 opacity-60 transition-opacity hover:opacity-100"
        >
          <X className="size-3.5" aria-hidden="true" />
        </button>
        <button
          ref={triggerRef}
          type="button"
          onClick={openChat}
          aria-label="Open chat — ask about me"
          className={cn(
            "group bg-primary text-primary-foreground shadow-primary/25 flex h-12 items-center gap-2 rounded-full pr-5 pl-4 text-sm font-medium shadow-lg transition-transform hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100",
            pulse && "motion-safe:animate-pulse",
          )}
        >
          <MessageCircleQuestion className="size-5" aria-hidden="true" />
          Ask about me
        </button>
      </div>
    </>
  );
}

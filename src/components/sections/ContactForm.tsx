"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm placeholder:text-muted/60 focus:border-border-strong";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string; fallback?: boolean };

      if (json.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      if (json.fallback) {
        // Email sending isn't configured on the server — open the mail app.
        const subject = encodeURIComponent(String(data.subject ?? ""));
        const bodyText = encodeURIComponent(String(data.message ?? ""));
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${bodyText}`;
        setStatus("idle");
        return;
      }
      setStatus("error");
      setError(json.error ?? "Something went wrong.");
    } catch {
      setStatus("error");
      setError("Network error — please try again or email me directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          required
          maxLength={150}
          className={inputClasses}
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={5}
          className={inputClasses}
          placeholder="Tell me about your project or opportunity…"
        />
      </div>

      {/* Honeypot — hidden from real users, tempting for bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={status === "sending"} className="group">
          {status === "sending" ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Send className="group-hover:translate-x-0.5" />
          )}
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" ? (
            <span className="text-success">Message sent — I&apos;ll get back to you soon.</span>
          ) : null}
          {status === "error" && error ? (
            <span className="text-red-500 dark:text-red-400">{error}</span>
          ) : null}
        </p>
      </div>
    </form>
  );
}

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";

/** Terminal-style identity panel — the hero visual, pure DOM, no images. */
function StatusPanel() {
  const rows: [string, string, "primary" | "secondary" | "success"][] = [
    ["role", "full-stack · android · applied-ai", "primary"],
    ["shipping", "production apps, 100k+ users reached", "secondary"],
    ["status", "open to internships & engineering roles", "success"],
  ];
  return (
    <div
      aria-hidden="true"
      className="border-border bg-surface shadow-primary/5 overflow-hidden rounded-xl border font-mono text-xs shadow-lg"
    >
      <div className="border-border bg-elevated flex items-center gap-1.5 border-b px-3 py-2">
        <span className="bg-primary/50 size-2.5 rounded-full" />
        <span className="bg-secondary/50 size-2.5 rounded-full" />
        <span className="bg-success/50 size-2.5 rounded-full" />
        <span className="text-muted ml-2">lakshay — status</span>
      </div>
      <div className="space-y-2 p-4">
        {rows.map(([key, value, tone]) => (
          <p key={key} className="flex gap-2">
            <span className="text-muted">{key}:</span>
            <span
              className={
                tone === "primary"
                  ? "text-primary"
                  : tone === "secondary"
                    ? "text-secondary"
                    : "text-success"
              }
            >
              {value}
            </span>
          </p>
        ))}
        <p className="text-muted flex gap-2 pt-1">
          <span className="text-primary">$</span>
          <span>
            ship --from prototype --to production
            <span className="bg-primary ml-0.5 inline-block h-3 w-1.5 animate-pulse align-middle" />
          </span>
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section aria-label="Introduction" className="pt-14 pb-4 sm:pt-20">
      <div className="grid items-center gap-10 sm:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            {profile.openToWork ? (
              <span className="border-success/30 bg-success/10 text-success inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-medium">
                <span className="relative flex size-2">
                  <span className="bg-success absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:hidden" />
                  <span className="bg-success relative inline-flex size-2 rounded-full" />
                </span>
                Open to opportunities
              </span>
            ) : null}
            <span className="border-border bg-elevated text-muted inline-flex items-center gap-1 rounded-full border px-2.5 py-1">
              <MapPin className="size-3" aria-hidden="true" />
              {profile.location}
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Hi, I&apos;m {profile.name}
            <span className="text-primary">.</span>
          </h1>
          <p className="text-secondary mt-2 text-lg font-medium">{profile.role}</p>
          <p className="text-muted mt-4 max-w-prose text-sm leading-relaxed sm:text-base">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild className="group">
              <Link href="/resume">
                View resume
                <ArrowRight className="group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Contact me</a>
            </Button>
            <div className="flex items-center gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted hover:bg-elevated hover:text-primary rounded-lg p-2.5 transition-colors"
                >
                  <SocialIcon icon={s.icon} className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <StatusPanel />
        </div>
      </div>
    </section>
  );
}

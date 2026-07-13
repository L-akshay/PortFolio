import { Compass } from "lucide-react";
import { profile, education } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <SectionHeading label="about" title="About me" />
      <div id="about-heading" className="sr-only">
        About me
      </div>

      <p className="max-w-prose text-sm leading-relaxed text-muted sm:text-base">
        {profile.intro}
      </p>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {profile.highlights.map((h) => (
          <div
            key={h.label}
            className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-strong"
          >
            <dt className="text-xs font-medium tracking-wide text-muted uppercase">
              {h.label}
            </dt>
            <dd className="mt-1 text-2xl font-semibold text-primary">{h.value}</dd>
            <dd className="mt-1 text-xs leading-relaxed text-muted">{h.detail}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 space-y-3 text-sm text-muted">
        {education.map((e) => (
          <p key={e.institution}>
            <span className="font-medium text-foreground">{e.institution}</span> —{" "}
            {e.degree}, {e.period}
            {e.detail ? ` · ${e.detail}` : ""}
          </p>
        ))}
        <p className="flex items-start gap-2 rounded-lg border border-border bg-elevated/60 p-3">
          <Compass className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
          <span>{profile.currentFocus}</span>
        </p>
      </div>
    </section>
  );
}

import { Compass } from "lucide-react";
import { profile, education } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" aria-label="About me">
      <SectionHeading title="About me" />

      <p className="text-muted max-w-prose text-sm leading-relaxed sm:text-base">
        {profile.intro}
      </p>

      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        {profile.highlights.map((h) => (
          <div
            key={h.label}
            className="border-border/50 bg-surface hover:border-border rounded-xl border p-4 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <dt className="text-muted text-xs font-medium tracking-wide uppercase">
              {h.label}
            </dt>
            <dd className="mt-1 text-2xl font-semibold">{h.value}</dd>
            <dd className="text-muted mt-1 text-xs leading-relaxed">{h.detail}</dd>
          </div>
        ))}
      </dl>

      <div className="text-muted mt-6 space-y-3 text-sm">
        {education.map((e) => (
          <p key={e.institution}>
            <span className="text-foreground font-medium">{e.institution}</span> —{" "}
            {e.degree}, {e.period}
            {e.detail ? ` · ${e.detail}` : ""}
          </p>
        ))}
        <p className="border-border bg-elevated/60 flex items-start gap-2 rounded-lg border p-3">
          <Compass className="text-secondary mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{profile.currentFocus}</span>
        </p>
      </div>
    </section>
  );
}

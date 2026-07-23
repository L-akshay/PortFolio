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

      <div className="text-muted mt-8 space-y-3 text-sm">
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

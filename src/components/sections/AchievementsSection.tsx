import { Trophy } from "lucide-react";
import { achievements } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AchievementsSection() {
  return (
    <section id="achievements" aria-label="Leadership and achievements">
      <SectionHeading
        label="leadership"
        title="Leadership & Achievements"
        description="Awards, hackathon leadership and production ownership moments."
      />
      <ul className="grid gap-4 sm:grid-cols-3">
        {achievements.map((achievement) => (
          <li
            key={achievement}
            className="border-border/50 bg-surface flex gap-3 rounded-xl border p-4 shadow-sm"
          >
            <Trophy
              className="text-secondary mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            <span className="text-muted text-sm leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

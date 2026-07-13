import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills and technologies">
      <SectionHeading
        label="skills"
        title="Skills & Technologies"
        description="Organized by what I can actually deliver, not a logo wall."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.title}
            className="border-border bg-surface hover:border-border-strong rounded-xl border p-5 transition-colors"
          >
            <h3 className="font-semibold">{group.title}</h3>
            <p className="text-muted mt-0.5 text-xs">{group.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

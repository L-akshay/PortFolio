import { additionalSkills, skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Clean pill rows grouped under small labels — no boxes, just breathing room. */
export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills and technologies">
      <SectionHeading title="Skills" />
      <div className="space-y-7">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="text-muted mb-3 text-xs font-semibold tracking-wider uppercase">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-elevated/80 border-border/50 hover:border-border flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-sm motion-reduce:transition-none motion-reduce:hover:scale-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-muted mt-7 text-sm">{additionalSkills}</p>
    </section>
  );
}

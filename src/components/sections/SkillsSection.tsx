import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Reference-style pill cloud, grouped under small muted labels. */
export function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills and technologies">
      <SectionHeading title="Skills" />
      <div className="space-y-6">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="text-muted mb-3 text-xs font-semibold tracking-wider uppercase">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-elevated/80 border-border/50 hover:border-border flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-sm motion-reduce:transition-none motion-reduce:hover:scale-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

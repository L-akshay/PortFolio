import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/experience/ExperienceCard";

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Work experience">
      <SectionHeading
        label="experience"
        title="Experience"
        description="Where I've shipped software to real users."
      />
      <div className="relative space-y-6 border-l border-border pl-5 sm:pl-7">
        {experience.map((item) => (
          <div key={item.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-7 -left-[calc(1.25rem+4.5px)] size-2.5 rounded-full border-2 border-background bg-primary sm:-left-[calc(1.75rem+4.5px)]"
            />
            <ExperienceCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

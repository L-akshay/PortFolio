import type { Metadata } from "next";
import { profile, education, achievements } from "@/data/profile";
import { experience } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { skills } from "@/data/skills";
import { socials } from "@/data/socials";
import { resumePdfHref } from "@/data/site-constants";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name} - ${profile.role}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <PageContainer className="pt-14 pb-24">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <a href={resumePdfHref} download>
              Download Resume PDF
            </a>
          </Button>
          <PrintButton />
        </div>
      </div>

      <article className="resume-print border-border bg-surface space-y-8 rounded-xl border p-6 sm:p-10 print:border-0 print:p-0">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">{profile.name}</h2>
          <p className="text-primary mt-1 text-lg">{profile.role}</p>
          <p className="text-muted mt-2 text-sm">
            {profile.location}
            {profile.phone ? ` - ${profile.phone}` : ""} - {profile.email}
          </p>
          <p className="text-muted mt-1 text-sm">
            {socials
              .filter((social) => social.icon !== "mail")
              .map((social, index) => (
                <span key={social.label}>
                  {index > 0 ? " - " : ""}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground underline underline-offset-2"
                  >
                    {social.href.replace(/^https?:\/\/(www\.)?/, "")}
                  </a>
                </span>
              ))}
          </p>
        </header>

        <section aria-labelledby="resume-summary">
          <h3
            id="resume-summary"
            className="text-primary mb-2 font-mono text-xs tracking-widest uppercase"
          >
            Summary
          </h3>
          <p className="text-muted text-sm leading-relaxed">{profile.intro}</p>
        </section>

        <section aria-labelledby="resume-experience">
          <h3
            id="resume-experience"
            className="text-primary mb-3 font-mono text-xs tracking-widest uppercase"
          >
            Experience
          </h3>
          {experience.map((item) => (
            <div key={item.company} className="mb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <p className="font-semibold">
                  {item.role} - {item.company}
                </p>
                <p className="text-muted text-xs">
                  {item.period} - {item.location}
                </p>
              </div>
              <ul className="text-muted mt-2 list-disc space-y-1 pl-5 text-sm">
                {item.contributions.slice(0, 5).map((contribution) => (
                  <li key={contribution.text}>
                    <span className="text-foreground font-medium">
                      [{contribution.area}]
                    </span>{" "}
                    {contribution.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="resume-projects">
          <h3
            id="resume-projects"
            className="text-primary mb-3 font-mono text-xs tracking-widest uppercase"
          >
            Selected Projects
          </h3>
          <ul className="space-y-3">
            {featuredProjects.map((project) => (
              <li key={project.slug} className="text-sm">
                <p>
                  <span className="font-semibold">{project.title}</span>{" "}
                  <span className="text-muted">
                    ({project.role}) - {project.valueProp}
                  </span>
                </p>
                <p className="text-muted text-xs">
                  {project.technologies.join(" - ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="resume-achievements">
          <h3
            id="resume-achievements"
            className="text-primary mb-3 font-mono text-xs tracking-widest uppercase"
          >
            Achievements & Leadership
          </h3>
          <ul className="text-muted list-disc space-y-1.5 pl-5 text-sm">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="resume-skills">
          <h3
            id="resume-skills"
            className="text-primary mb-3 font-mono text-xs tracking-widest uppercase"
          >
            Skills
          </h3>
          <ul className="space-y-1.5 text-sm">
            {skills.map((group) => (
              <li key={group.title}>
                <span className="font-medium">{group.title}:</span>{" "}
                <span className="text-muted">{group.skills.join(", ")}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="resume-education">
          <h3
            id="resume-education"
            className="text-primary mb-3 font-mono text-xs tracking-widest uppercase"
          >
            Education
          </h3>
          {education.map((item) => (
            <p key={item.institution} className="text-sm">
              <span className="font-medium">{item.institution}</span>{" "}
              <span className="text-muted">
                - {item.degree}, {item.period}
              </span>
            </p>
          ))}
        </section>
      </article>
    </PageContainer>
  );
}

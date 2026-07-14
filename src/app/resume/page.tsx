import type { Metadata } from "next";
import { profile, education, achievements } from "@/data/profile";
import { experience } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { skills } from "@/data/skills";
import { socials } from "@/data/socials";
import { PageContainer } from "@/components/layout/PageContainer";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name} — ${profile.role}.`,
};

/**
 * A structured, printable resume rendered straight from the portfolio data —
 * always in sync with the site, no PDF file to maintain.
 */
export default function ResumePage() {
  return (
    <PageContainer className="pt-14 pb-24">
      <div className="mb-8 flex items-center justify-between print:hidden">
        <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
        <PrintButton />
      </div>

      <article className="border-border bg-surface space-y-8 rounded-xl border p-6 sm:p-10 print:border-0 print:p-0">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">{profile.name}</h2>
          <p className="text-primary mt-1 text-lg">{profile.role}</p>
          <p className="text-muted mt-2 text-sm">
            {profile.location}
            {profile.phone ? ` · ${profile.phone}` : ""} · {profile.email}
          </p>
          <p className="text-muted mt-1 text-sm">
            {socials
              .filter((s) => s.icon !== "mail")
              .map((s, i) => (
                <span key={s.label}>
                  {i > 0 ? " · " : ""}
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground underline underline-offset-2"
                  >
                    {s.href.replace(/^https?:\/\/(www\.)?/, "")}
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
                  {item.role} — {item.company}
                </p>
                <p className="text-muted text-xs">
                  {item.period} · {item.location}
                </p>
              </div>
              <ul className="text-muted mt-2 list-disc space-y-1 pl-5 text-sm">
                {item.contributions.map((c) => (
                  <li key={c.text}>
                    <span className="text-foreground font-medium">[{c.area}]</span>{" "}
                    {c.text}
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
            {featuredProjects.map((p) => (
              <li key={p.slug} className="text-sm">
                <p>
                  <span className="font-semibold">{p.title}</span>{" "}
                  <span className="text-muted">
                    ({p.role}) — {p.valueProp}
                  </span>
                </p>
                <p className="text-muted text-xs">{p.technologies.join(" · ")}</p>
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
            {achievements.map((a) => (
              <li key={a}>{a}</li>
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
          {education.map((e) => (
            <p key={e.institution} className="text-sm">
              <span className="font-medium">{e.institution}</span>{" "}
              <span className="text-muted">
                — {e.degree}, {e.period}
              </span>
            </p>
          ))}
        </section>
      </article>
    </PageContainer>
  );
}

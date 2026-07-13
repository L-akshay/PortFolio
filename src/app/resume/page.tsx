import type { Metadata } from "next";
import { profile, education } from "@/data/profile";
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

      <article className="space-y-8 rounded-xl border border-border bg-surface p-6 sm:p-10 print:border-0 print:p-0">
        <header>
          <h2 className="text-3xl font-bold tracking-tight">{profile.name}</h2>
          <p className="mt-1 text-lg text-primary">{profile.role}</p>
          <p className="mt-2 text-sm text-muted">
            {profile.location} · {profile.email} ·{" "}
            {socials
              .filter((s) => s.icon !== "mail")
              .map((s) => s.href.replace(/^https?:\/\/(www\.)?/, ""))
              .join(" · ")}
          </p>
        </header>

        <section aria-labelledby="resume-summary">
          <h3 id="resume-summary" className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
            Summary
          </h3>
          <p className="text-sm leading-relaxed text-muted">{profile.intro}</p>
        </section>

        <section aria-labelledby="resume-experience">
          <h3 id="resume-experience" className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
            Experience
          </h3>
          {experience.map((item) => (
            <div key={item.company} className="mb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <p className="font-semibold">
                  {item.role} — {item.company}
                </p>
                <p className="text-xs text-muted">
                  {item.period} · {item.location}
                </p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                {item.contributions.map((c) => (
                  <li key={c.text}>
                    <span className="font-medium text-foreground">[{c.area}]</span>{" "}
                    {c.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="resume-projects">
          <h3 id="resume-projects" className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
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
                <p className="text-xs text-muted">{p.technologies.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="resume-skills">
          <h3 id="resume-skills" className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
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
          <h3 id="resume-education" className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
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

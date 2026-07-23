import Link from "next/link";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import type { Project } from "@/data/types";
import { GithubIcon } from "@/components/ui/SocialIcon";
import { ProjectThumb } from "./ProjectThumb";

function projectLinkLabel(project: Project) {
  if (project.liveUrl?.includes("play.google.com")) return "Play Store";
  if (project.liveUrl) return "Live";
  return null;
}

export function ProjectCard({ project }: { project: Project }) {
  const projectHref = `/projects/${project.slug}`;
  const liveLabel = projectLinkLabel(project);

  return (
    <article className="group border-border/50 bg-surface hover:border-border focus-within:border-border relative flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="px-4 pt-4">
        <ProjectThumb project={project} />
      </div>

      <div className="grow space-y-4 p-4">
        <div>
          <p className="text-secondary text-xs font-medium tracking-wide uppercase">
            {project.category}
          </p>
          <h3 className="text-foreground mt-1 text-xl font-semibold tracking-tight">
            <Link href={projectHref} className="focus-visible:outline-none">
              <span className="absolute inset-0 z-10" aria-hidden="true" />
              {project.title}
            </Link>
          </h3>
        </div>

        <p className="text-muted text-sm leading-relaxed">{project.valueProp}</p>

        <dl className="grid gap-2 text-sm">
          <div>
            <dt className="text-muted text-xs font-semibold tracking-wider uppercase">
              My role
            </dt>
            <dd className="text-secondary mt-1 text-sm font-medium">{project.role}</dd>
          </div>
          {project.impact ? (
            <div>
              <dt className="text-muted text-xs font-semibold tracking-wider uppercase">
                Verified result
              </dt>
              <dd className="text-foreground mt-1 text-sm">{project.impact}</dd>
            </div>
          ) : null}
        </dl>

        <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="bg-elevated/80 text-foreground border-border/30 rounded-md border px-2.5 py-1 text-xs font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-20 mt-auto flex flex-wrap items-center gap-2 p-4 pt-0">
        <span className="text-primary inline-flex items-center gap-1.5 rounded-lg py-2 text-sm font-medium">
          Case Study
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
        <span className="grow" />
        {project.githubUrl ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-surface hover:bg-elevated inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
          >
            <GithubIcon className="size-4" />
            GitHub
          </Link>
        ) : null}
        {project.liveUrl && liveLabel ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-surface hover:bg-elevated inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
          >
            {liveLabel === "Play Store" ? (
              <Play className="size-4" aria-hidden="true" />
            ) : (
              <ExternalLink className="size-4" aria-hidden="true" />
            )}
            {liveLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}

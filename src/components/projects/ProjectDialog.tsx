"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink as ExternalLinkIcon, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcon";
import type { Project } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { ProjectThumb } from "./ProjectThumb";

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-muted text-xs font-semibold tracking-wider uppercase">
        {title}
      </h4>
      <div className="text-muted mt-1.5 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

/** Accessible project detail dialog (controlled). */
export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const d = project.details;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-fade-in-blur fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content
          aria-describedby={undefined}
          className="border-border bg-surface fixed top-1/2 left-1/2 z-50 max-h-[85dvh] w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border p-6 shadow-2xl focus:outline-none"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-xl font-semibold tracking-tight">
                {project.title}
              </Dialog.Title>
              <p className="text-muted mt-1 text-sm">{project.valueProp}</p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <Badge tone="primary">{project.category}</Badge>
                <Badge tone="secondary">{project.ownership}</Badge>
                {project.impact ? <Badge tone="success">{project.impact}</Badge> : null}
              </div>
            </div>
            <Dialog.Close
              aria-label="Close project details"
              className="border-border text-muted hover:bg-elevated hover:text-foreground shrink-0 rounded-lg border p-2 transition-colors"
            >
              <X className="size-4" />
            </Dialog.Close>
          </div>

          <div className="mt-4">
            <ProjectThumb project={project} />
          </div>

          <div className="mt-5 space-y-4">
            <DetailBlock title="Context">{d.context}</DetailBlock>
            <DetailBlock title="Problem">{d.problem}</DetailBlock>
            <DetailBlock title="My responsibilities">
              <ul className="list-disc space-y-1 pl-5">
                {d.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </DetailBlock>
            <DetailBlock title="Key decisions">
              <ul className="list-disc space-y-1 pl-5">
                {d.decisions.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </DetailBlock>
            <DetailBlock title="Result">{d.result}</DetailBlock>
            {d.lessons ? <DetailBlock title="Lessons">{d.lessons}</DetailBlock> : null}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-elevated/80 text-foreground border-border/30 rounded-md border px-2.5 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="border-border mt-5 flex gap-3 border-t pt-4">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all hover:shadow-md"
                >
                  <GithubIcon className="size-4" /> GitHub
                </a>
              ) : null}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-surface hover:bg-elevated text-foreground inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-all hover:shadow-md"
                >
                  <ExternalLinkIcon className="size-4" aria-hidden="true" /> Live Demo
                </a>
              ) : null}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

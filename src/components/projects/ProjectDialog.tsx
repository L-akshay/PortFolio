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
      <h4 className="text-primary font-mono text-xs tracking-widest uppercase">
        {title}
      </h4>
      <div className="text-muted mt-1.5 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

/** Accessible project detail dialog; `trigger` is the card content. */
export function ProjectDialog({
  project,
  trigger,
}: {
  project: Project;
  trigger: React.ReactNode;
}) {
  const d = project.details;
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=open]:fade-in fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content
          aria-describedby={undefined}
          className="border-border bg-surface fixed top-1/2 left-1/2 z-50 max-h-[85dvh] w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border p-6 shadow-2xl focus:outline-none"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-xl font-semibold">
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

          <ProjectThumb project={project} className="mt-4 min-h-24" />

          <div className="mt-5 space-y-4">
            <DetailBlock title="context">{d.context}</DetailBlock>
            <DetailBlock title="problem">{d.problem}</DetailBlock>
            <DetailBlock title="my responsibilities">
              <ul className="list-disc space-y-1 pl-5">
                {d.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </DetailBlock>
            <DetailBlock title="key decisions">
              <ul className="list-disc space-y-1 pl-5">
                {d.decisions.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </DetailBlock>
            <DetailBlock title="result">{d.result}</DetailBlock>
            {d.lessons ? <DetailBlock title="lessons">{d.lessons}</DetailBlock> : null}
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="border-border mt-5 flex gap-4 border-t pt-4 text-sm">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex items-center gap-1.5 hover:underline"
                >
                  <GithubIcon className="size-4" /> Repository
                </a>
              ) : null}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex items-center gap-1.5 hover:underline"
                >
                  <ExternalLinkIcon className="size-4" aria-hidden="true" /> Live
                </a>
              ) : null}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

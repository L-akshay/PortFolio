"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { ProjectDialog } from "./ProjectDialog";
import { ProjectThumb } from "./ProjectThumb";

/**
 * Clickable card that opens the project dialog.
 * `wide` renders a horizontal variant for controlled layout variation.
 */
export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <ProjectDialog
      project={project}
      trigger={
        <button
          type="button"
          aria-label={`View details of ${project.title}`}
          className={cn(
            "group flex w-full cursor-pointer flex-col gap-4 rounded-xl border border-border bg-surface p-4 text-left transition-all hover:border-border-strong hover:shadow-lg hover:shadow-primary/5",
            wide && "sm:flex-row sm:items-stretch",
          )}
        >
          <div className={cn("overflow-hidden rounded-lg", wide && "sm:w-2/5 sm:shrink-0")}>
            <ProjectThumb
              project={project}
              className={cn(
                "h-full transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                wide ? "min-h-36" : "min-h-32",
              )}
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold group-hover:text-primary">{project.title}</h3>
              <ArrowUpRight
                className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">{project.valueProp}</p>
            <p className="mt-1.5 text-xs text-secondary">{project.role}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
              {project.impact ? <Badge tone="success">{project.impact}</Badge> : null}
              {project.technologies.slice(0, wide ? 5 : 3).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </button>
      }
    />
  );
}

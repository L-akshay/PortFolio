"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/types";
import { ProjectDialog } from "./ProjectDialog";
import { ProjectThumb } from "./ProjectThumb";

/** Reference-style project card: lifts on hover, whole card opens details. */
export function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`View details of ${project.title}`}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className="group border-border/50 bg-surface hover:border-border relative flex cursor-pointer flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
      >
        {/* Thumbnail */}
        <div className="px-4 pt-4">
          <ProjectThumb project={project} />
        </div>

        {/* Info */}
        <div className="grow space-y-4 p-4">
          <h3 className="text-foreground text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <div className="space-y-4">
            <p className="text-muted text-sm leading-relaxed">{project.valueProp}</p>
            <p className="text-secondary text-xs font-medium">{project.role}</p>
            <div>
              <h4 className="text-muted mb-2 text-xs font-semibold tracking-wider uppercase">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-elevated/80 text-foreground border-border/30 rounded-md border px-2.5 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="relative z-20 mt-auto flex flex-wrap gap-3 p-4 pt-0">
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
              >
                GitHub
              </Link>
            ) : null}
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="border-border bg-surface hover:bg-elevated text-foreground rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 hover:shadow-md"
              >
                Live Demo
              </Link>
            ) : null}
          </div>
        )}
      </div>

      <ProjectDialog project={project} open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}

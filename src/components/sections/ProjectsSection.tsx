import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Featured projects">
      <SectionHeading
        label="case studies"
        title="Featured Engineering Case Studies"
        description="A closer look at shipped backend, Android and applied-AI work with verified ownership and outcomes."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.slice(0, 4).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/projects"
          className="group border-border bg-surface text-foreground hover:border-foreground/20 relative inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md motion-reduce:transition-none motion-reduce:hover:scale-100"
        >
          Show all projects
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}

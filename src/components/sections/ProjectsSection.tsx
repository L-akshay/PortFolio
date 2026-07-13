import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsSection() {
  const [first, ...rest] = featuredProjects.slice(0, 4);
  return (
    <section id="projects" aria-label="Featured projects">
      <SectionHeading
        label="projects"
        title="Featured Projects"
        description="Selected work across Android, backend and full-stack — company, client and team projects, labelled as such."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <ProjectCard project={first} wide />
        </div>
        {rest.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          All projects
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}

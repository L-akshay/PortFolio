import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies and selected projects across backend, Android and applied AI.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const other = projects.filter((project) => !project.featured);

  return (
    <PageContainer className="pt-14 pb-24">
      <AnimatedSection>
        <SectionHeading
          title="All Projects"
          description="Company products I contributed to, team builds and personal projects. Open any card for the full case study."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </AnimatedSection>

      {other.length > 0 ? (
        <AnimatedSection className="mt-16">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">More experiments</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {other.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </AnimatedSection>
      ) : null}
    </PageContainer>
  );
}

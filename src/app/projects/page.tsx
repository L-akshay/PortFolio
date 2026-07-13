import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects — Android products with 100k+ users, full-stack platforms, hackathon builds and personal experiments.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <PageContainer className="pt-14 pb-24">
      <AnimatedSection>
        <SectionHeading
          label="projects"
          title="All Projects"
          description="Everything I've shipped or built — company products I contributed to, client work, team builds and personal experiments. Click any card for the full story."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </AnimatedSection>

      {other.length > 0 ? (
        <AnimatedSection className="mt-14">
          <h2 className="mb-5 font-mono text-xs tracking-widest text-primary uppercase">
            {"// more experiments"}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {other.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </AnimatedSection>
      ) : null}
    </PageContainer>
  );
}

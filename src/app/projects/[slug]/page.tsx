import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectThumb } from "@/components/projects/ProjectThumb";
import { GithubIcon } from "@/components/ui/SocialIcon";
import { Badge } from "@/components/ui/Badge";

type Props = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} Case Study`;
  const description = project.valueProp;
  const url = `/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${title} - ${profile.name}`,
      description,
      images: project.thumbnail ? [{ url: project.thumbnail.src }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${profile.name}`,
      description,
      images: project.thumbnail ? [project.thumbnail.src] : undefined,
    },
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type":
      project.ownership === "company product" ? "SoftwareApplication" : "CreativeWork",
    name: project.title,
    description: project.valueProp,
    url: `${siteUrl}/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
    },
    applicationCategory: project.category,
  };

  return (
    <PageContainer className="pt-10 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/projects"
        className="text-muted hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to projects
      </Link>

      <article className="space-y-12">
        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <div>
              <p className="text-secondary text-sm font-medium tracking-wide uppercase">
                {project.category}
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
            </div>
            <p className="text-muted max-w-2xl text-lg leading-relaxed">
              {project.valueProp}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Live product
                </Link>
              ) : null}
              {project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-surface hover:bg-elevated inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </Link>
              ) : null}
            </div>
          </div>
          <ProjectThumb project={project} className="lg:mt-2" />
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-border/50 bg-surface rounded-lg border p-4">
            <p className="text-muted text-xs font-semibold tracking-wider uppercase">
              Type
            </p>
            <p className="mt-1 text-sm">{project.category}</p>
          </div>
          <div className="border-border/50 bg-surface rounded-lg border p-4">
            <p className="text-muted text-xs font-semibold tracking-wider uppercase">
              My role
            </p>
            <p className="mt-1 text-sm">{project.role}</p>
          </div>
          <div className="border-border/50 bg-surface rounded-lg border p-4">
            <p className="text-muted text-xs font-semibold tracking-wider uppercase">
              Ownership
            </p>
            <p className="mt-1 text-sm capitalize">{project.ownership}</p>
          </div>
          {project.impact ? (
            <div className="border-border/50 bg-surface rounded-lg border p-4">
              <p className="text-muted text-xs font-semibold tracking-wider uppercase">
                Result
              </p>
              <p className="mt-1 text-sm">{project.impact}</p>
            </div>
          ) : null}
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-10">
            <Section title="Overview">
              <p className="text-muted leading-relaxed">{project.details.context}</p>
            </Section>
            <Section title="Challenge">
              <p className="text-muted leading-relaxed">{project.details.problem}</p>
            </Section>
            <Section title="Results">
              <p className="text-muted leading-relaxed">{project.details.result}</p>
            </Section>
          </div>

          <div className="space-y-10">
            <Section title="My Ownership">
              <ul className="space-y-2.5">
                {project.details.responsibilities.map((item) => (
                  <li key={item} className="text-muted leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
            <Section title="Technical Implementation">
              <ul className="space-y-2.5">
                {project.details.decisions.map((item) => (
                  <li key={item} className="text-muted leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
            {project.details.lessons ? (
              <Section title="Engineering Challenges">
                <p className="text-muted leading-relaxed">{project.details.lessons}</p>
              </Section>
            ) : null}
          </div>
        </div>

        <Section title="Gallery">
          <div className="max-w-2xl">
            <ProjectThumb project={project} />
          </div>
        </Section>
      </article>
    </PageContainer>
  );
}

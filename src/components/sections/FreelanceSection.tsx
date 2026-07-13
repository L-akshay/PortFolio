import { ExternalLink as ExternalLinkIcon, Lock } from "lucide-react";
import { freelanceWork } from "@/data/freelance";
import type { FreelanceProject, WorkStatus } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";

const statusLabel: Record<WorkStatus, { text: string; tone: "success" | "warning" | "default" | "secondary" }> = {
  delivered: { text: "Delivered", tone: "success" },
  "in-development": { text: "In development", tone: "warning" },
  prototype: { text: "Prototype", tone: "secondary" },
  confidential: { text: "Confidential", tone: "default" },
};

function FreelanceCard({ project }: { project: FreelanceProject }) {
  const status = statusLabel[project.status];
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold">{project.name}</h3>
        <div className="flex items-center gap-1.5">
          {project.confidential ? (
            <Badge>
              <Lock className="size-3" aria-hidden="true" />
              Confidential
            </Badge>
          ) : null}
          <Badge tone={status.tone}>{status.text}</Badge>
        </div>
      </div>
      <p className="mt-0.5 text-xs font-medium tracking-wide text-secondary uppercase">
        {project.industry}
      </p>

      <dl className="mt-3 space-y-2 text-sm">
        <div>
          <dt className="text-xs font-medium text-muted uppercase">Problem</dt>
          <dd className="mt-0.5 leading-relaxed text-muted">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-muted uppercase">Delivered</dt>
          <dd className="mt-0.5 leading-relaxed">{project.delivered}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-muted uppercase">My role</dt>
          <dd className="mt-0.5 leading-relaxed text-muted">
            {project.responsibilities.join(" · ")}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {(project.liveUrl || project.caseStudyUrl) && (
        <div className="mt-4 flex gap-4 text-sm">
          {project.liveUrl ? (
            <ExternalLink href={project.liveUrl} className="inline-flex items-center gap-1">
              Live site <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
            </ExternalLink>
          ) : null}
          {project.caseStudyUrl ? (
            <ExternalLink href={project.caseStudyUrl}>Case study</ExternalLink>
          ) : null}
        </div>
      )}
    </article>
  );
}

export function FreelanceSection() {
  return (
    <section id="work" aria-label="Freelance and client work">
      <SectionHeading
        label="client work"
        title="Freelance & Client Work"
        description="Independent projects delivered for real clients — kept separate from personal experiments. Confidential engagements are described without protected details."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FreelanceCard project={freelanceWork[0]} />
        </div>
        {freelanceWork.slice(1).map((p) => (
          <FreelanceCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}

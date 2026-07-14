import { ChevronDown, MapPin } from "lucide-react";
import type { ExperienceItem } from "@/data/types";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ContributionItem } from "./ContributionItem";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  const topContributions = item.contributions.filter((c) => c.top);
  const moreContributions = item.contributions.filter((c) => !c.top);
  const related = (item.relatedProjectSlugs ?? [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  return (
    <article className="border-border/50 bg-surface hover:border-border relative rounded-xl border p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-6">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">
            {item.role} <span className="text-muted">·</span>{" "}
            <span className="text-secondary">{item.company}</span>
          </h3>
          <p className="text-muted mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="font-mono">{item.period}</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3" aria-hidden="true" />
              {item.location}
            </span>
          </p>
        </div>
      </header>

      <p className="text-muted mt-3 text-sm leading-relaxed">{item.description}</p>

      <ul className="mt-4 space-y-2.5">
        {topContributions.map((c) => (
          <ContributionItem key={c.text} contribution={c} />
        ))}
      </ul>

      {moreContributions.length > 0 ? (
        <details className="group mt-3">
          <summary className="text-primary inline-flex cursor-pointer list-none items-center gap-1 rounded-md text-sm font-medium select-none hover:underline [&::-webkit-details-marker]:hidden">
            View all contributions ({moreContributions.length} more)
            <ChevronDown
              className="size-4 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <ul className="mt-3 space-y-2.5">
            {moreContributions.map((c) => (
              <ContributionItem key={c.text} contribution={c} />
            ))}
          </ul>
        </details>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {related.length > 0 ? (
        <p className="text-muted mt-4 text-xs">
          Related projects:{" "}
          {related.map((p, i) => (
            <span key={p.slug}>
              {i > 0 ? ", " : ""}
              <a href="#projects" className="text-secondary hover:underline">
                {p.title}
              </a>
            </span>
          ))}
        </p>
      ) : null}
    </article>
  );
}

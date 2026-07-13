import type { Contribution } from "@/data/types";

export function ContributionItem({ contribution }: { contribution: Contribution }) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <span
        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70"
        aria-hidden="true"
      />
      <span className="leading-relaxed">
        <span className="mr-1.5 font-mono text-xs text-secondary">
          [{contribution.area}]
        </span>
        <span className="text-muted">{contribution.text}</span>
      </span>
    </li>
  );
}

import type { Contribution } from "@/data/types";

export function ContributionItem({ contribution }: { contribution: Contribution }) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <span
        className="bg-primary/70 mt-1.5 size-1.5 shrink-0 rounded-full"
        aria-hidden="true"
      />
      <span className="leading-relaxed">
        <span className="text-secondary mr-1.5 font-mono text-xs">
          [{contribution.area}]
        </span>
        <span className="text-muted">{contribution.text}</span>
      </span>
    </li>
  );
}

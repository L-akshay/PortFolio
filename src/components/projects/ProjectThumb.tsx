import { cn } from "@/lib/utils";
import type { Project } from "@/data/types";

const accents = {
  violet: "from-violet-500/25 via-violet-500/10 text-violet-500",
  cyan: "from-cyan-500/25 via-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  mint: "from-emerald-500/25 via-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  amber: "from-amber-400/25 via-amber-400/10 text-amber-600 dark:text-amber-400",
} as const;

/**
 * Generated thumbnail — an abstract module card standing in for a screenshot.
 * Swap for a real image per project by adding a thumbnail to the data file.
 */
export function ProjectThumb({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "border-border/50 relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border bg-linear-to-br to-transparent",
        accents[project.accent],
        className,
      )}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.15]" aria-hidden="true">
        <defs>
          <pattern
            id={`grid-${project.slug}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path d="M24 0H0v24" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.slug})`} />
      </svg>
      <div className="relative px-4 text-center">
        <p className="font-mono text-lg font-semibold tracking-tight">
          {"<"}
          {project.slug}
          {" />"}
        </p>
        <p className="mt-1 font-mono text-[10px] tracking-widest uppercase opacity-80">
          {project.category}
        </p>
      </div>
    </div>
  );
}

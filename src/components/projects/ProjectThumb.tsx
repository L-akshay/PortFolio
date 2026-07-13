import { cn } from "@/lib/utils";
import type { Project } from "@/data/types";

const accents = {
  violet: "from-[#8b7cff]/25 via-[#8b7cff]/10 text-[#8b7cff]",
  cyan: "from-[#55d6d0]/25 via-[#55d6d0]/10 text-[#3db8b2]",
  mint: "from-[#7fe0b2]/25 via-[#7fe0b2]/10 text-[#3fae7c]",
  amber: "from-amber-400/25 via-amber-400/10 text-amber-500",
} as const;

/**
 * Original generated thumbnail — an abstract "module card" instead of fake
 * screenshots. Zero image requests, no layout shift.
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
        "border-border relative flex min-h-32 items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-br to-transparent",
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

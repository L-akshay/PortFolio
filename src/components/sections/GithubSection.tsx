"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "next-themes";
import { githubUsername } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/SocialIcon";
import { Button } from "@/components/ui/Button";

const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ApiResponse = {
  total?: Record<string, number>;
  contributions?: { date: string; count: number; level: number }[];
};

/** GitHub contribution calendar with loading and graceful error states. */
export function GithubSection() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`,
        );
        if (!res.ok) throw new Error(`API returned ${res.status}`);
        const data = (await res.json()) as ApiResponse;
        if (!data.contributions || data.contributions.length === 0) {
          throw new Error("No contribution data");
        }
        if (cancelled) return;
        setContributions(
          data.contributions.map((c) => ({
            date: c.date,
            count: c.count,
            level: Math.min(Math.max(c.level, 0), 4) as ContributionItem["level"],
          })),
        );
        setTotal(data.contributions.reduce((sum, c) => sum + c.count, 0));
      } catch {
        if (!cancelled) setHasError(true);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" aria-label="GitHub contributions">
      <SectionHeading title="GitHub Contributions" />
      <p className="text-muted -mt-4 mb-6 text-sm">
        {!isLoading && !hasError && total > 0 ? (
          <>
            <span className="text-foreground font-semibold">
              {total.toLocaleString()} contributions
            </span>{" "}
            in the last year — <b>{githubUsername}</b>
          </>
        ) : (
          <>
            <b>{githubUsername}</b>&apos;s contributions in the last year
          </>
        )}
      </p>

      {isLoading ? (
        <div
          className="border-border/50 bg-surface h-40 animate-pulse rounded-xl border shadow-sm motion-reduce:animate-none"
          aria-hidden="true"
        />
      ) : hasError || contributions.length === 0 ? (
        <div className="text-muted border-border rounded-xl border-2 border-dashed p-8 text-center">
          <div className="bg-elevated mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
            <GithubIcon className="h-8 w-8" />
          </div>
          <p className="text-foreground mb-2 font-medium">
            Couldn&apos;t load contributions
          </p>
          <p className="mb-4 text-sm">
            The GitHub data is taking a break — view it directly instead.
          </p>
          <Button variant="outline" asChild>
            <Link
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <GithubIcon className="h-4 w-4" />
              Open GitHub profile
            </Link>
          </Button>
        </div>
      ) : (
        <div className="border-border/50 rounded-xl border bg-white p-5 shadow-sm dark:border-[#30363d] dark:bg-[#0d1117]">
          <div className="w-full overflow-x-auto">
            <ActivityCalendar
              data={contributions}
              blockSize={11}
              blockMargin={3}
              blockRadius={2}
              fontSize={12}
              showTotalCount={false}
              showWeekdayLabels
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              maxLevel={4}
              // GitHub's real contribution palettes (light and dark UI)
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
              style={{ color: "rgb(150,150,150)" }}
            />
          </div>
        </div>
      )}

      <Link
        href={`https://github.com/${githubUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted hover:text-foreground mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
      >
        <GithubIcon className="size-4" />
        github.com/{githubUsername}
      </Link>
    </section>
  );
}

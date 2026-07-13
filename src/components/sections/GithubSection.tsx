import { Suspense } from "react";
import { Star, GitFork } from "lucide-react";
import { githubUsername } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/SocialIcon";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

async function fetchRecentRepos(): Promise<Repo[] | null> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=12`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return null;
    const repos = (await res.json()) as Repo[];
    return repos.filter((r) => !r.fork).slice(0, 4);
  } catch {
    return null;
  }
}

async function RepoList() {
  const repos = await fetchRecentRepos();

  if (!repos || repos.length === 0) {
    // Graceful fallback when the GitHub API is unavailable or rate-limited.
    return (
      <p className="border-border bg-surface text-muted rounded-xl border p-5 text-sm">
        Couldn&apos;t load repositories right now — browse them directly on{" "}
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          github.com/{githubUsername}
        </a>
        .
      </p>
    );
  }

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {repos.map((repo) => (
        <li key={repo.name}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-surface hover:border-border-strong flex h-full flex-col rounded-xl border p-4 transition-colors"
          >
            <p className="text-primary truncate font-mono text-sm font-medium">
              {repo.name}
            </p>
            <p className="text-muted mt-1 line-clamp-2 flex-1 text-xs leading-relaxed">
              {repo.description ?? "No description"}
            </p>
            <p className="text-muted mt-3 flex items-center gap-3 text-xs">
              {repo.language ? <span>{repo.language}</span> : null}
              <span className="inline-flex items-center gap-1">
                <Star className="size-3" aria-hidden="true" />
                {repo.stargazers_count}
              </span>
              <span className="inline-flex items-center gap-1">
                <GitFork className="size-3" aria-hidden="true" />
                {repo.forks_count}
              </span>
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}

function RepoSkeleton() {
  return (
    <div className="grid gap-3 sm:grid-cols-2" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="border-border bg-elevated h-28 animate-pulse rounded-xl border motion-reduce:animate-none"
        />
      ))}
    </div>
  );
}

export function GithubSection() {
  return (
    <section id="github" aria-label="GitHub activity">
      <SectionHeading
        label="github"
        title="GitHub Activity"
        description="Recent public repositories — the day-to-day tinkering behind the shipped work."
      />
      <Suspense fallback={<RepoSkeleton />}>
        <RepoList />
      </Suspense>
      <a
        href={`https://github.com/${githubUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
      >
        <GithubIcon className="size-4" />
        github.com/{githubUsername}
      </a>
    </section>
  );
}

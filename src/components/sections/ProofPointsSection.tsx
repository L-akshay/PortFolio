import { profile } from "@/data/profile";

export function ProofPointsSection() {
  return (
    <section aria-label="Measurable proof points">
      <dl className="grid gap-4 sm:grid-cols-3">
        {profile.highlights.map((highlight) => (
          <div
            key={highlight.label}
            className="border-border/50 bg-surface rounded-xl border p-5 shadow-sm"
          >
            <dt className="text-muted text-xs font-medium tracking-wide uppercase">
              {highlight.label}
            </dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight">
              {highlight.value}
            </dd>
            <dd className="text-muted mt-2 text-sm leading-relaxed">
              {highlight.detail}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

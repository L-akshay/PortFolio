type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

/** Consistent editorial section header: small mono label + heading. */
export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
        {"// "}
        {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-prose text-sm text-muted">{description}</p>
      ) : null}
    </div>
  );
}

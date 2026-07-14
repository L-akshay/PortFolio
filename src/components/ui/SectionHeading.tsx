import { TextReveal } from "./TextReveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
  /** Kept for backwards compatibility; no longer rendered. */
  label?: string;
};

/** Big clean section title with a word-by-word reveal. */
export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <TextReveal className="text-3xl font-semibold tracking-tight" delay={100}>
        {title}
      </TextReveal>
      {description ? (
        <p className="text-muted mt-2 max-w-prose text-sm">{description}</p>
      ) : null}
    </div>
  );
}

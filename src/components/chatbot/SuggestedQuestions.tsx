"use client";

const suggestions = [
  "What experience does Lakshay have?",
  "What did he work on at Web3Task?",
  "Does he have Android experience?",
  "Has he led a team?",
  "Is he available for internships?",
  "How can I contact him?",
];

export function SuggestedQuestions({
  onSelect,
  disabled,
}: {
  onSelect: (question: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-1.5" aria-label="Suggested questions">
      {suggestions.map((q) => (
        <button
          key={q}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(q)}
          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground disabled:opacity-50"
        >
          {q}
        </button>
      ))}
    </div>
  );
}

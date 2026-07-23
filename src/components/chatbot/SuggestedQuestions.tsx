"use client";

const suggestions = [
  "What did Lakshay build at Web3Task?",
  "Explain the Traverse VPN architecture.",
  "What backend experience does Lakshay have?",
  "Which projects use AI?",
  "Why should we interview Lakshay?",
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
          className="border-border bg-surface text-muted hover:border-border-strong hover:text-foreground rounded-full border px-3 py-1.5 text-xs transition-colors disabled:opacity-50"
        >
          {q}
        </button>
      ))}
    </div>
  );
}

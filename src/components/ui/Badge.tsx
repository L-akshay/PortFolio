import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "primary" | "secondary" | "success" | "warning";
  className?: string;
};

const tones = {
  default: "border-border bg-elevated text-muted",
  primary: "border-primary/30 bg-primary/10 text-primary",
  secondary: "border-secondary/30 bg-secondary/10 text-secondary",
  success: "border-success/30 bg-success/10 text-success",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export function Badge({ children, tone = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

/** Compact centered column (~768px) with a soft blur-in entrance. */
export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("animate-fade-in-blur mx-auto w-full max-w-3xl px-4", className)}>
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";

/** Compact editorial column used by every page (~820px). */
export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[52rem] px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

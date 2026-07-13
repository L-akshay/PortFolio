import { cn } from "@/lib/utils";

type ExternalLinkProps = React.ComponentProps<"a">;

/** Anchor with safe rel/target defaults for off-site links. */
export function ExternalLink({ className, children, ...props }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-primary underline-offset-4 transition-colors hover:underline",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

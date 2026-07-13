import Link from "next/link";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border py-10">
      <PageContainer className="flex flex-col items-center gap-4 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono">
            <span className="text-primary">~/</span>
            {profile.shortName}
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-md p-2 text-muted transition-colors hover:text-primary"
            >
              <SocialIcon icon={s.icon} className="size-4" />
            </a>
          ))}
          <Link href="/privacy" className="ml-2 hover:text-foreground">
            Privacy
          </Link>
        </div>
      </PageContainer>
    </footer>
  );
}

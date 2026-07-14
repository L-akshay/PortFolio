import Link from "next/link";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { PageContainer } from "./PageContainer";

export function Footer() {
  return (
    <footer className="text-muted mt-24 pb-8 text-center text-sm">
      <PageContainer>
        <blockquote className="mx-auto max-w-xl">
          <p className="italic">&quot;Ship it, learn from it, ship it better.&quot;</p>
        </blockquote>
        <div className="mt-6 flex justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted hover:text-foreground transition-colors"
            >
              <SocialIcon icon={s.icon} className="size-4" />
            </a>
          ))}
        </div>
        <p className="mt-4">
          Developed by <span className="text-foreground font-bold">{profile.name}</span>
          <br />© {new Date().getFullYear()} ·{" "}
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
        </p>
      </PageContainer>
    </footer>
  );
}

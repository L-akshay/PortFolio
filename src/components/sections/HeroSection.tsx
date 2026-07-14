import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { TextReveal } from "@/components/ui/TextReveal";

/**
 * Identity-first hero: banner with a personal motto, overlapping circular
 * avatar, gradient name and a word-by-word revealed role line — followed by
 * the positioning paragraph, CTAs and socials.
 *
 * The banner is a generated gradient and the avatar a monogram; drop real
 * images into the two marked spots to replace them.
 */
export function HeroSection() {
  return (
    <section aria-label="Introduction">
      {/* Banner + avatar */}
      <div className="relative -mt-8 mb-16">
        <div className="relative h-52 w-full overflow-hidden rounded-2xl">
          {/* Swap /images/banner.svg for a real photo banner anytime */}
          <Image
            alt="hero banner"
            src="/images/banner.svg"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-start justify-center px-4 pt-4 text-center">
            <p className="text-lg font-medium text-white italic drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:text-2xl">
              From prototype to production, I follow through.
            </p>
          </div>
        </div>
        <div className="border-background bg-background ring-border/60 dark:ring-border absolute -bottom-12 left-8 h-24 w-24 overflow-hidden rounded-full border-4 shadow-md ring-1 shadow-black/20 md:h-28 md:w-28">
          <Image
            alt={`${profile.name} profile photo`}
            src="/images/profile.png"
            width={112}
            height={112}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Name + role */}
      <div className="space-y-2">
        <h1 className="text-muted text-4xl font-semibold tracking-tight md:text-5xl">
          {"Hi, I'm "}
          <span className="from-foreground to-foreground/70 bg-linear-to-r bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <TextReveal className="text-muted text-2xl font-medium md:text-3xl" delay={300}>
          {profile.role}
        </TextReveal>
      </div>

      {/* Description */}
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {profile.openToWork ? (
            <span className="border-success/30 bg-success/10 text-success inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-medium">
              <span className="relative flex size-2">
                <span className="bg-success absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:hidden" />
                <span className="bg-success relative inline-flex size-2 rounded-full" />
              </span>
              Open to opportunities
            </span>
          ) : null}
          <span className="border-border bg-elevated/80 text-muted inline-flex items-center gap-1 rounded-full border px-2.5 py-1">
            <MapPin className="size-3" aria-hidden="true" />
            {profile.location}
          </span>
        </div>

        <p className="text-muted max-w-2xl text-lg leading-relaxed">
          {profile.tagline}
          <br />
          <u className="underline underline-offset-2">Building</u> end-to-end,{" "}
          <u className="underline underline-offset-2">shipping</u> fast,{" "}
          <u className="underline underline-offset-2">learning</u> faster.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="group">
            <Link href="/resume">
              <FileText />
              Resume
            </Link>
          </Button>
          <Button asChild variant="outline" className="group">
            <a href="#contact">
              Contact me
              <ArrowRight className="group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-6 flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-muted hover:text-foreground transform transition-all duration-200 hover:scale-110"
          >
            <SocialIcon icon={s.icon} className="size-6" />
          </a>
        ))}
      </div>
    </section>
  );
}

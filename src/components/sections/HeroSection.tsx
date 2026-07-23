import Image from "next/image";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import {
  heroHeading,
  heroMotto,
  heroSummary,
  professionalTitle,
  resumePdfHref,
} from "@/data/site-constants";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { TextReveal } from "@/components/ui/TextReveal";

const github = socials.find((social) => social.label === "GitHub");
const linkedin = socials.find((social) => social.label === "LinkedIn");

export function HeroSection() {
  return (
    <section aria-label="Introduction">
      <div className="relative -mt-8 mb-16">
        <div className="relative h-44 w-full overflow-hidden rounded-2xl sm:h-52">
          <Image
            alt=""
            src="/images/banner.svg"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-x-0 top-0 flex justify-center px-4 pt-4 text-center">
            <p className="max-w-xl text-base font-medium text-white italic drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] sm:text-xl">
              {heroMotto}
            </p>
          </div>
        </div>
        <div className="border-background bg-background ring-border/60 dark:ring-border absolute -bottom-12 left-6 h-24 w-24 overflow-hidden rounded-full border-4 shadow-md ring-1 shadow-black/20 sm:left-8 md:h-28 md:w-28">
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

      <div className="space-y-7">
        <div className="space-y-3">
          <p className="text-secondary text-sm font-semibold tracking-wide uppercase">
            {professionalTitle}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {heroHeading}
          </h1>
          <TextReveal
            className="text-muted block max-w-3xl text-lg leading-relaxed sm:text-xl"
            delay={120}
          >
            {heroSummary}
          </TextReveal>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="group">
            <a href="#projects">
              View Case Studies
              <ArrowRight className="group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" className="group">
            <a href={resumePdfHref} target="_blank" rel="noopener noreferrer">
              <FileText />
              Resume
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          {github ? (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground inline-flex items-center gap-2"
            >
              <SocialIcon icon="github" className="size-4" />
              GitHub
            </a>
          ) : null}
          {linkedin ? (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground inline-flex items-center gap-2"
            >
              <SocialIcon icon="linkedin" className="size-4" />
              LinkedIn
            </a>
          ) : null}
          <span className="text-muted inline-flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}

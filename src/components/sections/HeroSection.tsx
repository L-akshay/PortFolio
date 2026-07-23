import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FileText, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import {
  heroHeading,
  heroMotto,
  heroSummary,
  professionalTitle,
  resumePdfHref,
  webResumeHref,
} from "@/data/site-constants";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";

const github = socials.find((social) => social.label === "GitHub");
const linkedin = socials.find((social) => social.label === "LinkedIn");

export function HeroSection() {
  return (
    <section aria-label="Introduction">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-7">
          <div className="space-y-4">
            <p className="text-secondary text-sm font-semibold tracking-wide uppercase">
              {professionalTitle}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {heroHeading}
            </h1>
            <p className="text-muted max-w-2xl text-lg leading-relaxed">
              {heroSummary}
            </p>
            <p className="text-muted text-sm font-medium italic">{heroMotto}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="group">
              <a href="#projects">
                View Case Studies
                <ArrowRight className="group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" className="group">
              <a href={resumePdfHref} download>
                <Download className="group-hover:translate-y-0.5" />
                Download Resume
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

        <div className="relative mx-auto w-full max-w-sm lg:mr-0">
          <div className="border-border bg-surface relative aspect-[4/5] overflow-hidden rounded-2xl border shadow-sm">
            <Image
              alt={`${profile.name} profile photo`}
              src="/images/profile.png"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 360px"
              className="object-cover"
            />
          </div>
          <div className="border-border bg-surface absolute -right-2 -bottom-4 max-w-[14rem] rounded-xl border p-3 shadow-sm sm:-right-5">
            <p className="text-muted text-xs font-semibold tracking-wider uppercase">
              Current focus
            </p>
            <p className="mt-1 text-sm leading-snug">Backend, Android and applied AI systems</p>
          </div>
          <Link
            href={webResumeHref}
            className="text-muted hover:text-foreground mt-6 inline-flex items-center gap-2 text-sm lg:hidden"
          >
            <FileText className="size-4" aria-hidden="true" />
            View Web Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

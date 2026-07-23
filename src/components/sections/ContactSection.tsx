import { Download, MapPin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { resumePdfHref } from "@/data/site-constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact">
      <SectionHeading
        label="contact"
        title="Let's build something useful."
        description="Open to internships, engineering roles and freelance projects. The fastest way to reach me is email."
      />
      <div className="grid gap-8 sm:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-foreground hover:text-primary flex items-center gap-2.5"
          >
            <Mail className="text-primary size-4" aria-hidden="true" />
            {profile.email}
          </a>
          <p className="text-muted flex items-center gap-2.5">
            <MapPin className="text-primary size-4" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="text-muted flex items-start gap-2.5">
            <span
              className="bg-success mt-1 size-2 shrink-0 rounded-full"
              aria-hidden="true"
            />
            {profile.availability}
          </p>
          <div className="flex items-center gap-1 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted hover:bg-elevated hover:text-primary rounded-lg p-2.5 transition-colors"
              >
                <SocialIcon icon={s.icon} className="size-5" />
              </a>
            ))}
          </div>
          <a
            href={resumePdfHref}
            download
            className="border-border bg-surface hover:bg-elevated inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
          >
            <Download className="size-4" aria-hidden="true" />
            Download resume
          </a>
        </div>
        <div className="border-border/50 bg-surface relative rounded-xl border p-5 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

import { MapPin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact">
      <SectionHeading
        label="contact"
        title="Let's build something"
        description="Open to internships, engineering roles and freelance projects. The fastest way to reach me is email."
      />
      <div className="grid gap-8 sm:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2.5 text-foreground hover:text-primary"
          >
            <Mail className="size-4 text-primary" aria-hidden="true" />
            {profile.email}
          </a>
          <p className="flex items-center gap-2.5 text-muted">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="flex items-start gap-2.5 text-muted">
            <span
              className="mt-1 size-2 shrink-0 rounded-full bg-success"
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
                className="rounded-lg p-2.5 text-muted transition-colors hover:bg-elevated hover:text-primary"
              >
                <SocialIcon icon={s.icon} className="size-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative rounded-xl border border-border bg-surface p-5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

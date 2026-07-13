import type { ContactInformation, SocialLink } from "./types";
import { profile } from "./profile";

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/L-akshay", icon: "github" },
  // TODO: replace with your real LinkedIn profile URL before publishing
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const contact: ContactInformation = {
  email: profile.email,
  location: profile.location,
  availability: profile.availability,
  socials,
};

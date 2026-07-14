import type { ContactInformation, SocialLink } from "./types";
import { profile } from "./profile";

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/L-akshay", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lakshay-dawar-32153a32b",
    icon: "linkedin",
  },
  // TODO: paste your Codolio profile URL (e.g. https://codolio.com/profile/<username>)
  // { label: "Codolio", href: "https://codolio.com/profile/...", icon: "globe" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const contact: ContactInformation = {
  email: profile.email,
  location: profile.location,
  availability: profile.availability,
  socials,
};

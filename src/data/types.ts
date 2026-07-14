/**
 * Shared content types. Every section of the site renders from data files in
 * this directory — update content here, never inside components.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** lucide icon name understood by components/ui/SocialIcon */
  icon: "github" | "linkedin" | "mail" | "globe";
};

export type Profile = {
  name: string;
  /** Short handle used for the nav mark and chatbot persona. */
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  availability: string;
  /** true renders the green availability dot */
  openToWork: boolean;
  email: string;
  /** Shown on the resume page only — never exposed to the chatbot. */
  phone?: string;
  intro: string;
  highlights: { label: string; value: string; detail: string }[];
  currentFocus: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
};

export type Contribution = {
  /** Grouping shown as a small label, e.g. product name */
  area: string;
  text: string;
  /** Top contributions are shown before "view all" is expanded */
  top?: boolean;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  contributions: Contribution[];
  technologies: string[];
  relatedProjectSlugs?: string[];
  links?: { label: string; href: string }[];
};

export type WorkStatus = "delivered" | "in-development" | "prototype" | "confidential";

export type FreelanceProject = {
  name: string;
  industry: string;
  problem: string;
  delivered: string;
  responsibilities: string[];
  stack: string[];
  status: WorkStatus;
  confidential: boolean;
  liveUrl?: string;
  caseStudyUrl?: string;
};

export type ProjectCategory =
  | "Android & Backend Product"
  | "Android Networking"
  | "Full-Stack Platform"
  | "Hackathon"
  | "Web App"
  | "Client Work";

export type Project = {
  slug: string;
  title: string;
  valueProp: string;
  role: string;
  category: ProjectCategory;
  /** Ownership context so company work is never presented as personal work. */
  ownership: "company product" | "personal project" | "team project" | "client project";
  technologies: string[];
  impact?: string;
  featured: boolean;
  /** Accent used by the generated SVG-style thumbnail. */
  accent: "violet" | "cyan" | "mint" | "amber";
  /**
   * Real thumbnail image (path under /public). `fit: "contain"` floats the
   * image on a soft gradient (for portrait screenshots/logos); "cover" fills.
   * Omit to render the generated placeholder art.
   */
  thumbnail?: { src: string; fit?: "cover" | "contain" };
  githubUrl?: string;
  liveUrl?: string;
  details: {
    context: string;
    problem: string;
    responsibilities: string[];
    decisions: string[];
    result: string;
    lessons?: string;
  };
};

export type SkillGroup = {
  title: string;
  /** One line saying what this capability means in practice. */
  summary: string;
  skills: string[];
};

export type FAQItem = {
  /** Keywords that trigger this deterministic answer (lowercase). */
  triggers: string[];
  question: string;
  answer: string;
};

export type ContactInformation = {
  email: string;
  location: string;
  availability: string;
  socials: SocialLink[];
};

export type PortfolioKnowledge = {
  profile: Profile;
  education: EducationItem[];
  experience: ExperienceItem[];
  freelanceWork: FreelanceProject[];
  projects: Project[];
  skills: SkillGroup[];
  faq: FAQItem[];
  contact: ContactInformation;
};

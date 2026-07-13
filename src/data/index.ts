import type { PortfolioKnowledge } from "./types";
import { profile, education } from "./profile";
import { experience } from "./experience";
import { freelanceWork } from "./freelance";
import { projects } from "./projects";
import { skills } from "./skills";
import { faq } from "./chatbot-faq";
import { contact } from "./socials";

/** Single approved knowledge object — the chatbot may only answer from this. */
export const portfolioKnowledge: PortfolioKnowledge = {
  profile,
  education,
  experience,
  freelanceWork,
  projects,
  skills,
  faq,
  contact,
};

export * from "./types";
export { profile, education } from "./profile";
export { experience } from "./experience";
export { freelanceWork } from "./freelance";
export { projects, featuredProjects } from "./projects";
export { skills } from "./skills";
export { faq } from "./chatbot-faq";
export { socials, contact } from "./socials";

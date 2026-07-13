import type { FreelanceProject } from "./types";

export const freelanceWork: FreelanceProject[] = [
  {
    name: "QuranLearn — Online Education Platform",
    industry: "Education",
    problem:
      "A tutoring service ran classes over spreadsheets and chat apps, with no single place for scheduling, attendance or homework.",
    delivered:
      "A full learning platform with student, teacher and admin roles: course and session management, attendance, homework, notes and meeting integration.",
    responsibilities: [
      "Full-stack design and implementation",
      "Role-based auth and admin workflows",
      "Database schema and deployment",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Auth.js", "Tailwind CSS"],
    status: "in-development",
    confidential: false,
  },
  {
    name: "Consumer E-commerce Client",
    industry: "E-commerce",
    problem:
      "A retail client needed a storefront and content workflow their team could update without a developer.",
    delivered:
      "A responsive storefront website with an editable content layer and deployment pipeline.",
    responsibilities: [
      "Frontend build",
      "Content management setup",
      "Hosting and deployment workflow",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    status: "delivered",
    confidential: true,
  },
  {
    name: "Business Landing Pages",
    industry: "Small business",
    problem:
      "Small businesses needed fast, SEO-sound landing pages that load well on low-end mobile devices.",
    delivered:
      "Multiple landing pages with optimized images, structured metadata and analytics, deployed on Vercel and Firebase Hosting.",
    responsibilities: [
      "Design-to-code implementation",
      "Performance and SEO",
      "Deployment",
    ],
    stack: ["Next.js", "Tailwind CSS", "Firebase Hosting", "Vercel"],
    status: "delivered",
    confidential: true,
  },
];

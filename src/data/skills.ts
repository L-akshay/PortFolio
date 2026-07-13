import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    summary: "Product UIs that stay fast and accessible.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    title: "Backend",
    summary: "APIs and services that hold up under real users.",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Flask",
      "REST APIs",
      "Authentication",
      "Rate limiting",
      "Background workflows",
    ],
  },
  {
    title: "Android",
    summary: "Native apps shipped to production, widgets to VPNs.",
    skills: ["Kotlin", "Android SDK", "Widgets", "VpnService", "WireGuard", "Firebase"],
  },
  {
    title: "Databases",
    summary: "Schema design and sync across relational and document stores.",
    skills: ["PostgreSQL", "Supabase", "Prisma", "Firestore", "MongoDB"],
  },
  {
    title: "Infrastructure",
    summary: "Deployment pipelines that make shipping boring.",
    skills: [
      "Docker",
      "Vercel",
      "Firebase Hosting",
      "GitHub Actions",
      "Cloudflare",
      "Deployment workflows",
    ],
  },
  {
    title: "Applied AI",
    summary: "LLM features grounded in retrieval, not vibes.",
    skills: [
      "LLM integrations",
      "Structured prompting",
      "Retrieval-based assistants",
      "AI-assisted product workflows",
      "Context & memory systems",
    ],
  },
];

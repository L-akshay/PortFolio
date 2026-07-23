import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    summary: "Core languages used across mobile, backend and systems work.",
    skills: ["Kotlin", "Java", "TypeScript", "JavaScript", "Python", "SQL", "C++"],
  },
  {
    title: "Backend",
    summary: "APIs, data stores and realtime workflows for production products.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Firebase",
      "Firestore",
      "PostgreSQL",
      "Supabase",
      "WebSockets",
    ],
  },
  {
    title: "Android",
    summary: "Native Android product work, widgets and networking surfaces.",
    skills: [
      "Android SDK",
      "Kotlin",
      "VpnService",
      "WireGuard",
      "Android Widgets",
      "Firebase Analytics",
      "Crashlytics",
    ],
  },
  {
    title: "AI and Infrastructure",
    summary: "Applied-AI features and deployment workflows.",
    skills: ["LLM APIs", "RAG", "Docker", "GitHub Actions", "CI/CD", "Cloud Run"],
  },
];

export const additionalSkills =
  "Also worked with React, Next.js, MongoDB, Redis, Prisma and Tailwind CSS.";

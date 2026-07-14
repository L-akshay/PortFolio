import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    summary: "Daily drivers across systems, mobile and web.",
    skills: ["Java", "Kotlin", "Python", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend & Systems",
    summary: "APIs and workflows that hold up under real users.",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "WebSockets",
      "Async workflows",
      "Concurrency",
      "Synchronization",
      "Distributed systems fundamentals",
      "Redis",
    ],
  },
  {
    title: "AI Systems",
    summary: "LLM features grounded in structure, not vibes.",
    skills: [
      "LLM APIs",
      "RAG",
      "Structured outputs",
      "Tool-calling workflows",
      "Prompt optimization",
      "AI data pipelines",
      "Speech-to-text workflows",
    ],
  },
  {
    title: "Databases",
    summary: "Relational and document stores, synced across devices.",
    skills: ["PostgreSQL", "MongoDB", "Firebase Realtime Database", "Cloud Firestore"],
  },
  {
    title: "Mobile & Cloud",
    summary: "Native Android shipped to production, deployed anywhere.",
    skills: [
      "Android",
      "Android VpnService",
      "Firebase",
      "Docker",
      "Linux",
      "CI/CD",
      "Google Cloud Run",
      "Vercel",
    ],
  },
  {
    title: "Reliability & Debugging",
    summary: "The unglamorous work that keeps products alive.",
    skills: [
      "Structured logging",
      "Crash analytics",
      "Incident triage",
      "Timeouts & retries",
      "Exponential backoff",
      "Graceful degradation",
      "Performance debugging",
    ],
  },
  {
    title: "CS Fundamentals",
    summary: "The foundation under everything above.",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Software Design",
    ],
  },
];

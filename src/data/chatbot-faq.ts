import type { FAQItem } from "./types";

/**
 * Deterministic answers. These are served without an AI provider (fallback
 * mode) and also given to the model as approved phrasing for common asks.
 */
export const faq: FAQItem[] = [
  {
    triggers: ["contact", "email", "reach", "hire", "get in touch"],
    question: "How can I contact Lakshay?",
    answer:
      "Email lakshaydawar2006@gmail.com, or use the contact form in the Contact section. GitHub: github.com/L-akshay.",
  },
  {
    triggers: [
      "available",
      "availability",
      "internship",
      "opportunit",
      "open to",
      "remote",
    ],
    question: "Is Lakshay available for internships?",
    answer:
      "Yes — Lakshay is open to internships and engineering opportunities, including remote roles. He is based in Delhi, India.",
  },
  {
    triggers: ["experience", "work history", "web3task", "intern"],
    question: "What experience does Lakshay have?",
    answer:
      "Lakshay worked as a Full-Stack Developer Intern at Web3Task (Noida, January–July 2026), contributing to VoiceToNotes — an app with 100,000+ users — and Traverse VPN, a WireGuard-based Android VPN client. Details are in the Experience section.",
  },
  {
    triggers: ["voicetonotes", "voice to notes", "widget"],
    question: "What did Lakshay contribute to VoiceToNotes?",
    answer:
      "On VoiceToNotes (a Web3Task product with 100,000+ users) he built Android home-screen widgets, worked on Firestore sync, streaming/chunked audio handling, session management and rate limiting, and integrated Firebase Analytics and Crashlytics.",
  },
  {
    triggers: ["android", "kotlin", "vpn", "wireguard", "traverse"],
    question: "Does Lakshay have Android experience?",
    answer:
      "Yes — production Android work in Kotlin: home-screen widgets and audio handling on VoiceToNotes, plus split tunnelling and connection lifecycle work on Traverse VPN using Android VpnService and WireGuard.",
  },
  {
    triggers: ["backend", "api", "server", "database"],
    question: "Which projects show backend experience?",
    answer:
      "Backend work includes Firestore synchronization, streaming/chunked audio handling, session management and rate limiting on VoiceToNotes, plus the full data model, auth and role-based workflows on QuranLearn (Next.js, Prisma, Supabase, Auth.js). See Experience and Projects.",
  },
  {
    triggers: ["lead", "led", "team", "leadership", "floatchat", "hackathon", "sih"],
    question: "Has Lakshay led a team?",
    answer:
      "Yes — he led a six-person team building FloatChat (Flask + React) for Smart India Hackathon, handling scoping, task split and final integration.",
  },
  {
    triggers: ["skill", "technolog", "stack", "tools", "languages"],
    question: "What technologies does Lakshay use?",
    answer:
      "Frontend: React, Next.js, TypeScript, Tailwind. Backend: Node.js, Express, NestJS, Flask. Android: Kotlin, Android SDK, WireGuard. Databases: PostgreSQL, Supabase, Prisma, Firestore, MongoDB. Infra: Docker, Vercel, GitHub Actions. Plus applied-AI work with LLM integrations and retrieval.",
  },
  {
    triggers: ["impactful", "best project", "top project", "proud"],
    question: "Show me the most impactful project.",
    answer:
      "VoiceToNotes — a Web3Task product serving more than 100,000 users, where Lakshay built Android widgets and worked on sync, audio streaming and backend hardening. It's featured in the Projects section.",
  },
  {
    triggers: ["education", "degree", "college", "university", "study"],
    question: "What is Lakshay's education?",
    answer:
      "He is pursuing a B.Tech in Computer Science (started 2024), based in Delhi, India.",
  },
  {
    triggers: ["resume", "cv"],
    question: "Where can I find the resume?",
    answer:
      "The Resume page (/resume) has a full printable resume built from this portfolio.",
  },
  {
    triggers: ["github", "repos", "code"],
    question: "Where is Lakshay's GitHub?",
    answer:
      "github.com/L-akshay — recent public repositories are shown in the GitHub section.",
  },
  {
    triggers: ["freelance", "client", "commission"],
    question: "Does Lakshay do freelance work?",
    answer:
      "Yes — freelance and client projects include the QuranLearn education platform, an e-commerce storefront and business landing pages. Some client work is confidential; see the Freelance & Client Work section.",
  },
];

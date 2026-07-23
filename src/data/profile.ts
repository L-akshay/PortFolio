import type { EducationItem, Profile } from "./types";
import { professionalTitle } from "./site-constants";

export const profile: Profile = {
  name: "Lakshay Dawar",
  shortName: "lakshay",
  role: professionalTitle,
  tagline:
    "Software engineer building production backend, Android and applied-AI systems. Shipped a WireGuard VPN and contributed to a speech-to-text product serving 100K+ users.",
  location: "Delhi, India",
  availability: "Open to software engineering internships - remote friendly",
  openToWork: true,
  email: "lakshaytechai@gmail.com",
  phone: "+91 7827474642",
  intro:
    "I'm a Computer Science undergraduate focused on backend reliability, Android networking and applied AI systems. I like owning the practical middle of a product: APIs, mobile workflows, data sync, debugging and release handoff. My current direction is production engineering for AI-enabled products, with strong CS fundamentals underneath.",
  highlights: [
    {
      label: "Voice-to-Notes users",
      value: "100K+",
      detail: "backend and Android workflows for a production speech-to-text product",
    },
    {
      label: "VPN launch",
      value: "100+",
      detail: "Traverse VPN users reached in the first 48 hours after launch",
    },
    {
      label: "Feature adoption",
      value: "15-25%",
      detail: "lift from Android recording widgets and quick-access flows",
    },
  ],
  currentFocus:
    "Currently deepening AI systems work - RAG, structured outputs, tool-calling workflows and AI data pipelines - on top of solid CS fundamentals and daily DSA practice.",
};

export const education: EducationItem[] = [
  {
    institution: "Bhagwan Parshuram Institute of Technology, GGSIPU",
    degree: "B.Tech in Computer Science - GPA 9.1/10",
    period: "Expected Aug 2028",
    detail:
      "Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOP, Software Design",
  },
];

export const achievements: string[] = [
  "Directed 6 developers at Smart India Hackathon 2025, coordinating parallel frontend/backend/AI execution to deliver a live AI-system demo within 36 hours.",
  "Led a 4-member project team during the Web3Task internship through task breakdown, implementation ownership, debugging and release handoff.",
  "Resolved 70+ Android/backend and transcription issues using crash analytics, structured logs, backend traces and user reports.",
];

import type { EducationItem, Profile } from "./types";

export const profile: Profile = {
  name: "Lakshay Dawar",
  shortName: "lakshay",
  role: "Software Engineer · AI Systems · Backend & Android Infrastructure",
  tagline:
    "I ship production software — a WireGuard VPN client launched to Google Play with 100+ users in 48 hours, and backend workflows for an AI speech-to-text app serving 100K+ users.",
  location: "Delhi, India",
  availability: "Open to software engineering internships · remote friendly",
  openToWork: true,
  email: "lakshaytechai@gmail.com",
  phone: "+91 7827474642",
  intro:
    "I'm a Computer Science undergraduate at GGSIPU (GPA 9.1/10) with production experience across AI-integrated backend systems, Android networking and user-facing products. At Web3Task I architected and launched Traverse VPN — a WireGuard-based Android client that reached 100+ Play Store users within 48 hours — and built REST APIs and async backend workflows for Voice-to-Notes, an AI speech-to-text app with 100K+ users. I've triaged 70+ production issues down from hours to under 30 minutes, led a 4-member internship project team, and directed 6 developers to a live AI-system demo at Smart India Hackathon 2025. My focus: concurrency, networking, databases, reliability, and scalable AI infrastructure.",
  highlights: [
    {
      label: "Users reached",
      value: "100K+",
      detail:
        "on Voice-to-Notes, the AI speech-to-text app I build backend workflows for",
    },
    {
      label: "Play Store launch",
      value: "48 hrs",
      detail: "Traverse VPN went from release to 100+ users in two days",
    },
    {
      label: "Issues resolved",
      value: "70+",
      detail: "production incidents triaged; recurring fixes cut from hours to <30 min",
    },
  ],
  currentFocus:
    "Currently deepening AI systems work — RAG, structured outputs, tool-calling workflows and AI data pipelines — on top of solid CS fundamentals and daily DSA practice.",
};

export const education: EducationItem[] = [
  {
    institution: "Guru Gobind Singh Indraprastha University (GGSIPU), Delhi",
    degree: "B.Tech in Computer Science — GPA 9.1/10",
    period: "Expected Aug 2028",
    detail:
      "Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, OOP, Software Design",
  },
];

/** Achievements & leadership — straight from the resume. */
export const achievements: string[] = [
  "Delivered 1 Google Play networking app and contributed to 1 AI speech-to-text product serving 100K+ users across Android, backend and AI workflows.",
  "Resolved 70+ Android/backend and transcription issues using crash analytics, structured logs, backend traces and user reports; cut recurring incident resolution from hours to under 30 minutes.",
  "Led a 4-member project team during the Web3Task internship — task breakdown, implementation ownership, debugging and release handoff for a production project.",
  "Directed 6 developers at Smart India Hackathon 2025, coordinating parallel frontend/backend/AI execution to deliver a live AI-system demo within 36 hours.",
];

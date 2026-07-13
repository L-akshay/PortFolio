import type { EducationItem, Profile } from "./types";

export const profile: Profile = {
  name: "Lakshay",
  shortName: "lakshay",
  role: "Full-Stack, Android & Applied AI Engineer",
  tagline:
    "I build and ship real products across web, Android and backend systems — from early prototypes to production applications used by real users.",
  location: "Delhi, India",
  availability: "Open to internships and engineering opportunities · remote friendly",
  openToWork: true,
  email: "lakshaydawar2006@gmail.com",
  intro:
    "I'm a computer science undergraduate who has spent the last year shipping production software instead of toy demos. At Web3Task I worked on VoiceToNotes, an app serving 100,000+ users, and Traverse VPN, a WireGuard-based Android client — building Android widgets, Firestore sync, streaming audio pipelines and VPN lifecycle handling. Alongside that, I deliver freelance web projects end-to-end and led a six-person team to build FloatChat for Smart India Hackathon. I care about the whole path from requirement to release: backend, Android, frontend and the deployment glue in between.",
  highlights: [
    {
      label: "Products shipped",
      value: "6+",
      detail: "company, freelance and personal projects in production or live demos",
    },
    {
      label: "Users reached",
      value: "100k+",
      detail: "on VoiceToNotes, the largest product I've contributed to",
    },
    {
      label: "Engineering areas",
      value: "4",
      detail: "web frontend, backend, Android and applied AI",
    },
  ],
  currentFocus:
    "Currently focused on applied AI systems — retrieval, structured prompting and AI-assisted product workflows — while continuing full-stack and Android work.",
};

export const education: EducationItem[] = [
  {
    institution: "B.Tech, Computer Science",
    degree: "Undergraduate — pursuing",
    period: "2024 — present",
    detail: "Delhi, India",
  },
];

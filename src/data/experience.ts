import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    company: "Web3Task",
    role: "Full-Stack Developer Intern",
    period: "Jan 2026 - Present",
    location: "Delhi, India",
    description:
      "AI productivity and consumer mobile startup. I work across Voice-to-Notes, Traverse VPN and the production reliability work around them.",
    contributions: [
      {
        area: "Voice-to-Notes",
        text: "Developed REST APIs and backend workflows for a 100K+ user AI speech-to-text app: session management, transcription state tracking, async pipelines and concurrent audio processing.",
        top: true,
      },
      {
        area: "Android",
        text: "Delivered 5 Android recording widgets and quick-access flows, driving a verified 15-25% lift in feature adoption.",
        top: true,
      },
      {
        area: "Traverse VPN",
        text: "Architected and launched a WireGuard-based Android client using Kotlin/Java, Android VpnService, peer configuration and tunnel lifecycle management; reached 100+ users in 48 hours.",
        top: true,
      },
      {
        area: "Reliability",
        text: "Triaged Android/backend production issues with Crashlytics, analytics, structured logs and user reports, reducing recurring incident resolution from hours to under 30 minutes.",
        top: true,
      },
      {
        area: "Release",
        text: "Supported feature launches across sprints, including debugging, release handoff, Play Store-oriented mobile work and CI/CD collaboration.",
      },
    ],
    technologies: [
      "Kotlin",
      "Java",
      "Android VpnService",
      "WireGuard",
      "Node.js",
      "Firebase",
      "Firestore",
      "REST APIs",
      "Crashlytics",
      "CI/CD",
    ],
    relatedProjectSlugs: ["traverse-vpn", "voice-to-notes"],
  },
];

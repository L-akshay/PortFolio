import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    company: "Web3Task",
    role: "Full-Stack Developer Intern",
    period: "Jan 2026 — Present",
    location: "Delhi, India",
    description:
      "AI productivity & consumer mobile startup. I work across two shipped products — Traverse VPN (which I architected and launched) and Voice-to-Notes (100K+ users) — plus the reliability engineering around them.",
    contributions: [
      {
        area: "Traverse VPN",
        text: "Architected and launched a WireGuard-based Android client — Kotlin/Java, Android VpnService, peer configuration, key generation and tunnel lifecycle management; reached 100+ Play Store users in 48 hours",
        top: true,
      },
      {
        area: "Voice-to-Notes",
        text: "Developed REST APIs and backend workflows for a 100K+ user AI speech-to-text app — session management, transcription state tracking, async pipelines and concurrent audio processing",
        top: true,
      },
      {
        area: "Reliability",
        text: "Triaged 40+ Android/backend production issues via crash analytics, structured logs and user reports; cut recurring incident resolution from hours to under 30 minutes",
        top: true,
      },
      {
        area: "Traverse VPN",
        text: "Optimized VPN reliability across 4G/5G/Wi-Fi switches with network-aware reconnection, DNS fallback, authentication recovery and exponential backoff — targeting <1.5s tunnel setup and <3s recovery",
      },
      {
        area: "Voice-to-Notes",
        text: "Delivered 5 Android recording widgets and quick-access flows, driving a 15–25% lift in feature adoption",
      },
      {
        area: "Ownership",
        text: "Supported 6+ feature launches across 2 sprints, collaborating with product, design and marketing",
      },
      {
        area: "Leadership",
        text: "Led a 4-member project team — task breakdown, implementation ownership, debugging and release handoff for a production project",
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
      "Crash Analytics",
    ],
    relatedProjectSlugs: ["traverse-vpn", "voice-to-notes"],
  },
];

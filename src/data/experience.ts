import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    company: "Web3Task",
    role: "Full-Stack Developer Intern",
    period: "January 2026 — July 2026",
    location: "Noida, India",
    description:
      "Product studio building consumer apps. I worked across two shipped products — VoiceToNotes (100k+ users) and Traverse VPN — plus the web and deployment surface around them.",
    contributions: [
      {
        area: "VoiceToNotes",
        text: "Worked on an Android app serving more than 100,000 users",
        top: true,
      },
      {
        area: "VoiceToNotes",
        text: "Built Android home-screen widgets for recording and quick actions",
        top: true,
      },
      {
        area: "Traverse VPN",
        text: "Contributed split tunnelling on a WireGuard-based VPN client using Android VpnService",
        top: true,
      },
      {
        area: "VoiceToNotes",
        text: "Worked on Firestore synchronization and streaming / chunked audio handling",
      },
      {
        area: "VoiceToNotes",
        text: "Contributed to session management and rate limiting on the backend",
      },
      {
        area: "VoiceToNotes",
        text: "Integrated Firebase Analytics and Crashlytics",
      },
      {
        area: "Traverse VPN",
        text: "Worked on connection lifecycle handling for a product with early real users",
      },
      {
        area: "Web & deployment",
        text: "Built and improved product landing pages with Next.js, TinaCMS and Firebase Hosting",
      },
      {
        area: "Web & deployment",
        text: "Added GitHub Actions-based deployment workflows",
      },
      {
        area: "Ownership",
        text: "Delivered features end-to-end: requirement understanding through implementation and release",
      },
      {
        area: "Ownership",
        text: "Collaborated across product, development and marketing tasks",
      },
    ],
    technologies: [
      "Kotlin",
      "Android SDK",
      "WireGuard",
      "Firebase",
      "Firestore",
      "Next.js",
      "TypeScript",
      "TinaCMS",
      "GitHub Actions",
    ],
    relatedProjectSlugs: ["voicetonotes", "traverse-vpn"],
  },
];

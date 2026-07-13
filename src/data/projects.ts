import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "voicetonotes",
    title: "VoiceToNotes",
    valueProp: "Voice-to-notes Android app serving more than 100,000 users.",
    role: "Android & backend contributor (internship at Web3Task)",
    category: "Android & Backend Product",
    ownership: "company product",
    technologies: ["Kotlin", "Android SDK", "Firestore", "Firebase", "Crashlytics"],
    impact: "100,000+ users",
    featured: true,
    accent: "violet",
    details: {
      context:
        "VoiceToNotes is a Web3Task product that turns voice recordings into organized notes. I contributed to it during my internship — it is company-owned, not a personal project.",
      problem:
        "Users needed reliable capture on flaky networks: recording from the home screen, syncing across devices and handling long audio without failures.",
      responsibilities: [
        "Built Android home-screen widgets for one-tap recording and quick actions",
        "Worked on Firestore synchronization across devices",
        "Worked on streaming and chunked audio handling for long recordings",
        "Contributed to session management and rate limiting",
        "Integrated Firebase Analytics and Crashlytics",
      ],
      decisions: [
        "Chunked audio uploads so long recordings survive connection drops",
        "Widget actions kept independent of full app startup for speed",
      ],
      result:
        "Features shipped to a production app with more than 100,000 users, with crash and usage telemetry wired in.",
      lessons:
        "At real user scale, edge cases (backgrounding, process death, slow networks) stop being edge cases.",
    },
  },
  {
    slug: "traverse-vpn",
    title: "Traverse VPN",
    valueProp: "WireGuard-based Android VPN client with split tunnelling.",
    role: "Android contributor (internship at Web3Task)",
    category: "Android Networking",
    ownership: "company product",
    technologies: ["Kotlin", "WireGuard", "Android VpnService", "Android SDK"],
    impact: "Early production users",
    featured: true,
    accent: "cyan",
    details: {
      context:
        "Traverse VPN is a Web3Task Android VPN client built on WireGuard. I contributed during my internship — it is company-owned.",
      problem:
        "Users want specific apps to bypass the VPN, and expect the tunnel to survive network changes, reboots and Android's aggressive process management.",
      responsibilities: [
        "Contributed split tunnelling built on Android VpnService",
        "Worked on connection lifecycle handling (connect, reconnect, teardown)",
        "Worked within WireGuard integration on Android",
      ],
      decisions: [
        "Per-app tunnel exclusion driven through VpnService's allowed/disallowed app APIs",
        "Explicit state machine for connection lifecycle instead of ad-hoc flags",
      ],
      result: "Shipped to a product that acquired early real users.",
      lessons:
        "Network code on Android is a lifecycle problem as much as a networking problem.",
    },
  },
  {
    slug: "quranlearn",
    title: "QuranLearn",
    valueProp: "Full-stack education platform with student, teacher and admin roles.",
    role: "Solo full-stack engineer (freelance)",
    category: "Full-Stack Platform",
    ownership: "client project",
    technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Auth.js"],
    impact: "Complete tutoring workflow in one platform",
    featured: true,
    accent: "mint",
    details: {
      context:
        "A freelance engagement to move a tutoring service off spreadsheets and chat apps onto a proper platform.",
      problem:
        "Three user types (students, teachers, admins) need different views over the same courses, sessions, attendance, homework and notes — plus meeting links that just work.",
      responsibilities: [
        "Designed the data model in Prisma over Supabase Postgres",
        "Implemented role-based access with Auth.js",
        "Built course and session management, attendance, homework and notes flows",
        "Integrated meeting links into the session workflow",
      ],
      decisions: [
        "Single role-aware app instead of three separate dashboards — less code, consistent UX",
        "Server components for data-heavy views; client components only for interactive forms",
      ],
      result:
        "A working platform covering the full tutoring workflow, currently in development toward launch.",
      lessons:
        "Role-based products live or die by getting the permission model right in the schema, not in the UI.",
    },
  },
  {
    slug: "floatchat",
    title: "FloatChat",
    valueProp: "Ocean-data chat platform built by a six-person team for Smart India Hackathon.",
    role: "Team lead (6 people)",
    category: "Hackathon",
    ownership: "team project",
    technologies: ["Flask", "React", "Python", "REST APIs"],
    impact: "Led a 6-person team to a working demo",
    featured: true,
    accent: "amber",
    details: {
      context:
        "Built for Smart India Hackathon (SIH) by a team of six that I led — a team effort, not a solo build.",
      problem:
        "Making ARGO ocean float data explorable through a conversational interface within hackathon time constraints.",
      responsibilities: [
        "Led the six-person team: scoping, task split, integration",
        "Worked across the Flask backend and React frontend",
        "Owned the demo narrative and final integration",
      ],
      decisions: [
        "Flask + React over a heavier stack — fastest path to a working demo",
        "Cut features early to protect the end-to-end flow",
      ],
      result: "A working product demo delivered on deadline with a full team pipeline.",
      lessons:
        "Leading means deciding what not to build. Integration time always costs more than planned.",
    },
  },
  {
    slug: "moneyos",
    title: "MoneyOS",
    valueProp: "Personal finance tracking app for budgets and spending clarity.",
    role: "Solo builder",
    category: "Web App",
    ownership: "personal project",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    accent: "mint",
    details: {
      context: "A personal project exploring money management UX.",
      problem: "Tracking spending across accounts without a heavyweight finance suite.",
      responsibilities: ["Full design and implementation"],
      decisions: ["Local-first data handling to keep the scope honest"],
      result: "Working personal tool and design playground.",
    },
  },
  {
    slug: "ai-social-platform",
    title: "AI Social Media Platform",
    valueProp: "Experimental social platform with AI-assisted content workflows.",
    role: "Solo builder",
    category: "Web App",
    ownership: "personal project",
    technologies: ["Next.js", "TypeScript", "LLM APIs"],
    featured: false,
    accent: "violet",
    details: {
      context: "A personal experiment combining social feed mechanics with LLM features.",
      problem: "Exploring how AI assistance fits into content creation without taking it over.",
      responsibilities: ["Product concept, frontend, LLM integration"],
      decisions: ["Kept AI features as assistive suggestions rather than auto-posting"],
      result: "Functional prototype used to learn applied-AI product patterns.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

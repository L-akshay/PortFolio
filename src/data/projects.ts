import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "traverse-vpn",
    title: "Traverse VPN",
    valueProp:
      "Production WireGuard Android VPN client — concept to 100+ Play Store users in 48 hours.",
    role: "Architect & lead developer (Web3Task)",
    category: "Android Networking",
    ownership: "company product",
    technologies: ["Kotlin", "Java", "Android VpnService", "WireGuard"],
    impact: "100+ users in 48 hours",
    featured: true,
    accent: "cyan",
    // TODO: paste the real Play Store URL from the resume
    // liveUrl: "https://play.google.com/store/apps/details?id=...",
    details: {
      context:
        "A Web3Task product I architected and launched end-to-end: a production Android VPN client built on WireGuard concepts with Android VpnService.",
      problem:
        "Mobile VPNs live or die on flaky networks — the tunnel must survive 4G/5G/Wi-Fi handoffs, reconnect fast, and never leave the user silently disconnected.",
      responsibilities: [
        "Engineered the client with WireGuard concepts: peer configuration, key generation and tunnel lifecycle management",
        "Structured modular components across UI, tunnel manager, protocol/configuration handling and connection lifecycle logic",
        "Hardened mobile-network reliability with auth recovery, DNS fallback, retry backoff and reconnect logic for unstable 4G/5G/Wi-Fi",
        "Targeted <1.5s tunnel setup and <3s recovery in testing",
      ],
      decisions: [
        "Explicit connection-lifecycle state machine instead of ad-hoc flags — reconnection logic stays testable",
        "Modular boundaries between UI, tunnel manager and protocol handling enabled 3 feature iterations in 2 weeks with zero reported regression bugs",
      ],
      result:
        "Launched on Google Play and scaled from concept to 100+ users within 48 hours.",
      lessons:
        "Network code on Android is a lifecycle problem as much as a networking problem — design for process death and network churn first.",
    },
  },
  {
    slug: "voice-to-notes",
    title: "Voice-to-Notes",
    valueProp:
      "AI speech-to-text product serving 100K+ users — I build its backend workflows and Android surfaces.",
    role: "Backend & Android contributor (Web3Task)",
    category: "Android & Backend Product",
    ownership: "company product",
    technologies: ["Node.js", "Firebase", "Cloud Firestore", "Android"],
    impact: "100K+ users",
    featured: true,
    accent: "violet",
    liveUrl: "https://voicetonotes.ai",
    details: {
      context:
        "Voice-to-Notes is a Web3Task AI product that turns speech into organized notes. I contribute to its backend and Android surfaces — it is company-owned.",
      problem:
        "At 100K+ users, audio sessions, transcription state and notes must stay consistent across devices while long recordings process concurrently.",
      responsibilities: [
        "Orchestrated backend workflows for audio session management, transcription state tracking and concurrent processing",
        "Synchronized notes, sessions and transcription state across devices with Firebase Realtime Database and Cloud Firestore — maintaining a <200ms sync-latency target in common flows",
        "Investigated 30+ user-reported transcription issues through crash logs and backend traces, improving successful transcription flow reliability by ~8%",
        "Built 5 Android recording widgets and quick-access flows (15–25% feature-adoption lift)",
      ],
      decisions: [
        "Async pipelines with explicit transcription state tracking so long audio survives retries and restarts",
        "Firestore as the cross-device source of truth, with Realtime Database for low-latency sync paths",
      ],
      result:
        "Shipped features running in production for more than 100,000 users, with measurable reliability gains.",
      lessons:
        "At real user scale, edge cases — backgrounding, process death, slow networks — stop being edge cases.",
    },
  },
  {
    slug: "floatchat",
    title: "FloatChat",
    valueProp:
      "Full-stack AI system built and demoed live in 36 hours at Smart India Hackathon 2025.",
    role: "Team lead (6 developers)",
    category: "Hackathon",
    ownership: "team project",
    technologies: ["Python", "ML Inference", "REST APIs", "React"],
    impact: "Live demo to national judges",
    featured: true,
    accent: "amber",
    githubUrl: "https://github.com/L-akshay/SIH-FloatChat",
    // TODO: paste the demo URL from the resume
    // liveUrl: "https://...",
    details: {
      context:
        "Built for Smart India Hackathon 2025 by a 6-member team that I directed — a team effort under a 36-hour national deadline.",
      problem:
        "Deliver a working end-to-end AI system — ingestion, ML inference, API gateway and frontend — fast enough that six people could build in parallel without blocking each other.",
      responsibilities: [
        "Directed the 6-member team: scoping, task split, integration and demo",
        "Mapped end-to-end architecture across ingestion, ML inference, REST gateway and React frontend so all six developers could work in parallel across service boundaries",
        "Presented the functional live prototype to judges, walking through architecture decisions, execution tradeoffs and product flow",
      ],
      decisions: [
        "Service boundaries drawn first — parallel work beat sequential perfection under a 36-hour clock",
        "Cut features early to protect the end-to-end flow for the live demo",
      ],
      result:
        "A functional live prototype demoed to national judges, delivered on deadline.",
      lessons:
        "Leading means deciding what not to build. Integration time always costs more than planned.",
    },
  },
  {
    slug: "lead-generator",
    title: "Lead Generator",
    valueProp:
      "AI company-intelligence pipeline that turns 4+ data sources into structured, validated reports.",
    role: "Solo builder",
    category: "Web App",
    ownership: "personal project",
    technologies: ["Gemini", "Tavily", "Node.js", "Zod"],
    impact: "Resilient multi-source AI pipeline",
    featured: true,
    accent: "mint",
    githubUrl: "https://github.com/L-akshay/lead-generator",
    details: {
      context:
        "A personal applied-AI project: a company-intelligence pipeline that extracts website, funding, competitor, branding, marketing-copy and tech-stack signals.",
      problem:
        "External data providers stall and fail — a useful intelligence report has to degrade gracefully instead of collapsing when one source does.",
      responsibilities: [
        "Built the pipeline extracting signals from 4+ external data sources",
        "Orchestrated parallel enrichment with per-call timeouts, exponential backoff and graceful degradation so reports still generate when providers stall or fail",
        "Validated LLM outputs with Zod schemas to produce structured JSON reports and reduce malformed-response failures",
      ],
      decisions: [
        "Parallel fan-out with independent failure domains per provider — one dead source never kills the report",
        "Schema-validated LLM output (Zod) instead of trusting free-form JSON from the model",
      ],
      result:
        "Structured, machine-consumable company reports that survive provider outages — built for downstream product use.",
      lessons:
        "LLM pipelines are distributed systems: timeouts, retries and validation matter more than the prompt.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

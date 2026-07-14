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
      "Email lakshaytechai@gmail.com, or use the contact form in the Contact section. GitHub: github.com/L-akshay · LinkedIn: linkedin.com/in/lakshay-dawar-32153a32b.",
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
      "Yes — Lakshay is open to software engineering internships, including remote roles. He is based in Delhi, India, and currently interning at Web3Task.",
  },
  {
    triggers: ["experience", "work history", "web3task", "intern"],
    question: "What experience does Lakshay have?",
    answer:
      "Lakshay is a Full-Stack Developer Intern at Web3Task (Delhi, Jan 2026–Present), an AI productivity & consumer mobile startup. He architected and launched Traverse VPN — a WireGuard Android client that hit 100+ Play Store users in 48 hours — and builds REST APIs and async backend workflows for Voice-to-Notes, an AI speech-to-text app with 100K+ users. Details are in the Experience section.",
  },
  {
    triggers: ["voice", "notes", "speech", "transcription", "widget"],
    question: "What did Lakshay contribute to Voice-to-Notes?",
    answer:
      "On Voice-to-Notes (a Web3Task product with 100K+ users) he built REST APIs and backend workflows for session management, transcription state tracking and concurrent audio processing, kept cross-device sync under a 200ms target with Firebase/Firestore, investigated 30+ transcription issues (~8% reliability gain), and shipped 5 Android recording widgets that lifted feature adoption 15–25%.",
  },
  {
    triggers: ["android", "kotlin", "vpn", "wireguard", "traverse", "networking"],
    question: "Does Lakshay have Android experience?",
    answer:
      "Yes — deep production Android work. He architected and launched Traverse VPN, a WireGuard-based Android client (Kotlin/Java, Android VpnService, tunnel lifecycle, network-aware reconnection) that reached 100+ Play Store users in 48 hours, and built Android recording widgets for Voice-to-Notes.",
  },
  {
    triggers: ["backend", "api", "server", "database", "concurren"],
    question: "Which projects show backend experience?",
    answer:
      "Voice-to-Notes: REST APIs, session management, transcription state tracking, async pipelines and concurrent audio processing at 100K+ user scale. Lead Generator: a parallel AI enrichment pipeline with per-call timeouts, exponential backoff, graceful degradation and Zod-validated structured outputs. See Experience and Projects.",
  },
  {
    triggers: ["ai", "llm", "rag", "machine learning", "gemini", "pipeline"],
    question: "What AI systems work has Lakshay done?",
    answer:
      "He works on AI-integrated backends: speech-to-text workflows for Voice-to-Notes (100K+ users), and Lead Generator — an AI company-intelligence pipeline using Gemini and Tavily with Zod-validated structured JSON outputs. His toolkit covers LLM APIs, RAG, structured outputs, tool-calling workflows and AI data pipelines.",
  },
  {
    triggers: ["lead", "led", "team", "leadership", "floatchat", "hackathon", "sih"],
    question: "Has Lakshay led a team?",
    answer:
      "Yes, twice: he directed 6 developers at Smart India Hackathon 2025 to build and demo FloatChat, a full-stack AI system, within 36 hours; and he led a 4-member project team at Web3Task through task breakdown, implementation, debugging and release handoff.",
  },
  {
    triggers: ["skill", "technolog", "stack", "tools", "languages"],
    question: "What technologies does Lakshay use?",
    answer:
      "Languages: Java, Kotlin, Python, C++, TypeScript, JavaScript, SQL. Backend: Node.js, Express, REST APIs, WebSockets, Redis, concurrency. AI: LLM APIs, RAG, structured outputs, tool-calling. Databases: PostgreSQL, MongoDB, Firebase, Firestore. Mobile & cloud: Android, VpnService, Docker, CI/CD, Google Cloud Run, Vercel.",
  },
  {
    triggers: ["impactful", "best project", "top project", "proud"],
    question: "Show me the most impactful project.",
    answer:
      "Two stand out: Traverse VPN — a WireGuard Android client he architected that reached 100+ Play Store users in 48 hours — and Voice-to-Notes, the 100K+ user AI speech-to-text app whose backend workflows he builds. Both are in the Projects section.",
  },
  {
    triggers: ["education", "degree", "college", "university", "study", "gpa", "cgpa"],
    question: "What is Lakshay's education?",
    answer:
      "B.Tech in Computer Science at Guru Gobind Singh Indraprastha University (GGSIPU), Delhi — GPA 9.1/10, expected to graduate Aug 2028. Coursework includes DSA, Operating Systems, DBMS, Computer Networks, OOP and Software Design.",
  },
  {
    triggers: ["resume", "cv"],
    question: "Where can I find the resume?",
    answer:
      "The Resume page (/resume) has a full printable resume built from this portfolio.",
  },
  {
    triggers: ["github", "repos", "code", "dsa", "codolio", "leetcode"],
    question: "Where is Lakshay's code?",
    answer:
      "GitHub: github.com/L-akshay — recent contributions are shown in the GitHub section. He also practices DSA daily (arrays, strings, trees, graphs, DP, greedy, recursion) tracked on Codolio.",
  },
  {
    triggers: ["freelance", "client", "commission"],
    question: "Does Lakshay do freelance work?",
    answer:
      "Yes — freelance and client projects include an education platform, an e-commerce storefront and business landing pages. Some client work is confidential; see the Freelance & Client Work section.",
  },
  {
    triggers: ["reliab", "debug", "incident", "crash", "issues"],
    question: "What about debugging and reliability?",
    answer:
      "It's a signature strength: 70+ Android/backend and transcription issues resolved using crash analytics, structured logs, backend traces and user reports — with recurring incident resolution cut from hours to under 30 minutes.",
  },
];

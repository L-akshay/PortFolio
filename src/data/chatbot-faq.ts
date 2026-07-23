import type { FAQItem } from "./types";

export const faq: FAQItem[] = [
  {
    triggers: ["contact", "email", "reach", "hire", "get in touch"],
    question: "How can I contact Lakshay?",
    answer:
      "Email lakshaytechai@gmail.com, use the Contact section at /#contact, or reach him through GitHub and LinkedIn links on the site.",
  },
  {
    triggers: ["available", "availability", "internship", "opportunit", "open to", "remote"],
    question: "Is Lakshay available for internships?",
    answer:
      "Yes. Lakshay is open to software engineering internships, including remote-friendly roles. He is based in Delhi, India.",
  },
  {
    triggers: ["experience", "work history", "web3task", "intern"],
    question: "What experience does Lakshay have?",
    answer:
      "Lakshay is a Full-Stack Developer Intern at Web3Task (Delhi, Jan 2026-Present). He works on Voice-to-Notes backend/Android workflows, Traverse VPN Android networking, and production reliability. See /#experience plus /projects/voice-to-notes and /projects/traverse-vpn.",
  },
  {
    triggers: ["voice", "notes", "speech", "transcription", "widget"],
    question: "What did Lakshay contribute to Voice-to-Notes?",
    answer:
      "On Voice-to-Notes, a Web3Task speech-to-text product serving 100K+ users, Lakshay built REST APIs and backend workflows for sessions, transcription state tracking and concurrent audio processing. He also shipped 5 Android recording widgets with a verified 15-25% feature-adoption lift. Case study: /projects/voice-to-notes.",
  },
  {
    triggers: ["android", "kotlin", "vpn", "wireguard", "traverse", "networking"],
    question: "Does Lakshay have Android experience?",
    answer:
      "Yes. Traverse VPN shows Android networking work with Kotlin/Java, Android VpnService, WireGuard concepts and tunnel lifecycle management; it reached 100+ users in 48 hours. He also built Android recording widgets for Voice-to-Notes. Case study: /projects/traverse-vpn.",
  },
  {
    triggers: ["backend", "api", "server", "database", "concurren"],
    question: "What backend experience does Lakshay have?",
    answer:
      "Voice-to-Notes shows production backend work: REST APIs, session management, transcription state tracking, async pipelines and concurrent audio processing at 100K+ user scale. Lead Generator shows an applied-AI backend pipeline with parallel enrichment, timeouts, backoff and Zod-validated structured outputs.",
  },
  {
    triggers: ["ai", "llm", "rag", "machine learning", "gemini", "pipeline"],
    question: "Which projects use AI?",
    answer:
      "Voice-to-Notes uses AI speech-to-text workflows, Lead Generator uses LLM APIs and structured outputs, and FloatChat was a full-stack AI system demoed at Smart India Hackathon 2025. Start at /#projects.",
  },
  {
    triggers: ["lead", "led", "team", "leadership", "floatchat", "hackathon", "sih"],
    question: "Has Lakshay led a team?",
    answer:
      "Yes. He directed 6 developers at Smart India Hackathon 2025 to deliver FloatChat as a live AI-system demo within 36 hours, and led a 4-member project team during the Web3Task internship. FloatChat case study: /projects/floatchat.",
  },
  {
    triggers: ["skill", "technolog", "stack", "tools", "languages"],
    question: "What technologies does Lakshay use?",
    answer:
      "Core skills include Kotlin, Java, TypeScript, JavaScript, Python, SQL, Node.js, Express.js, REST APIs, Firebase, Firestore, Android SDK, VpnService, WireGuard, LLM APIs, RAG, Docker, GitHub Actions and CI/CD. See /#skills.",
  },
  {
    triggers: ["education", "degree", "college", "university", "study", "gpa", "cgpa"],
    question: "What is Lakshay's education?",
    answer:
      "Lakshay is pursuing a B.Tech in Computer Science at Bhagwan Parshuram Institute of Technology, GGSIPU, with GPA 9.1/10 and expected graduation in Aug 2028.",
  },
  {
    triggers: ["resume", "cv"],
    question: "Where can I find the resume?",
    answer:
      "Download the PDF resume at /Lakshay_Dawar_Software_Engineer_Resume.pdf, or view the web resume at /resume.",
  },
  {
    triggers: ["github", "repos", "code", "dsa", "codolio", "leetcode"],
    question: "Where is Lakshay's code?",
    answer:
      "GitHub is linked from the hero and contact sections: github.com/L-akshay. Recent engineering activity is also shown in the GitHub section.",
  },
  {
    triggers: ["freelance", "client", "commission"],
    question: "Does Lakshay do freelance work?",
    answer:
      "Yes. Client work includes delivered e-commerce and business landing-page projects, plus QuranLearn as an in-development education platform. Confidential work is described without client names. See /#work.",
  },
  {
    triggers: ["interview", "why should", "hire"],
    question: "Why should we interview Lakshay?",
    answer:
      "Lakshay has verified production ownership across backend, Android and applied-AI workflows: Voice-to-Notes at 100K+ users, Traverse VPN to 100+ users in 48 hours, Android widget adoption gains, and team leadership under hackathon and internship constraints. Good next reads: /projects/voice-to-notes and /projects/traverse-vpn.",
  },
];

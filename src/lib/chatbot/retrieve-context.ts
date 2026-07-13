import type { PortfolioKnowledge } from "@/data/types";

/**
 * Lightweight keyword retrieval over the approved portfolio knowledge.
 * The knowledge base is small, so scored keyword matching beats the cost and
 * complexity of embeddings — revisit only if the data grows substantially.
 */

type Scored<T> = { item: T; score: number };

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
}

/** Count how many of the item's keywords appear in the normalized query. */
function scoreKeywords(query: string, keywords: string[]): number {
  return keywords.reduce(
    (score, kw) => (query.includes(kw.toLowerCase()) ? score + 1 : score),
    0,
  );
}

function topMatches<T>(scored: Scored<T>[], limit: number): T[] {
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.item);
}

export function retrievePortfolioContext(
  query: string,
  data: PortfolioKnowledge,
): string {
  const q = normalize(query);

  const projects = topMatches(
    data.projects.map((p) => ({
      item: p,
      score:
        scoreKeywords(q, [p.title, p.slug, p.category, ...p.technologies]) +
        scoreKeywords(q, ["project", "built", "build", "app"]) * 0.5,
    })),
    3,
  );

  const experience = topMatches(
    data.experience.map((e) => ({
      item: e,
      score: scoreKeywords(q, [
        e.company,
        "experience",
        "intern",
        "work",
        "job",
        ...e.technologies,
      ]),
    })),
    2,
  );

  const freelance = topMatches(
    data.freelanceWork.map((f) => ({
      item: f,
      score: scoreKeywords(q, [
        f.name,
        f.industry,
        "freelance",
        "client",
        ...f.stack,
      ]),
    })),
    2,
  );

  const skills = topMatches(
    data.skills.map((s) => ({
      item: s,
      score: scoreKeywords(q, [s.title, "skill", "technolog", "stack", ...s.skills]),
    })),
    3,
  );

  // Core profile facts are always relevant; sections join only when matched.
  const parts: string[] = [
    `## Profile
Name: ${data.profile.name}
Role: ${data.profile.role}
Location: ${data.profile.location}
Availability: ${data.profile.availability}
Intro: ${data.profile.intro}
Current focus: ${data.profile.currentFocus}`,
    `## Education
${data.education.map((e) => `- ${e.institution}, ${e.degree} (${e.period})`).join("\n")}`,
    `## Contact
Email: ${data.contact.email}
Links: ${data.contact.socials.map((s) => `${s.label}: ${s.href}`).join(", ")}
Site sections: /#about /#experience /#work /#projects /#contact /resume /projects`,
  ];

  if (experience.length > 0 || /experience|work|intern|job/.test(q)) {
    const items = experience.length > 0 ? experience : data.experience;
    parts.push(
      `## Experience\n${items
        .map(
          (e) =>
            `### ${e.role} at ${e.company} (${e.period}, ${e.location})\n${e.description}\nContributions:\n${e.contributions.map((c) => `- [${c.area}] ${c.text}`).join("\n")}\nTechnologies: ${e.technologies.join(", ")}`,
        )
        .join("\n")}`,
    );
  }

  if (projects.length > 0) {
    parts.push(
      `## Relevant projects\n${projects
        .map(
          (p) =>
            `### ${p.title} (${p.category}) — ${p.ownership}\n${p.valueProp}\nRole: ${p.role}${p.impact ? `\nImpact: ${p.impact}` : ""}\nContext: ${p.details.context}\nResponsibilities: ${p.details.responsibilities.join("; ")}\nResult: ${p.details.result}\nTechnologies: ${p.technologies.join(", ")}`,
        )
        .join("\n")}`,
    );
  }

  if (freelance.length > 0) {
    parts.push(
      `## Freelance & client work\n${freelance
        .map(
          (f) =>
            `### ${f.name} (${f.industry}, status: ${f.status}${f.confidential ? ", confidential client" : ""})\nProblem: ${f.problem}\nDelivered: ${f.delivered}\nStack: ${f.stack.join(", ")}`,
        )
        .join("\n")}`,
    );
  }

  if (skills.length > 0) {
    parts.push(
      `## Skills\n${skills
        .map((s) => `- ${s.title}: ${s.skills.join(", ")}`)
        .join("\n")}`,
    );
  }

  return parts.join("\n\n");
}

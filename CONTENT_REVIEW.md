# Content Review

Every metric, achievement and employment claim used on the site, with its
verification status. **Do not publish items marked NEEDS_CONFIRMATION** —
verify them and flip the status, or remove them from `src/data/`.

Statuses:
- **VERIFIED** — stated in the project brief provided by the portfolio owner.
- **NEEDS_CONFIRMATION** — placeholder or derived value the owner must confirm.

## Employment & roles

| Claim | Where | Status |
|---|---|---|
| Full-Stack Developer Intern at Web3Task, Jan–Jul 2026, Noida | experience.ts | VERIFIED (per brief) |
| Led a six-person team building FloatChat for SIH | projects.ts | VERIFIED (per brief) |
| "Intern of the Month" | — | NOT USED (brief: include only if explicitly verified — it was not, so it is omitted) |

## Metrics

| Claim | Where | Status |
|---|---|---|
| VoiceToNotes serves 100,000+ users | experience.ts, projects.ts, profile.ts | VERIFIED (per brief) |
| Traverse VPN acquired early real users | experience.ts, projects.ts | VERIFIED (per brief) |
| "6+ products shipped" highlight | profile.ts | NEEDS_CONFIRMATION — derived count (2 company products, 3 freelance, FloatChat + personal projects); adjust if wrong |
| "4 engineering areas" highlight | profile.ts | VERIFIED (web, backend, Android, applied AI — descriptive, not a metric) |

## Education & personal facts

| Claim | Where | Status |
|---|---|---|
| B.Tech Computer Science, started 2024, Delhi | profile.ts | NEEDS_CONFIRMATION — institution name and start year are placeholders |
| Based in Delhi, India | profile.ts | VERIFIED (per brief) |
| Open to internships / remote opportunities | profile.ts | VERIFIED (per brief) |
| Contact email lakshaydawar2006@gmail.com | profile.ts | NEEDS_CONFIRMATION — taken from git config; confirm this is the preferred professional address |

## Links

| Link | Where | Status |
|---|---|---|
| github.com/L-akshay | socials.ts | VERIFIED (target repo owner) |
| LinkedIn URL | socials.ts | NEEDS_CONFIRMATION — currently a placeholder (`linkedin.com`); replace with the real profile URL |
| Project live/GitHub links | projects.ts | NOT USED — no links were provided, so none were invented; add `githubUrl`/`liveUrl` per project when available |
| Freelance client names/links | freelance.ts | NOT USED for confidential clients — described generically per brief |

## Ownership framing (verified against brief requirements)

- VoiceToNotes and Traverse VPN are labelled **company product** everywhere,
  with contribution-only language ("worked on", "contributed").
- FloatChat is labelled **team project** with the six-person team stated.
- QuranLearn is labelled **client project**.
- No certifications or awards are claimed anywhere on the site.

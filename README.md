# Lakshay — Developer Portfolio

Personal portfolio for a full-stack, Android and applied-AI engineer. Built with
Next.js App Router, TypeScript (strict), Tailwind CSS v4, Radix primitives,
Framer Motion and Lenis. Includes an "Ask about me" chatbot grounded in an
approved knowledge file with a deterministic non-AI fallback.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in what you need (everything is optional locally)
npm run dev                  # http://localhost:3000
```

Verification commands:

```bash
npx tsc --noEmit     # typecheck
npx eslint src       # lint
npm run build        # production build
npm run format       # prettier
```

## Editing content

**All content lives in `src/data/` — components never hardcode text.**

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, role, tagline, intro, highlights, education, availability |
| `src/data/experience.ts` | Work experience, contributions (mark top 3 with `top: true`) |
| `src/data/freelance.ts` | Freelance & client work (supports `confidential: true`) |
| `src/data/projects.ts` | Projects (`featured: true` shows on homepage, all on /projects) |
| `src/data/skills.ts` | Skill groups |
| `src/data/socials.ts` | Social links and contact info — **update the LinkedIn URL** |
| `src/data/chatbot-faq.ts` | Deterministic chatbot answers + trigger keywords |

The chatbot answers only from this data (`src/data/index.ts` aggregates it into
one `PortfolioKnowledge` object). Before publishing, review
[CONTENT_REVIEW.md](./CONTENT_REVIEW.md) — items marked `NEEDS_CONFIRMATION`
must be verified or removed.

## Environment variables

See [.env.example](./.env.example). Everything degrades gracefully:

- **No `AI_API_KEY`** → chatbot runs in deterministic fallback mode (still answers common questions).
- **No `EMAIL_PROVIDER_API_KEY`** → contact form falls back to opening the visitor's mail app.
- `AI_PROVIDER` supports `anthropic` (default, `claude-opus-4-8`) or `openai`; override the model with `AI_MODEL`. Provider logic is isolated in `src/lib/chatbot/provider.ts`.

## Architecture notes

- **Server Components by default** — client components only where interaction requires it (navbar scroll-spy, theme toggle, dialogs, forms, chatbot).
- **Chatbot retrieval** — `src/lib/chatbot/retrieve-context.ts` does scored keyword matching over the knowledge object and sends only relevant context to the model. No vector DB; the knowledge base is small. Add embeddings only if it grows substantially.
- **Rate limiting** — in-memory sliding window (`src/lib/rate-limit.ts`), fine for a single-instance portfolio; swap for Upstash/Redis if you need strictness across instances.
- **No database** — nothing is stored server-side.
- **GSAP intentionally omitted** — framer-motion covers every shipped interaction; see `docs/REFERENCE_AUDIT.md`.
- **Resume** — `/Lakshay_Dawar_Software_Engineer_Resume.pdf` serves the downloadable resume PDF from `public`, while `/resume` remains the printable web resume.

## Deploying to Vercel

1. Push this repo to GitHub (already at `L-akshay/PortFolio`).
2. In [vercel.com/new](https://vercel.com/new), import the repository — the Next.js preset needs no configuration.
3. Set environment variables in the Vercel project settings (at minimum `NEXT_PUBLIC_SITE_URL=https://your-domain`; add `AI_API_KEY`, `CONTACT_EMAIL`, `EMAIL_PROVIDER_API_KEY` to enable the chatbot AI mode and contact form delivery).
4. Deploy. `sitemap.xml`, `robots.txt` and the OG image are generated automatically from `NEXT_PUBLIC_SITE_URL`.

Never commit real secrets — `.env*` files are gitignored.

# Reference Repository Audit — Starz099/portfolio

Audit of https://github.com/Starz099/portfolio performed before building this site.
The goal was to learn from its **structure**, not to copy its content, branding or visuals.

## Useful layout patterns (adopted, rebuilt from scratch)

- **Compact centered container** — a single `Container` component constrains every
  page to a narrow editorial column. We adopt the idea with our own `PageContainer`
  (~820px content width) and spacing scale.
- **Section-based homepage** — `page.tsx` is a flat list of section components, each
  wrapped in an `AnimatedSection` reveal. Very easy to reorder/maintain. Adopted.
- **Data-driven components** — projects/links live in `constants.ts` files next to
  the components. We go further: all content lives in `src/data/*` typed modules so
  no JSX edit is needed to update content.
- **Sticky blurred navbar** — `sticky top-0 backdrop-blur` with a mobile dropdown
  menu built on Radix. Adopted with our own design + IntersectionObserver section
  highlighting (the reference navigates to separate routes instead).
- **Project dialogs** — Radix `Dialog` for project details instead of `[slug]`
  pages. Adopted (accessible, keeps navigation light).

## Animation patterns

- Reference uses framer-motion + GSAP + Lenis. Lenis smooth scroll is subtle and
  worth keeping. GSAP is used for text splitting effects we deliberately avoid
  (per-word animation is on our "avoid" list), so **GSAP is not included** here —
  framer-motion covers every interaction we ship. Fewer bytes, same result.
- `AnimatedSection` (fade + slight rise, once, viewport-triggered) is a good
  pattern; rebuilt with reduced-motion support baked in.

## Performance concerns observed in the reference

- Ships a 3D GLB bot (`three`, `@react-three/fiber`, `drei`) on the main bundle
  path — heavy. Our chatbot is plain DOM, lazy-mounted, no 3D.
- `mongoose`, `axios`, `archiver`, `react-snowfall`, `next-video` — server/database
  weight a portfolio doesn't need. We use zero database and native `fetch`.
- Several PNG logos where SVG would do. We use SVG thumbnails.

## Elements that must NOT be copied (and were not)

- Personal identity: name "Mayank", starzz.dev domain, profile/banner images,
  the BoomBot mascot, og.png, blog content, project names/screenshots.
- Exact color theme and the typing-text hero treatment.
- Spotify/WakaTime integrations (personal accounts).

## Improvements over the reference structure

- Single-source typed content (`src/data/`) with a documented schema.
- Section anchors + scroll-spy nav instead of separate routes for everything.
- API routes get zod validation + rate limiting (reference contact route is thinner).
- Portfolio chatbot answers from an approved knowledge file with retrieval and a
  deterministic non-AI fallback.
- Explicit CONTENT_REVIEW.md gate so no unverified claim ships.

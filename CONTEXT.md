# The Arena — Project Context

## What is this
A Next.js static site that presents "The Arena" — a proposal for physically isolated AI competition. Published as a GitHub Pages site at https://diegodhh.github.io/arena/

## Repo
- GitHub: https://github.com/diegodhh/arena
- Branch: `main`
- Auto-deploy via GitHub Actions (`.github/workflows/deploy.yml`)

## Tech Stack
- Next.js 16 with App Router
- TypeScript
- Tailwind CSS
- Static export (`output: "export"` in `next.config.ts`)
- `basePath: "/arena"` for GitHub Pages

## Structure
- `src/app/page.tsx` — The entire article, single page. Uses inline components (Section, H3, P, Strong, Blockquote, Divider, NumberedList, Objection, Weakness).
- `src/app/layout.tsx` — Metadata, OG tags, Twitter cards, favicon config.
- `src/app/globals.css` — CSS variables for theming (light + dark mode).
- `src/app/icon.svg` — Custom colosseum/arena favicon (replaced Vercel default).
- `src/app/opengraph-image.tsx` — Auto-generated OG image for link previews.
- `src/app/twitter-image.tsx` — Auto-generated Twitter card image.
- `.github/workflows/deploy.yml` — Build + deploy to GitHub Pages on push to main.

## Design Decisions
- Dark/light mode automatic via `prefers-color-scheme`.
- Accent color: red (`#dc2626`).
- Max-width 2xl (672px) for comfortable reading.
- Font: Geist Sans / Geist Mono.
- OG images use `export const dynamic = "force-static"` (required for static export, no edge runtime).

## Content Sections (in order)
1. Hero (title + Claude collaboration disclaimer)
2. The Core Idea
3. The Problem (includes prisoner's dilemma table)
4. The Proposal (Arena, Atom/Bit Boundary, Incentives, Hardware Control, Financial)
5. Institutionalized War (War Analogy, Rules, Space Race Precedent)
6. The Endgame (Fuse, Not a Solution — with/without Arena comparison card)
7. How It Differs (AI Boxing, CERN for AI, International Governance)
8. Anticipated Objections (7 Q&A items)
9. Summary (6-point numbered list)
10. Open Weaknesses (6 weakness cards — added after self-critique)
11. Footer note

## Open Weaknesses Identified
These are in the article and are the main areas to iterate on:
1. **Atom/bit boundary is porous** — outputs can be reverse-engineered, pure information outputs don't fit the model.
2. **"Pull the plug" timing** — assumes we'd recognize loss of control, but alignment problem says we might not.
3. **Freedom vs. protected zones contradiction** — can't promise total freedom and also have rules.
4. **Governance under-specified** — "treaty-based org" needs actual design.
5. **Halting external deployment unenforceable** — open-source models already out, global enforcement doesn't exist.
6. **Superintelligence could escape physical channels** — encoding info in physical outputs, social engineering researchers.

## Original Content
The original idea is in `/Users/diego/Documents/personal/arena/idea.md` (not in the repo, just local).

## Local Dev
```bash
npm run build
# For local preview with basePath:
mkdir -p /tmp/arena-preview/arena && cp -r out/* /tmp/arena-preview/arena/
npx serve /tmp/arena-preview -l 5555
# Visit http://localhost:5555/arena
```

## Next Steps / Ideas for Iteration
- Deepen the atom/bit boundary argument — address reverse-engineering and pure-information outputs.
- Design a concrete governance model instead of hand-waving CERN.
- Address the "when to pull the plug" problem — monitoring, tripwires, automatic shutoffs.
- Resolve the tension between total freedom and protected zones.
- Consider enforcement mechanisms for external deployment freeze.

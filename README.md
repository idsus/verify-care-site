# VERIFY Care — presentation site

One-page Next.js site for the VERIFY Care healthcare-access research project.
Stack: Next.js (App Router) · Tailwind CSS v4 · Framer Motion · next/font · next/image.

## Run it

```bash
npm install     # first time only
npm run dev     # http://localhost:3000  (live-reloads as you edit)
npm run build   # production build
npm start       # serve the production build
```

## How to edit — the short version

**Almost everything you'd want to change is in ONE file: `content/site.ts`.**

| I want to change… | Edit |
|---|---|
| Any text, headline, stat, chart number, pathway card, source | `content/site.ts` |
| Colors | `app/globals.css` → the `@theme` block (each token is commented) |
| Fonts | `app/layout.tsx` (swap the two `next/font/google` imports) |
| Photos | drop files in `public/images/` and update the `src` paths in `content/site.ts` |
| Section order | `app/page.tsx` (reorder the components) |
| Layout/design of a section | the matching file in `components/` |

### Examples

- **Change a chart bar:** in `content/site.ts` find `evidence.charts`, edit `value`
  (the printed label) and `pct` (bar length, 0–100 relative to the widest bar).
- **Add a barrier chip to the demo:** copy one object in `demo.pathways`, give it a
  new `id`, `chip`, `title`, and `steps`. It appears automatically.
- **Mark a pathway verified:** set `verified: true` and give it a `stamp` string —
  it gets the green stamp; without it, cards show "Not yet verified".
- **Change the brand color:** in `app/globals.css` change `--color-berry` and
  `--color-berry-deep`. Everything follows.

## Where things live

```
content/site.ts        ← ALL content and data (edit this 95% of the time)
app/globals.css        ← design tokens (colors, fonts)
app/layout.tsx         ← fonts + <head> metadata
app/page.tsx           ← section order
components/            ← one file per section + shared pieces
  Opening.tsx  (hero: CARE FOUND. CARE REACHED? + map)
  Journey.tsx  (sticky search card that fails as you scroll)
  Scale.tsx  (32.4M — the system is not empty)
  BarrierStack.tsx  (interactive 7-barrier pile-up)
  Listing.tsx  (directory evidence + call log + research gap)
  Referral.tsx  (clickable CONTACT→…→SERVICE pipeline)
  WhatWorks.tsx  (navigation trials paired chart)
  MethodSection.tsx  (5-step method, expandable)
  PilotPlan.tsx  (published vs verified, prototype card, plan drawers)
  Ending.tsx  (closing + research library + footer)
  Topbar.tsx  BarChart.tsx  Reveal.tsx  Section.tsx
public/images/         ← photos (Unsplash, reuse-verified URLs)
```

## Notes

- Animations respect `prefers-reduced-motion` automatically (Framer Motion's
  `useReducedMotion` in `Reveal.tsx`, `BarChart.tsx`, `Hero.tsx`, `Demo.tsx`).
- Fonts (Bricolage Grotesque + Public Sans) are self-hosted by `next/font` at
  build time — no runtime Google requests, works offline after build.
- The site is fully static (`next build` prerenders it), so it can be deployed
  anywhere: Vercel, Netlify, GitHub Pages (`next build` + static export), etc.
- Chart data honesty: `pct` values are visual scale only; the printed `value` is
  the real number. Keep the two consistent when editing.

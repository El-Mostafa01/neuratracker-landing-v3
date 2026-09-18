# NeuraTracker — landing page v3

Production build of the Figma frame **"Landing page v3 — Desktop (EN)"**
(file `5llybaFvyd9h2mhzjqfUkY`, node `11686:1781`). Every section, its copy and its assets come from that frame,
in the same order: hero, Centrale Danone proof, problem, old way vs NeuraTracker, solutions flow, six capability
families, mobile teaser, mobile app, analytics console, trust grid, security, pricing calculator, closing CTA,
contact, footer.

Stack: Next.js 16 (App Router, static export) · React 19 · Tailwind CSS v4 · lucide-react · fonts via `next/font`
(Manrope, DM Sans, Inter).

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3001
pnpm build      # static export to ./out
pnpm typecheck
pnpm lint
```

## Deploy

**GitHub Pages (automatic).** `.github/workflows/deploy.yml` builds on every push to `main` with
`NEXT_PUBLIC_BASE_PATH=/<repo>` and publishes `out/` to Pages.

**Vercel (one click).** Import the repository in Vercel; the Next.js preset works as is (no base path). Leave
`NEXT_PUBLIC_BASE_PATH` unset.

## Notes

- Images in `public/images/` were exported from the Figma file (photos, 3D renders, logo, badges). The two
  product UIs that are French in the product itself (mobile screens, KPI dashboard) are recreated in English as
  React components (`src/components/ui/PhoneMock.tsx`, `src/components/ui/DashboardMock.tsx`).
- The pricing calculator is interactive; its formula is illustrative and its defaults reproduce the figures in the
  design. Wire it to the real calculator before selling with it.
- The contact form opens the visitor's email client with a pre-filled message (no backend).

# jacobhull.me — notes for Claude

Personal portfolio of Jacob Hull (Producer II at Riot Games). React 19 + Vite +
Tailwind v4, deployed to GitHub Pages at https://www.jacobhull.me on every push
to `main` (`.github/workflows/deploy.yml`). Never push to `main`; work on a
branch and open a PR.

## Open to-dos

- [ ] **Case study page.** One project written up as problem → role →
      key decisions → outcome, as its own route (like the Shadow Warrior 2
      article). Likely 2XKO or Zero Parades. Jacob will supply the content;
      raise this whenever the site is being worked on.
- [ ] **Check the archive's outbound links** (`ARCHIVE_WRITINGS` in
      `src/constants.ts`). Older Push Square / Bitcultures / Weebly pages may
      have moved; couldn't be checked from the build environment.

## How the site is built

- `npm run build` = client build + SSR build + `scripts/prerender.mjs`, which
  writes one static HTML file per route in `PAGE_META` (`src/seo.ts`), plus
  `404.html` and `sitemap.xml`. Adding a route: add it to `src/App.tsx` and
  to `PAGE_META`.
- Canonical domain is **www.jacobhull.me** (`SITE_URL` in `src/seo.ts`,
  matches `CNAME`).
- Content lives in `src/constants.ts` (experience, capabilities, projects,
  writing). Images are self-hosted WebP in `public/images/` (max 1600px).
- Fonts are self-hosted copies of the Google Fonts files in `src/fonts/`
  (Fontsource's Space Grotesk renders wider; don't swap it in).
- Contact form posts to FormSubmit's AJAX endpoint and shows an inline
  success message; without JS it falls back to a normal POST that redirects to
  `/?sent=1#contact`.

## Content and positioning

- Audience: product manager **and** game producer roles, in games and in
  tech. Frame production work in product terms (direction, roadmaps,
  prioritization, outcomes).
- Only publish public or site-backed figures. Riot's internal player metrics
  (e.g. exact VALORANT MAU, 2XKO DAU/unique players) stay off the site; use
  "tens of millions of monthly players" for VALORANT.
- Keep the brand coral `#fb5057` (from VALORANT branding) even though small
  red text fails WCAG contrast; everything else should pass AA.
- Keep the visual design; propose design changes rather than making them.

## Working style

- Work in small chunks, summarise, and wait for Jacob's go-ahead.
- Verify changes in a real browser (Playwright + Chromium) and pixel-diff
  pages that shouldn't change.

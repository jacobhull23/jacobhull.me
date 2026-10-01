# jacobhull.me

Personal portfolio for Jacob Hull. React 19 + Vite + Tailwind v4.

## Develop

```sh
npm install
npm run dev     # http://localhost:3000
npm run lint    # type-check
```

## Build & deploy

`npm run build` produces a static site in `dist/`. Every route in `src/seo.ts` is
prerendered to its own HTML file (`scripts/prerender.mjs`), so deep links such as
`/archive` load directly on GitHub Pages and carry their own title, description
and social-card tags.

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
The same workflow also runs weekly to refresh OpenCritic scores.

## OpenCritic scores

Project banners show OpenCritic's Top Critic Average. During deploy,
`scripts/fetch-opencritic.mjs` fetches the current scores using the
`OPENCRITIC_API_KEY` repository secret (a free RapidAPI key for the OpenCritic
API) and writes them to `src/data/opencritic.json`. If the key is missing or a
request fails, the banner uses the `criticScore` fallback in `src/constants.ts`.

## Adding a page

1. Add the route in `src/App.tsx`.
2. Add its title, description and share image to `PAGE_META` in `src/seo.ts`.
   The page is then prerendered and added to `sitemap.xml` automatically.

Images live in `public/images/` as WebP (max 1600px wide).

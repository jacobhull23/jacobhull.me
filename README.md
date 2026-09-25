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

## Adding a page

1. Add the route in `src/App.tsx`.
2. Add its title, description and share image to `PAGE_META` in `src/seo.ts`.
3. Add the URL to `public/sitemap.xml`.

Images live in `public/images/` as WebP (max 1600px wide).

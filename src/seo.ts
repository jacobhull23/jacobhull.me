export const SITE_URL = 'https://www.jacobhull.me';

export interface PageMeta {
  title: string;
  description: string;
  image: string;
  type: 'website' | 'article';
}

const DEFAULT_IMAGE = '/images/og/default.jpg';

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Jacob Hull | Game Producer & Product Manager',
    description:
      'Product-minded game producer: Producer II at Riot Games (VALORANT, 2XKO), previously ZA/UM, TT Games, and Product Manager at KPV LAB. Product direction, roadmaps, and cross-functional delivery.',
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/archive': {
    title: 'Writing Archive | Jacob Hull',
    description:
      'Reviews, previews, features, and news written by Jacob Hull for Push Square, Official PlayStation Magazine UK, and more.',
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/articles/shadow-warrior-2-preview': {
    title: 'Shadow Warrior 2 Preview: Not Silent, Very Deadly | Jacob Hull',
    description:
      'Wailing guitar, lovably cheesy one-liners, and more guts than an abattoir during barbecue season. A hands-on preview for Official PlayStation Magazine UK.',
    image: '/images/og/shadow-warrior-2-preview.jpg',
    type: 'article',
  },
};

export const NOT_FOUND_TITLE = 'Page not found | Jacob Hull';

// Structured data for the home page so search engines can identify the person
// behind the site (name, role, employer, profiles).
const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jacob Hull',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/jacob-hull.webp`,
  jobTitle: 'Producer II',
  worksFor: { '@type': 'Organization', name: 'Riot Games', url: 'https://www.riotgames.com' },
  description: PAGE_META['/'].description,
  knowsAbout: ['Product management', 'Game production', 'Live service games', 'Agile delivery'],
  sameAs: ['https://www.linkedin.com/in/jacobhull'],
};

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function renderHead(path: string): string {
  const meta = PAGE_META[path];
  if (!meta) {
    // 404 page: titled, but kept out of search results.
    return [`<title>${escape(NOT_FOUND_TITLE)}</title>`, `<meta name="robots" content="noindex" />`].join('\n    ');
  }
  const url = SITE_URL + (path === '/' ? '/' : path);
  const image = SITE_URL + meta.image;
  return [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:site_name" content="Jacob Hull" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...(path === '/' ? [`<script type="application/ld+json">${JSON.stringify(PERSON_JSON_LD).replace(/</g, '\\u003c')}</script>`] : []),
  ].join('\n    ');
}

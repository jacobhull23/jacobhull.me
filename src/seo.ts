export const SITE_URL = 'https://jacobhull.me';

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
      'Jacob Hull is a Producer II at Riot Games working on VALORANT and 2XKO, previously at ZA/UM (Disco Elysium, Zero Parades) and TT Games (LEGO Star Wars: The Skywalker Saga).',
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

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function renderHead(path: string): string {
  const meta = PAGE_META[path];
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
  ].join('\n    ');
}

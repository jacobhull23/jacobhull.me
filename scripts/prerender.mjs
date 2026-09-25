// Renders each route to static HTML so deep links load directly on GitHub Pages
// (no SPA fallback there) and crawlers / link previews see real content.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, renderHead, routes } = await import(path.join(root, 'dist-ssr/entry-server.js'));

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

for (const url of routes) {
  const html = template
    .replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->/, renderHead(url))
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
  // GitHub Pages serves /archive from archive.html without a trailing-slash redirect.
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true });
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${url} -> dist/${file}`);
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });

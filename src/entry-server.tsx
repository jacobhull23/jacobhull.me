import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.tsx';
import { PAGE_META } from './seo.ts';

export { renderHead } from './seo.ts';
export const routes = Object.keys(PAGE_META);

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}

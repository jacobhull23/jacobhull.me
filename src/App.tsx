import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Archive from './Archive';
import ShadowWarrior2Article from './ShadowWarrior2Article';
import NotFound from './NotFound';
import Privacy from './Privacy';
import { PAGE_META, NOT_FOUND_TITLE } from './seo';

export default function App() {
  const location = useLocation();

  // On navigation, jump to the #section in the URL if there is one (e.g.
  // /#contact from the footer on another page); otherwise start at the top.
  React.useEffect(() => {
    const meta = PAGE_META[location.pathname];
    document.title = meta ? meta.title : NOT_FOUND_TITLE;
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/articles/shadow-warrior-2-preview" element={<ShadowWarrior2Article />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

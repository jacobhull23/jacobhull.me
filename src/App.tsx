import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Archive from './Archive';
import ShadowWarrior2Article from './ShadowWarrior2Article';
import { PAGE_META } from './seo';

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
    const meta = PAGE_META[location.pathname];
    if (meta) document.title = meta.title;
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/articles/shadow-warrior-2-preview" element={<ShadowWarrior2Article />} />
    </Routes>
  );
}

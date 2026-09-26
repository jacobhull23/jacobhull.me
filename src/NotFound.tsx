import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from './components/Footer';

// Served by GitHub Pages as 404.html for any unknown URL (see scripts/prerender.mjs).
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <header className="border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-primary hover:text-primary/80 transition-colors">
            Jacob Hull
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Error 404</p>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            Page <span className="text-primary">not found</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-xl leading-snug text-foreground/75 mb-10">
            The page you're looking for doesn't exist or has moved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/"
              className="flex items-center justify-center h-12 px-6 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to home
            </Link>
            <Link
              to="/archive"
              className="flex items-center justify-center h-12 px-6 border border-primary/40 text-foreground text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary/5 hover:border-primary transition-all duration-300"
            >
              Writing archive
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

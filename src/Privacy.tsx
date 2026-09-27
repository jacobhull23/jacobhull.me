import { Link } from 'react-router-dom';
import Footer from './components/Footer';

const UPDATED = '27 September 2026';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <header className="border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-primary hover:text-primary/80 transition-colors">
            Jacob Hull
          </Link>
        </div>
      </header>

      <main className="flex-grow px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Last updated {UPDATED}</p>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-12">
            Privacy <span className="text-primary">notice</span>
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:font-bold prose-p:text-foreground/80 prose-li:text-foreground/80 prose-a:text-foreground prose-a:underline prose-a:hover:text-primary">
            <p>
              This is the personal portfolio of Jacob Hull. It doesn't sell anything, doesn't use analytics or
              advertising, and doesn't set cookies of its own. This page explains the little personal information
              the site does handle.
            </p>

            <h2>Contact form</h2>
            <p>
              If you send a message through the contact form, your <strong>name, email address and message</strong> are
              delivered to me by email using <a href="https://formsubmit.co" target="_blank" rel="noopener noreferrer">FormSubmit</a>,
              a form-delivery service based in the United States. I use these details only to read and reply to your
              message. They aren't shared, sold, or added to any mailing list.
            </p>
            <p>
              Messages are kept in my email for as long as they're useful for the conversation. You can ask me to
              delete them at any time.
            </p>

            <h2>Hosting</h2>
            <p>
              The site is hosted on <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a>.
              Like most web hosts, GitHub may log technical information such as your IP address to keep the service
              secure. See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub's privacy statement</a>.
            </p>

            <h2>Video previews</h2>
            <p>
              Project videos are embedded from YouTube in privacy-enhanced mode and only load when you choose to play
              one. YouTube's own <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a> applies
              to those videos.
            </p>

            <h2>Links to other sites</h2>
            <p>
              The site links to articles, games and profiles hosted elsewhere. Those sites have their own privacy
              practices.
            </p>

            <h2>Your choices</h2>
            <p>
              To ask what information I hold about you, or to have it deleted, send a message through the{' '}
              <a href="/#contact">contact form</a> or reach me on{' '}
              <a href="https://www.linkedin.com/in/jacobhull" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

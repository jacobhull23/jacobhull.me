import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Home/Hero';
import ProductProduction from './components/Home/ProductProduction';
import ProjectsList from './components/Home/ProjectsList';
import ExperienceList from './components/Home/ExperienceList';
import WritingList from './components/Home/WritingList';
import ContactForm from './components/Home/ContactForm';
import VideoModal from './components/Home/VideoModal';

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Lock body scroll when video is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeVideo]);

  const handleSubmit = (e: React.FormEvent) => {
    // We let the browser handle the form submission directly to FormSubmit
    // because it's the most reliable method for static sites (GitHub Pages).
    setFormStatus('submitting');
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground font-sans">
      <Navbar />

      <main>
        <Hero />
        <ProductProduction />
        <ProjectsList onWatchPreview={(url) => setActiveVideo(url)} />
        <ExperienceList />
        <WritingList />
        <ContactForm formStatus={formStatus} onSubmit={handleSubmit} />
      </main>

      <Footer />
      <VideoModal activeVideo={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}

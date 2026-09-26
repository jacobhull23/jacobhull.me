import { useState, useEffect, useCallback } from 'react';
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
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const closeVideo = useCallback(() => setActiveVideo(null), []);

  // Lock body scroll when video is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeVideo]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground font-sans">
      <Navbar />

      <main>
        <Hero />
        <ProductProduction />
        <ProjectsList onWatchPreview={(url) => setActiveVideo(url)} />
        <ExperienceList />
        <WritingList />
        <ContactForm />
      </main>

      <Footer />
      <VideoModal activeVideo={activeVideo} onClose={closeVideo} />
    </div>
  );
}

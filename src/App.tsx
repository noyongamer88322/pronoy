import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Engagements } from './components/Engagements';
import { Reviews } from './components/Reviews';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { CtaFooter } from './components/CtaFooter';
import { CursorIndicator } from './components/ui/CursorIndicator';
import { useScrollSpy } from './hooks/useScrollSpy';

export function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sectionIds = [
    'accueil',
    'services',
    'realisations',
    'engagements',
    'avis',
    'faq',
    'contact',
  ];
  const activeSection = useScrollSpy(sectionIds, 140);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F7] text-[#0A0A0A] font-sans relative selection:bg-[#E97230]/20 selection:text-[#E97230]">
      {/* Custom cursor indicator (circle + dot + click ripple) */}
      <CursorIndicator />

      {/* Top Info Bar (collapses on scroll) */}
      <TopBar scrolled={scrolled} />

      {/* Sticky Header with Scroll Progress Bar & Nav Links */}
      <Header
        scrolled={scrolled}
        scrollProgress={scrollProgress}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-hidden">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Stats Strip */}
        <Stats />

        {/* 3. Services */}
        <Services />

        {/* 4. Réalisations (Avant / Après) */}
        <BeforeAfter />

        {/* 5. Engagements */}
        <Engagements />

        {/* 6. Avis (Testimonials) */}
        <Reviews />

        {/* 7. FAQ */}
        <Faq />

        {/* 8. Contact Form & Info */}
        <Contact />
      </main>

      {/* 9. CTA Band & Footer */}
      <CtaFooter />
    </div>
  );
}

export default App;

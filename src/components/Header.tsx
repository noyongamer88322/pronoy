import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
  scrollProgress: number;
  activeSection: string;
}

const navItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'services', label: 'Services' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'engagements', label: 'Engagements' },
  { id: 'avis', label: 'Avis' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({
  scrolled,
  scrollProgress,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md shadow-sm border-b border-black/[0.04]'
          : 'bg-white border-b border-black/[0.03]'
      }`}
    >
      {/* Scroll Progress Bar at very top edge */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-[#E97230] z-50 transition-all duration-100 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('accueil');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-[#E97230] flex items-center justify-center text-white font-extrabold text-xl font-display shadow-md shadow-[#E97230]/25 transition-transform duration-300 group-hover:scale-105">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-[17px] font-extrabold tracking-[0.02em] font-display text-[#0A0A0A] leading-tight">
              PROTECT
            </span>
            <span className="text-[8px] font-bold tracking-[0.3em] font-display text-[#E97230] leading-none uppercase">
              TOITURE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative px-3.5 py-2 text-[14px] font-medium transition-colors cursor-pointer rounded-lg ${
                  isActive
                    ? 'text-[#E97230] font-semibold'
                    : 'text-[#6B6B66] hover:text-[#0A0A0A]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#E97230] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Phone */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Soft Phone Chip */}
          <a
            href="tel:+33623838816"
            className="group flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-black/[0.08] hover:border-[#E97230]/40 transition-colors bg-white/70 shadow-xs"
            title="Appeler Protect Toiture"
          >
            <div className="w-7 h-7 rounded-lg bg-[#E97230]/12 flex items-center justify-center text-[#E97230] group-hover:scale-110 transition-transform">
              <Phone className="w-3.5 h-3.5 fill-current text-[#E97230]" />
            </div>
            <span className="text-[13px] font-bold text-[#0A0A0A] font-display group-hover:text-[#E97230] transition-colors">
              06 23 83 88 16
            </span>
          </a>

          {/* Orange CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="inline-flex items-center gap-2 bg-[#E97230] hover:bg-[#D4601F] text-white text-[14px] font-bold font-display px-4 py-2.5 rounded-xl btn-orange-glow transition-all active:scale-[0.98] group"
          >
            <span>Devis Gratuit</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0A0A0A] hover:text-[#E97230] rounded-lg focus:outline-none"
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-black/10 px-4 pt-2 pb-6 shadow-xl"
          >
            <nav className="flex flex-col space-y-1 mb-5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-3 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-[#E97230]/10 text-[#E97230] font-semibold'
                        : 'text-[#0A0A0A] hover:bg-black/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 pt-3 border-t border-black/10">
              <a
                href="tel:+33623838816"
                className="flex items-center justify-center gap-3 py-3 rounded-xl border border-black/10 bg-[#F2F3EE]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E97230]/12 flex items-center justify-center text-[#E97230]">
                  <Phone className="w-4 h-4 fill-current text-[#E97230]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] text-[#6B6B66] uppercase font-semibold">
                    Appel gratuit
                  </span>
                  <span className="text-[15px] font-bold text-[#0A0A0A] font-display">
                    06 23 83 88 16
                  </span>
                </div>
              </a>

              <a
                href="#contact"
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center gap-2 w-full bg-[#E97230] hover:bg-[#D4601F] text-white text-[15px] font-bold font-display py-3 rounded-xl btn-orange-glow text-center"
              >
                <span>Demander mon Devis Gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

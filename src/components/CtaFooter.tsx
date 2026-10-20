import React from 'react';
import { ArrowRight, Phone, Mail, MapPin, Star } from 'lucide-react';

export const CtaFooter: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#080808] text-white overflow-hidden relative">
      {/* 1. CTA Band */}
      <div className="border-b border-white/10 py-16 sm:py-20 relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            {/* Left */}
            <div className="max-w-[620px]">
              <h2 className="text-[32px] sm:text-[42px] font-medium leading-[1.15] font-display text-white mb-3 tracking-[-0.02em]">
                Prêt à protéger votre toiture ?
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#8A8A85] font-sans">
                Obtenez votre devis gratuit en moins de 24h. Sans engagement.
              </p>
            </div>

            {/* Right: CTA button & Phone */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[#E97230] hover:bg-[#D4601F] text-white text-[15px] sm:text-[16px] font-bold font-display px-7 py-4 rounded-xl btn-orange-glow transition-all active:scale-[0.98]"
              >
                <span>Devis Gratuit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="tel:+33623838816"
                className="group flex items-center gap-2.5 px-5 py-3.5 rounded-xl border border-white/15 hover:border-[#E97230]/40 bg-white/5 transition-all text-white"
              >
                <div className="w-7 h-7 rounded-lg bg-[#E97230]/20 flex items-center justify-center text-[#E97230]">
                  <Phone className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-[15px] font-bold font-display group-hover:text-[#E97230] transition-colors">
                  06 23 83 88 16
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Small orange dot pulses below center as section marker */}
        <div className="flex justify-center mt-12">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E97230] pulse-orange-dot" />
        </div>
      </div>

      {/* 2. Main Footer (4 Columns) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Logo & Trust Info */}
          <div className="lg:col-span-4">
            <a href="#accueil" className="flex items-center gap-2.5 mb-5 group cursor-pointer inline-flex">
              <div className="w-10 h-10 rounded-xl bg-[#E97230] flex items-center justify-center text-white font-extrabold text-xl font-display shadow-md shadow-[#E97230]/20">
                P
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-extrabold tracking-[0.02em] font-display text-white leading-tight">
                  PROTECT
                </span>
                <span className="text-[8px] font-bold tracking-[0.3em] font-display text-[#E97230] leading-none uppercase">
                  TOITURE
                </span>
              </div>
            </a>

            <p className="text-[14px] text-[#8A8A85] leading-relaxed mb-6 max-w-[320px]">
              Artisan couvreur de confiance en Ardèche. Rénovation, démoussage, étanchéité. Garantie décennale 10 ans.
            </p>

            {/* Dark rounded chip: 4.9/5 stars */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] text-white">
              <div className="flex items-center text-[#FACC15]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold">4.9/5</span>
              <span className="text-[#8A8A85]">(47 avis)</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <span className="block text-[12px] font-bold uppercase tracking-[0.15em] text-white mb-5 font-sans">
              NAVIGATION
            </span>
            <ul className="space-y-3 text-[14px]">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'services', label: 'Services' },
                { id: 'realisations', label: 'Réalisations' },
                { id: 'engagements', label: 'Engagements' },
                { id: 'avis', label: 'Avis' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-[#8A8A85] hover:text-[#E97230] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-3">
            <span className="block text-[12px] font-bold uppercase tracking-[0.15em] text-white mb-5 font-sans">
              CONTACT
            </span>
            <ul className="space-y-4 text-[14px]">
              <li>
                <a
                  href="tel:+33623838816"
                  className="flex items-center gap-3 text-[#8A8A85] hover:text-[#E97230] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E97230] shrink-0 border border-white/5">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="font-medium text-white/90">06 23 83 88 16</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:protectoiture74@gmail.com"
                  className="flex items-center gap-3 text-[#8A8A85] hover:text-[#E97230] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E97230] shrink-0 border border-white/5">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-white/90 break-all">protectoiture74@gmail.com</span>
                </a>
              </li>

              <li className="flex items-center gap-3 text-[#8A8A85]">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E97230] shrink-0 border border-white/5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-white/90">07170 Lavilledieu, Ardèche</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Informations */}
          <div className="lg:col-span-3">
            <span className="block text-[12px] font-bold uppercase tracking-[0.15em] text-white mb-5 font-sans">
              INFORMATIONS
            </span>
            <ul className="space-y-3 text-[14px] mb-6">
              <li>
                <a href="#footer" className="text-[#8A8A85] hover:text-[#E97230] transition-colors">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a href="#footer" className="text-[#8A8A85] hover:text-[#E97230] transition-colors">
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="#footer" className="text-[#8A8A85] hover:text-[#E97230] transition-colors">
                  Assurance Décennale
                </a>
              </li>
            </ul>

            <div className="space-y-1 text-[11px] text-[#5A5A56] font-mono border-t border-white/5 pt-4">
              <p>SIREN : 894 512 873 00018</p>
              <p>TVA : FR 74 894512873</p>
              <p>Entrepreneur individuel — Artisan Couvreur</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-[12px] text-[#5A5A56]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© 2026 Protect Toiture — Artisan Couvreur en Ardèche. Tous droits réservés.</p>
          <p>Site réalisé avec ♥ pour Protect Toiture</p>
        </div>
      </div>
    </footer>
  );
};

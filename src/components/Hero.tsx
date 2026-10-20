import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Clock, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GlassCardGarantie, GlassCardRating, GlassCardUsers } from './GlassCard';

export const Hero: React.FC = () => {
  const line1Words = ['Votre', 'Toiture'];
  const line2Words = ['Mérite', 'le', 'Meilleur'];

  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#080808] text-white pt-10 sm:pt-16 pb-8"
    >
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/hero.jpg"
          alt="Toiture ardéchoise rénovée par Protect Toiture"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient dark overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.72) 55%, rgba(8,8,8,0.85) 100%)',
          }}
        />
        {/* Subtle orange ambient glow in background */}
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #E97230, transparent 70%)' }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-[1240px] w-full mx-auto px-4 sm:px-6 my-auto pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Copy & CTAs */}
          <div className="lg:col-span-7 max-w-[660px]">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[12px] sm:text-[13px] font-medium text-white mb-6 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] pulse-green-dot shrink-0" />
              <span>Disponible — Intervention sous 24h en Ardèche</span>
            </motion.div>

            {/* Huge H1: Word-by-word animation */}
            <h1 className="text-[44px] sm:text-[68px] lg:text-[84px] font-medium leading-[1.05] tracking-[-0.03em] font-display mb-6">
              <span className="block text-white font-medium">
                {line1Words.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + idx * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block text-[#E97230] font-semibold">
                {line2Words.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + idx * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
              className="text-[#B5B5B0] text-[16px] sm:text-[18px] leading-[1.6] mb-8 font-sans"
            >
              Artisan couvreur en Ardèche. Rénovation, démoussage, étanchéité.{' '}
              <strong className="text-white font-semibold">Garantie 10 ans</strong>, produits 100% biodégradables.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              {/* Primary Orange Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[#E97230] hover:bg-[#D4601F] text-white text-[15px] sm:text-[16px] font-bold font-display px-7 py-4 rounded-xl btn-orange-glow transition-all active:scale-[0.98]"
              >
                <span>Devis Gratuit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Phone Box */}
              <a
                href="tel:+33623838816"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E97230]/40 transition-all backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E97230]/20 flex items-center justify-center text-[#E97230] group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 fill-current text-[#E97230]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] text-[#A1A1AA] uppercase font-semibold tracking-wider">
                    Appel gratuit
                  </span>
                  <span className="text-[15px] sm:text-[16px] font-bold text-white font-display group-hover:text-[#E97230] transition-colors">
                    06 23 83 88 16
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 text-[12px] sm:text-[13px] text-[#A1A1AA] pt-2 border-t border-white/10"
            >
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#FACC15] fill-current" />
                <span><strong className="text-white">4.9/5</strong> Google — 47 avis</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#E97230]" />
                <span><strong className="text-white">Garantie 10 ans</strong> — Décennale</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#E97230]" />
                <span><strong className="text-white">Devis 24h</strong> — Sans engagement</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Glass Cards */}
          <div className="lg:col-span-5 relative hidden sm:flex flex-col items-center lg:items-end gap-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full flex justify-end"
            >
              <GlassCardGarantie />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-full flex justify-end lg:pr-8"
            >
              <GlassCardRating />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="w-full flex justify-end"
            >
              <GlassCardUsers />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Trust Bar & Scroll Indicator */}
      <div className="relative z-20 w-full border-t border-white/10 bg-black/40 backdrop-blur-md py-3.5">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Badge & highlights */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[12px] sm:text-[13px] text-[#A1A1AA]">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <span className="w-4 h-4 rounded-full bg-white text-black font-bold text-[10px] flex items-center justify-center">
                G
              </span>
              <span className="text-white font-medium">4.9/5 — 47 avis</span>
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E97230]" />
              <span className="text-white/90">Garantie Décennale</span>
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E97230]" />
              <span className="text-white/90">Produits Biodégradables</span>
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E97230]" />
              <span className="text-white/90">200+ clients satisfaits</span>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] font-mono">
            <span>SCROLL</span>
            <div className="w-[18px] h-[30px] rounded-full border border-white/20 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#E97230]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

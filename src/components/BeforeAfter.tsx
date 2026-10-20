import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ThumbsUp, TrendingUp } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { FloatingCircles } from './ui/FloatingCircles';

export const BeforeAfter: React.FC = () => {
  return (
    <section
      id="realisations"
      className="relative py-24 sm:py-32 bg-[#F9F9F7] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
        <FloatingCircles position="left" />

        <SectionHeading
          eyebrow="AVANT / APRÈS"
          title="Nos Réalisations"
          subtitle="Plus de 200 chantiers réalisés en Ardèche."
        />

        {/* Small Stat Chips under subtitle */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 -mt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-[13px] font-sans shadow-xs">
            <ThumbsUp className="w-3.5 h-3.5 text-[#E97230]" />
            <span className="text-[#6B6B66]">
              <strong className="text-[#0A0A0A] font-bold">98%</strong> clients satisfaits
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-[13px] font-sans shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#E97230]" />
            <span className="text-[#6B6B66]">
              <strong className="text-[#0A0A0A] font-bold">+40</strong> chantiers en 2025
            </span>
          </div>
        </div>

        {/* Before / After Static Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative max-w-[860px] mx-auto rounded-[28px] overflow-hidden bg-white"
          style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.10)' }}
        >
          <div className="grid grid-cols-2 gap-[10px] bg-white h-[360px] sm:h-[575px]">
            {/* AVANT — left photo */}
            <div className="relative overflow-hidden">
              <img
                src="/images/before.jpg"
                alt="Toiture ancienne avec mousse et lichens avant intervention Protect Toiture"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                draggable="false"
              />
              <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 pointer-events-none">
                <span
                  className="px-[22px] py-[8px] rounded-[4px] text-white font-display uppercase tracking-[0.01em] text-[22px] sm:text-[40px] whitespace-nowrap"
                  style={{ fontWeight: 800, backgroundColor: 'rgba(0,0,0,0.55)' }}
                >
                  AVANT
                </span>
              </div>
            </div>

            {/* APRÈS — right photo */}
            <div className="relative overflow-hidden">
              <img
                src="/images/after.jpg"
                alt="Toiture en tuiles canal propres et rénovées après traitement Protect Toiture"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                draggable="false"
              />
              <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 pointer-events-none">
                <span
                  className="px-[22px] py-[8px] rounded-[4px] text-white font-display uppercase tracking-[0.01em] text-[22px] sm:text-[40px] whitespace-nowrap"
                  style={{ fontWeight: 800, backgroundColor: 'rgba(0,0,0,0.55)' }}
                >
                  APRÈS
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA & Caption below slider */}
        <div className="flex flex-col items-center justify-center mt-10 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#262626] text-white text-[15px] font-bold font-display px-7 py-4 rounded-xl border border-white/10 shadow-lg transition-all active:scale-[0.98]"
          >
            <span>Démarrer mon projet</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-2 mt-4 text-[13px] text-[#6B6B66]">
            <Check className="w-4 h-4 text-[#E97230] stroke-[3]" />
            <span>Devis gratuit — Réponse garantie sous 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

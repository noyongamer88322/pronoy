import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, Receipt, Star, Award, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { FloatingCircles } from './ui/FloatingCircles';

export const Engagements: React.FC = () => {
  const commitments = [
    {
      icon: Shield,
      title: 'Garantie Décennale',
      text: 'Tous nos travaux sont couverts par une assurance décennale. Votre toiture est protégée pendant 10 ans.',
    },
    {
      icon: Leaf,
      title: 'Produits 100% Biodégradables',
      text: 'Nos produits de traitement sont écologiques et sans danger pour vos sols, votre jardin et vos proches. Notre traitement hydrofuge pénètre en profondeur et protège sans nuire pendant des années.',
    },
    {
      icon: Receipt,
      title: 'Devis Gratuit, Sans Engagement',
      text: 'Déplacement et diagnostic gratuits. Devis détaillé remis sous 24h. Aucun frais caché, zéro surprise.',
    },
  ];

  const certifications = [
    'Garantie 10 ans',
    'Assurance décennale',
    'Produits biodégradables',
    'Artisan qualifié',
  ];

  return (
    <section
      id="engagements"
      className="relative py-24 sm:py-32 bg-[#F9F9F7] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
        <FloatingCircles position="right" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image with floating badges */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative rounded-[28px] overflow-hidden shadow-2xl border border-black/[0.06] bg-[#0A0A0A] aspect-[4/5] max-w-[480px] mx-auto lg:max-w-none"
            >
              <img
                src="/images/roofer.jpg"
                alt="Artisan couvreur Protect Toiture posant des tuiles en terre cuite en Ardèche"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating rating badge top-left */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-black/[0.06] flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-[#FACC15]/20 flex items-center justify-center text-[#FACC15]">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-[14px] font-bold text-[#0A0A0A] font-display block leading-tight">
                  ★ 4.9
                </span>
                <span className="text-[11px] text-[#6B6B66] font-sans">
                  47 avis vérifiés
                </span>
              </div>
            </motion.div>

            {/* Floating guarantee card bottom-right */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-black/[0.06] flex items-center gap-3.5 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-[#E97230] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#E97230]/40">
                <Shield className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="text-[13px] font-bold text-[#0A0A0A] font-display block leading-tight">
                  Assurance décennale
                </span>
                <span className="text-[11px] text-[#6B6B66] font-sans">
                  Travaux garantis 10 ans
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy, 3 Stacked Cards & Certifications */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="NOS ENGAGEMENTS"
              title="Pourquoi Nous Faire Confiance ?"
              subtitle="Pas de compromis. Les meilleurs matériaux, les meilleurs produits, pour une protection durable de votre toiture."
              align="left"
              className="mb-6!"
            />

            {/* Recommendation pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#15803D] text-[12px] sm:text-[13px] font-medium mb-8">
              <Shield className="w-3.5 h-3.5" />
              <span>
                <strong>100%</strong> de nos clients nous recommandent
              </span>
            </div>

            {/* 3 Stacked Commitment Cards */}
            <div className="space-y-4 mb-8">
              {commitments.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: 'easeOut',
                    }}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.06] shadow-xs hover:shadow-md transition-shadow flex items-start gap-4 sm:gap-5"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[17px] sm:text-[18px] font-bold font-display text-[#0A0A0A] mb-1.5 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-[#6B6B66] leading-[1.6]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Certifications & Guarantees Chips */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#6B6B66] mb-3">
                CERTIFICATIONS & GARANTIES
              </span>
              <div className="flex flex-wrap gap-2.5">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2F3EE] border border-black/[0.04] text-[12px] font-medium text-[#0A0A0A]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E97230]" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

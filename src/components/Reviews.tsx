import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, MapPin, ExternalLink } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { FloatingCircles } from './ui/FloatingCircles';
import { reviewsData } from '../data/reviews';

export const Reviews: React.FC = () => {
  return (
    <section
      id="avis"
      className="relative py-24 sm:py-32 bg-[#F9F9F7] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
        <FloatingCircles position="left" />

        <SectionHeading
          eyebrow="AVIS CLIENTS VÉRIFIÉS"
          title="Ils Nous Ont Fait Confiance"
          subtitle="Découvrez les retours authentiques de propriétaires ardéchois qui ont confié leur toiture à Protect Toiture."
        />

        {/* 6 Review Cards Grid: 3 cols x 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviewsData.map((review, index) => {
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="card-soft bg-[#F2F3EE] p-7 rounded-[22px] flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Stars (left) & Verified Badge (right) */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1 text-[#FACC15]">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.08 + i * 0.06,
                          }}
                        >
                          <Star className="w-4 h-4 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-semibold text-[#15803D] bg-[#22C55E]/12 px-2.5 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-[#22C55E]" />
                      <span>Avis vérifié</span>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-[15px] text-[#0A0A0A] leading-[1.65] italic mb-6">
                    « {review.quote} »
                  </p>
                </div>

                {/* Bottom Row: Avatar, Name & Location */}
                <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white font-bold font-display text-[15px] flex items-center justify-center shrink-0">
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#0A0A0A] font-display leading-tight">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[12px] text-[#6B6B66] mt-0.5">
                        <MapPin className="w-3 h-3 text-[#E97230]" />
                        <span>{review.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] text-[#8A8A85] font-sans">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Link / Pill: Voir nos 47 avis sur Google */}
        <div className="flex justify-center">
          <a
            href="https://www.google.com/search?q=Protect+Toiture+Ardeche"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 hover:border-[#E97230]/40 text-[14px] font-bold font-display text-[#0A0A0A] hover:text-[#E97230] shadow-xs hover:shadow-md transition-all"
          >
            <span className="w-5 h-5 rounded-full bg-white border border-black/10 flex items-center justify-center text-xs font-bold font-display">
              G
            </span>
            <span>Voir nos 47 avis sur Google</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

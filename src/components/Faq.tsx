import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { FloatingCircles } from './ui/FloatingCircles';
import { faqData } from '../data/faq';

export const Faq: React.FC = () => {
  // Only one item open at a time; first item open by default or null
  const [openId, setOpenId] = useState<string | null>('zone');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 bg-[#F9F9F7] overflow-hidden"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 relative">
        <FloatingCircles position="right" />

        <SectionHeading
          eyebrow="FAQ"
          title="Vos Questions, Nos Réponses"
          subtitle="Tout ce que vous devez savoir avant de lancer vos travaux de toiture en Ardèche."
        />

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`rounded-[20px] transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#E97230]/40 shadow-md shadow-[#E97230]/5'
                    : 'bg-[#F2F3EE] border-black/[0.06] hover:border-black/15'
                }`}
              >
                {/* Accordion Header Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[16px] sm:text-[17px] font-bold font-display transition-colors ${
                      isOpen ? 'text-[#E97230]' : 'text-[#0A0A0A]'
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Circular Chevron Button */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#E97230] text-white shadow-sm'
                        : 'bg-white text-[#0A0A0A] border border-black/10'
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-[15px] sm:text-[16px] text-[#6B6B66] leading-[1.65] font-sans border-t border-black/[0.04]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Small reassurance callout */}
        <div className="mt-10 text-center text-[14px] text-[#6B6B66]">
          Une question spécifique ? Appelez-nous directement au{' '}
          <a
            href="tel:+33623838816"
            className="font-bold text-[#0A0A0A] hover:text-[#E97230] underline underline-offset-4"
          >
            06 23 83 88 16
          </a>
        </div>
      </div>
    </section>
  );
};

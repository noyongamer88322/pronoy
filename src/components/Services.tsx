import React from 'react';
import { motion } from 'framer-motion';
import { Search, Hammer, Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { FloatingCircles } from './ui/FloatingCircles';
import { servicesData } from '../data/services';

const iconMap = {
  Search,
  Hammer,
  Sparkles,
};

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-[#F9F9F7] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
        {/* Floating circles decoration */}
        <FloatingCircles position="right" />

        <SectionHeading
          eyebrow="NOS EXPERTISES"
          title="Comment pouvons-nous vous aider ?"
          subtitle="De la recherche de fuites à la rénovation complète, des solutions adaptées et durables pour votre toiture en Ardèche."
        />

        {/* 3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                className="group relative bg-[#F2F3EE] border border-black/[0.06] hover:border-[#E97230]/40 rounded-[24px] p-8 sm:p-9 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon: black square that turns orange on hover */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] group-hover:bg-[#E97230] flex items-center justify-center text-white transition-colors duration-300 mb-6 shadow-sm">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-bold font-display text-[#0A0A0A] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Text */}
                  <p className="text-[15px] sm:text-[16px] text-[#6B6B66] leading-[1.65] mb-6">
                    {service.text}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase text-[#6B6B66] bg-[#EAEAE5] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-bold text-[#E97230] hover:text-[#D4601F] transition-colors mt-auto group-hover:underline underline-offset-4"
                >
                  <span>{service.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

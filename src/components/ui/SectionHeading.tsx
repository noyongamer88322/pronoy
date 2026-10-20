import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  dark = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`relative z-10 mb-12 sm:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-[800px]' : 'text-left max-w-[640px]'
      } ${className}`}
    >
      {/* Eyebrow with underline bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`inline-flex flex-col ${isCenter ? 'items-center' : 'items-start'} mb-3`}
      >
        <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E97230]">
          {eyebrow}
        </span>
        <div className="w-[24px] h-[2px] bg-[#E97230] mt-1 rounded-full" />
      </motion.div>

      {/* Main Section H2 */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className={`text-[32px] sm:text-[42px] lg:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] font-display ${
          dark ? 'text-white' : 'text-[#0A0A0A]'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </motion.h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className={`mt-4 text-[15px] sm:text-[17px] leading-[1.65] font-sans ${
            dark ? 'text-[#A1A1AA]' : 'text-[#6B6B66]'
          } ${isCenter ? 'max-w-[680px] mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

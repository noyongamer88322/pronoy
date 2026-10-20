import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCirclesProps {
  position?: 'left' | 'right';
  className?: string;
}

export const FloatingCircles: React.FC<FloatingCirclesProps> = ({
  position = 'right',
  className = '',
}) => {
  return (
    <div
      className={`pointer-events-none absolute z-0 select-none ${
        position === 'left' ? '-left-6 sm:left-4' : '-right-6 sm:right-4'
      } top-8 sm:top-12 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-4, 6, -4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-20 h-20"
      >
        {/* Soft filled circle (~50px) */}
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-[#E97230]/15 blur-[1px]" />
        {/* Ring outline circle (~40px) */}
        <div className="absolute bottom-1 right-1 w-10 h-10 rounded-full border-2 border-[#E97230]/30" />
      </motion.div>
    </div>
  );
};

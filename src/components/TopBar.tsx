import React from 'react';
import { Clock, Star, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TopBarProps {
  scrolled: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ scrolled }) => {
  return (
    <AnimatePresence>
      {!scrolled && (
        <motion.div
          initial={{ height: 36, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="bg-[#0A0A0A] text-white border-b border-white/5 overflow-hidden text-[12px] z-50 relative"
        >
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-9 flex items-center justify-between">
            {/* Left: Hours */}
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#E97230]" />
              <span className="hidden sm:inline">Horaires :</span>
              <span className="font-medium text-white">Lun - Sam : 8h00 - 19h00</span>
            </div>

            {/* Center: Rating */}
            <a
              href="#avis"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <div className="flex items-center text-[#FACC15]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span>
                <strong className="text-white font-bold">4.9/5</strong> — 47 avis Google
              </span>
            </a>

            {/* Right: Phone */}
            <a
              href="tel:+33623838816"
              className="flex items-center gap-1.5 font-medium text-white/90 hover:text-[#E97230] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E97230]" />
              <span className="font-bold tracking-wide">06 23 83 88 16</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

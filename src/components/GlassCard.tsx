import React from 'react';
import { Shield, Check, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const GlassCardGarantie: React.FC = () => {
  return (
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      className="hero-glass-card p-5 sm:p-6 w-full max-w-[340px] shadow-2xl relative"
    >
      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-11 h-11 rounded-xl bg-[#E97230] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#E97230]/40">
          <Shield className="w-5 h-5 fill-current" />
        </div>
        <div>
          <h3 className="text-white text-[17px] font-bold font-display leading-tight">
            Garantie 10 ans
          </h3>
          <p className="text-[#A1A1AA] text-[12px] font-sans">
            Assurance décennale incluse
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-white/10 my-3" />

      <ul className="space-y-2.5">
        {[
          'Couverture complète',
          'Pièces et main d’œuvre',
          'Assurance décennale',
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-2.5 text-[13px] text-white/90">
            <div className="w-4 h-4 rounded-full bg-[#E97230]/20 flex items-center justify-center text-[#E97230] shrink-0">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const GlassCardRating: React.FC = () => {
  return (
    <motion.div
      animate={{ y: [6, -6, 6] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      className="hero-glass-card px-5 py-3.5 flex items-center gap-4 w-fit shadow-xl"
    >
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-[#0A0A0A] text-lg font-display shrink-0 shadow-sm">
        G
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-white font-extrabold text-[18px] font-display">
            4.9
          </span>
          <div className="flex items-center text-[#FACC15]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-[#A1A1AA] text-[12px] font-sans">
          47 avis vérifiés
        </p>
      </div>
    </motion.div>
  );
};

export const GlassCardUsers: React.FC = () => {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
      className="hero-glass-card px-5 py-3.5 flex items-center gap-3.5 w-fit shadow-xl"
    >
      <div className="w-10 h-10 rounded-xl bg-[#E97230] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#E97230]/30">
        <Users className="w-5 h-5" />
      </div>
      <div>
        <div className="text-white font-extrabold text-[18px] font-display leading-tight">
          200+
        </div>
        <p className="text-[#A1A1AA] text-[12px] font-sans">
          Clients satisfaits
        </p>
      </div>
    </motion.div>
  );
};

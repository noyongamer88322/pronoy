import React from 'react';
import { Home, Shield, Timer, Star } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
  icon: React.ReactNode;
  end: number;
  decimals?: number;
  suffix: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  end,
  decimals = 0,
  suffix,
  label,
}) => {
  const { formatted, elementRef } = useCountUp({
    end,
    duration: 1800,
    decimals,
    startOnView: true,
  });

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/60 sm:bg-transparent border sm:border-0 border-black/[0.04]"
    >
      {/* Outlined Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#E97230]/10 flex items-center justify-center text-[#E97230] mb-4">
        {icon}
      </div>

      {/* Number + Suffix */}
      <div className="flex items-baseline justify-center font-display font-bold leading-none mb-2">
        <span className="text-[40px] sm:text-[56px] text-[#0A0A0A] tracking-tight">
          {formatted}
        </span>
        <span className="text-[18px] sm:text-[24px] font-semibold text-[#E97230] ml-1">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase text-[#6B6B66]">
        {label}
      </span>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="relative z-20 py-12 sm:py-16 bg-[#F9F9F7] border-b border-black/[0.06]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:divide-x lg:divide-black/[0.06]">
          <StatItem
            icon={<Home className="w-5 h-5 text-[#E97230]" />}
            end={200}
            suffix="+"
            label="TOITURES RÉNOVÉES"
          />
          <StatItem
            icon={<Shield className="w-5 h-5 text-[#E97230]" />}
            end={10}
            suffix=" ans"
            label="GARANTIE DÉCENNALE"
          />
          <StatItem
            icon={<Timer className="w-5 h-5 text-[#E97230]" />}
            end={24}
            suffix="h"
            label="DÉLAI D'INTERVENTION"
          />
          <StatItem
            icon={<Star className="w-5 h-5 text-[#E97230]" />}
            end={4.9}
            decimals={1}
            suffix="/5"
            label="SATISFACTION CLIENT"
          />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'dark' | 'phone' | 'ghost';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon = true,
}) => {
  if (variant === 'phone') {
    const content = (
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#E97230]/12 flex items-center justify-center text-[#E97230] shrink-0 transition-transform duration-300 group-hover:scale-110">
          <Phone className="w-4 h-4 fill-current text-[#E97230]" />
        </div>
        <div className="text-left flex flex-col">
          <span className="text-[10px] uppercase font-semibold text-[#6B6B66] tracking-[0.08em] leading-tight">
            Appel gratuit
          </span>
          <span className="text-[14px] sm:text-[15px] font-bold text-[#0A0A0A] font-display leading-tight group-hover:text-[#E97230] transition-colors">
            06 23 83 88 16
          </span>
        </div>
      </div>
    );

    const classes = `group inline-flex items-center px-4 py-2 rounded-2xl bg-white border border-black/10 hover:border-[#E97230]/40 shadow-sm hover:shadow-md transition-all duration-300 ${className}`;

    if (href) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <button type={type} className={classes} onClick={onClick}>
        {content}
      </button>
    );
  }

  const baseStyle =
    'group relative inline-flex items-center justify-center gap-2 font-display font-bold text-[14px] sm:text-[15px] rounded-xl px-6 py-3.5 transition-all duration-300 active:scale-[0.98] cursor-pointer';

  let variantStyle = '';

  if (variant === 'primary') {
    variantStyle =
      'bg-[#E97230] hover:bg-[#D4601F] text-white btn-orange-glow';
  } else if (variant === 'dark') {
    variantStyle =
      'bg-[#0A0A0A] hover:bg-[#262626] text-white border border-white/10 shadow-lg';
  } else if (variant === 'ghost') {
    variantStyle =
      'bg-transparent hover:bg-black/5 text-[#0A0A0A] border border-black/10';
  }

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyle} ${variantStyle} ${disabled ? 'opacity-60 pointer-events-none' : ''} ${className}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

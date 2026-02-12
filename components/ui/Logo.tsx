import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'navbar', className = '' }) => {
  // Default text color logic
  const baseTextColor = variant === 'footer' ? 'text-white' : 'text-current';

  return (
    <div className={`flex items-center gap-3 ${baseTextColor} ${className}`}>
      {/* Bull icon and text on same horizontal level */}
      <img
        src="/assets/logo.jpeg"
        alt="Squareoff InvestTech"
        className="h-10 shrink-0 object-contain"
      />
      <div className="flex flex-col items-start justify-center">
        <span className={`${variant === 'footer' ? 'text-3xl' : 'text-2xl'} font-bold tracking-wider leading-none font-sans`}>
          SQUAREOFF
        </span>
        <span className={`${variant === 'footer' ? 'text-xl' : 'text-sm'} font-bold tracking-wide leading-none ${variant === 'footer' ? 'mt-0' : 'mt-1'}`}>
          <span className="text-green-600 dark:text-green-500">Invest</span>
          <span className="text-red-600 dark:text-red-500">Tech</span>
        </span>

        {variant === 'footer' && (
          <div className="flex flex-col w-full mt-2">
            <div className="h-px bg-white/20 w-full my-1"></div>
            <span className="text-[10px] tracking-[0.25em] uppercase opacity-80 font-serif w-full text-center">
              Elevate Your Portfolio
            </span>
            <div className="h-px bg-white/20 w-full my-1"></div>
            <span className="text-xs font-light opacity-80 text-center w-full">
              India | Canada
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
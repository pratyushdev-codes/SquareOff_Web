import React from 'react';
import logoCombined from '../../assets/logoCombined.png';

interface LogoProps {
  variant?: 'navbar' | 'footer';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'navbar', className = '' }) => {
  // Default text color logic
  const baseTextColor = variant === 'footer' ? 'text-white' : 'text-current';

  const sizeClasses =
    variant === 'footer'
      ? 'h-14 sm:h-16 md:h-20 w-auto max-w-[280px] sm:max-w-[340px] md:max-w-[400px]'
      : 'h-12 sm:h-13 md:h-14 w-auto max-w-[240px] sm:max-w-[280px] md:max-w-[320px]';

  return (
    <div className={`flex items-center gap-3 ${baseTextColor} ${className}`}>
      <img
        src={logoCombined}
        alt="Squareoff InvestTech"
        className={`shrink-0 object-contain ${sizeClasses}`}
      />
    </div>
  );
};
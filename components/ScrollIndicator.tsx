import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
}

/**
 * Animated bouncing scroll-down indicator for hero sections.
 * Styled like TMFG's scroll prompt — a continuously bouncing chevron.
 */
export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className = '' }) => {
  return (
    <motion.div
      className={`flex flex-col items-center gap-2 cursor-pointer select-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      onClick={() => {
        window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
      }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown className="w-5 h-5 text-neutral-400" />
      </motion.div>
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wraps content and animates it into view when the user scrolls to it.
 * Uses a gentle fade-in and slide-up for a smooth "load" effect.
 */
export const AnimateSection: React.FC<AnimateSectionProps> = ({
  children,
  className = '',
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

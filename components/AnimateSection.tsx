import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wraps content and animates it into view when the user scrolls to it.
 * Uses a gentle fade-in and slide-up plus a subtle scroll parallax for smooth section motion.
 */
export const AnimateSection: React.FC<AnimateSectionProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  /* Strong parallax on section: text/headings move clearly as section enters/leaves */
  const parallaxY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [140, 0, 0, -140]);

  return (
    <motion.div
      ref={ref}
      data-parallax-section
      style={{ y: parallaxY }}
      className={className}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

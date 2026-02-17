import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MOBILE_BREAKPOINT = 768;

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wraps content and animates it into view when the user scrolls to it.
 * Parallax is disabled on mobile so bottom sections and text are not hidden.
 */
export const AnimateSection: React.FC<AnimateSectionProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [140, 0, 0, -140]);
  const mobileRef = useRef(isMobile);
  mobileRef.current = isMobile;
  const y = useTransform(parallaxY, (v) => (mobileRef.current ? 0 : v));

  return (
    <motion.div
      ref={ref}
      data-parallax-section
      style={{ y, overflow: 'visible' }}
      className={className}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'visible' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

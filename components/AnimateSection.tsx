import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MOBILE_BREAKPOINT = 768;

type Direction = 'up' | 'down' | 'left' | 'right';

const getDirectionOffset = (direction: Direction): { x: number; y: number } => {
  switch (direction) {
    case 'up':    return { x: 0, y: 40 };
    case 'down':  return { x: 0, y: -40 };
    case 'left':  return { x: -60, y: 0 };
    case 'right': return { x: 60, y: 0 };
  }
};

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Direction from which the content slides in. Default: 'up' */
  direction?: Direction;
}

/**
 * Wraps content and animates it into view when the user scrolls to it.
 * Supports slide-from-up/down/left/right via the `direction` prop.
 * Animations repeat every time the element re-enters the viewport.
 * Parallax is disabled on mobile so bottom sections and text are not hidden.
 */
export const AnimateSection: React.FC<AnimateSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up' as Direction,
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

  const offset = getDirectionOffset(direction);

  return (
    <motion.div
      ref={ref}
      data-parallax-section
      style={{ y, overflow: 'visible' }}
      className={className}
    >
      <motion.div
        initial={{ opacity: 0, x: offset.x, y: offset.y, scale: 0.97, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'visible' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};


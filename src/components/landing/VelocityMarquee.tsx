'use client';

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { useRef } from 'react';

import { commercialLines } from '@/data/lines';

const wrap = (min: number, max: number, value: number) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

type RowProps = {
  children: ReactNode;
  baseVelocity: number;
};

// Infinite row that speeds up and flips direction with the scroll velocity
const MarqueeRow = ({ children, baseVelocity }: RowProps) => {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });
  const x = useTransform(baseX, (value) => `${wrap(-25, -50, value)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) direction.current = -1;
    else if (velocityFactor.get() > 0) direction.current = 1;
    moveBy += direction.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {[0, 1, 2, 3].map((copy) => (
          <span key={copy} className="flex shrink-0 items-center">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const VelocityMarquee = () => {
  const tLines = useTranslations('lines');

  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-bone/10 bg-ink py-8 md:py-12"
    >
      <MarqueeRow baseVelocity={-3}>
        {commercialLines.map((line) => (
          <span key={line.key} className="flex items-center">
            <span
              className={`font-display text-6xl font-semibold tracking-[-0.04em] md:text-8xl ${line.accentText}`}
            >
              {tLines(`${line.key}.title`)}
            </span>
            <span className="mx-8 text-4xl text-bone/30 md:mx-12 md:text-6xl">
              ✦
            </span>
          </span>
        ))}
      </MarqueeRow>
      <MarqueeRow baseVelocity={3}>
        {commercialLines.map((line) => (
          <span key={line.key} className="flex items-center">
            <span className="font-display text-6xl font-semibold tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(242,239,233,0.35)] md:text-8xl">
              {tLines(`${line.key}.tagline`)}
            </span>
            <span className="mx-8 text-4xl text-bone/20 md:mx-12 md:text-6xl">
              ✦
            </span>
          </span>
        ))}
      </MarqueeRow>
    </section>
  );
};

export default VelocityMarquee;

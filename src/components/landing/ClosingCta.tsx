'use client';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { MouseEvent } from 'react';

import { commercialLines } from '@/data/lines';

import { Reveal } from './motion';

const gradient = `linear-gradient(90deg, ${[
  ...commercialLines.map((line) => line.accent),
  commercialLines[0]!.accent,
].join(', ')})`;

// Button that leans toward the pointer
const MagneticButton = ({ label }: { label: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href="#contatti"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="mt-14 inline-flex size-40 flex-col items-center justify-center gap-2 rounded-full bg-bone text-center text-sm font-semibold text-ink md:size-48"
    >
      <span className="max-w-28 leading-tight">{label}</span>
      <ArrowDown className="size-5" aria-hidden />
    </motion.a>
  );
};

const ClosingCta = () => {
  const t = useTranslations('landing.closing');
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink py-32 text-center text-bone md:py-52">
      {/* Slow drifting colour field behind the headline */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-0 size-[70vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: gradient }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <div className="container-custom relative">
        <Reveal>
          <motion.h2
            className="mx-auto max-w-6xl bg-clip-text font-display text-6xl font-semibold leading-[0.95] tracking-[-0.045em] text-transparent md:text-8xl xl:text-[8.5rem]"
            style={{ backgroundImage: gradient, backgroundSize: '300% 100%' }}
            animate={
              reduceMotion
                ? undefined
                : { backgroundPosition: ['0% 50%', '100% 50%'] }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          >
            {t('title')}
          </motion.h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-bone/65 md:text-xl">
            {t('text')}
          </p>
        </Reveal>
        <MagneticButton label={t('cta')} />
        <p className="mt-16 text-xs font-medium uppercase tracking-[0.4em] text-bone/40">
          {t('signature')}
        </p>
      </div>
    </section>
  );
};

export default ClosingCta;

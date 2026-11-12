'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

import { commercialLines } from '@/data/lines';

import { easeOutExpo } from './motion';

type PreloaderProps = {
  onComplete: () => void;
};

const brand = 'CAVALLARO'.split('');
const progressGradient = `linear-gradient(90deg, ${commercialLines
  .map((line) => line.accent)
  .join(', ')})`;

// Counter 0 → 100 with the wordmark, then the curtain lifts off the page
const Preloader = ({ onComplete }: PreloaderProps) => {
  const progress = useMotionValue(0);
  const counter = useTransform(progress, (value) =>
    String(Math.round(value)).padStart(3, '0'),
  );
  const barScale = useTransform(progress, [0, 100], [0, 1]);

  // Start on the next frame: React's mount/unmount/remount check in
  // development would otherwise stop the animation and leave it stuck at 000
  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined;
    const frame = requestAnimationFrame(() => {
      controls = animate(progress, 100, {
        duration: 2.2,
        ease: [0.65, 0, 0.35, 1],
        onComplete,
      });
    });
    return () => {
      cancelAnimationFrame(frame);
      controls?.stop();
    };
  }, [onComplete, progress]);

  return (
    <motion.div
      id="preloader"
      className="fixed inset-0 z-[90] flex flex-col justify-between bg-ink p-6 text-bone md:p-12"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{
        clipPath: 'inset(0% 0% 100% 0%)',
        transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <noscript>
        <style>{'#preloader{display:none!important}'}</style>
      </noscript>
      <p className="text-xs uppercase tracking-[0.3em] text-bone/50">
        Ingegneria e Costruzioni
      </p>

      <div className="flex justify-center overflow-hidden">
        {brand.map((letter, index) => (
          <motion.span
            // eslint-disable-next-line react/no-array-index-key
            key={`${letter}-${index}`}
            className="font-display text-[15vw] font-semibold leading-none tracking-[-0.04em] md:text-[11vw]"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 1,
              ease: easeOutExpo,
              delay: 0.1 + index * 0.05,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div>
        <div className="mb-6 h-px w-full bg-bone/10">
          <motion.div
            className="h-full origin-left"
            style={{ scaleX: barScale, background: progressGradient }}
          />
        </div>
        <div className="flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-bone/50">
            Progettiamo · Realizziamo · Trasformiamo
          </p>
          <motion.p className="font-display text-6xl font-semibold tabular-nums leading-none tracking-[-0.04em] md:text-8xl">
            {counter}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;

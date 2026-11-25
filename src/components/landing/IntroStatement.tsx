'use client';

import type { MotionValue } from 'framer-motion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import { Reveal } from './motion';

type WordProps = {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
};

const Word = ({ word, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span className="inline-block" style={{ opacity, y }}>
      {word}&nbsp;
    </motion.span>
  );
};

// The statement lights up word by word as it scrolls through the viewport
const IntroStatement = () => {
  const t = useTranslations('landing.intro');
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  });
  const words = t('statement').split(' ');

  return (
    <section className="bg-ink py-32 md:py-52">
      <div className="container-custom">
        <p
          ref={ref}
          aria-label={t('statement')}
          className="max-w-6xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-bone md:text-7xl"
        >
          {words.map((word, index) => (
            <Word
              // eslint-disable-next-line react/no-array-index-key
              key={`${word}-${index}`}
              word={word}
              progress={scrollYProgress}
              range={[index / words.length, (index + 1) / words.length]}
            />
          ))}
        </p>
        <Reveal className="mt-12 grid md:grid-cols-12" delay={0.1}>
          <p className="text-lg leading-relaxed text-bone/60 md:col-span-6 md:col-start-7 md:text-xl">
            {t('body')}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default IntroStatement;

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import { commercialLines, formatPrice, lowestTier } from '@/data/lines';

import { SplitText } from './motion';

const CARD_MARKS = [
  'left-4 top-4 size-6 border-l border-t',
  'right-4 top-4 size-6 border-r border-t',
  'bottom-4 left-4 size-6 border-b border-l',
  'bottom-4 right-4 size-6 border-b border-r',
  'inset-x-10 top-1/2 h-px bg-bone/30',
  'inset-y-10 left-1/2 w-px bg-bone/30',
];

// Vertical scroll drives a horizontal track of the three lines while the
// section stays pinned to the viewport
const LinesOverview = () => {
  const t = useTranslations('landing.overview');
  const tShowcase = useTranslations('landing.showcase');
  const tLines = useTranslations('lines');
  const locale = useLocale();

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setDistance(
          Math.max(0, trackRef.current.scrollWidth - window.innerWidth),
        );
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, (value) => -value * distance);
  const progressBackground = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    commercialLines.map((line) => line.accent),
  );

  return (
    <section
      id="linee"
      ref={sectionRef}
      className="relative bg-ink"
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-stretch gap-5 px-[6vw] pt-16 md:gap-8"
        >
          {/* Intro panel */}
          <div className="flex w-[78vw] shrink-0 flex-col justify-end pb-4 md:w-[38vw]">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-bone/50 md:text-sm">
              {t('eyebrow')}
            </p>
            <SplitText
              as="h2"
              text={t('title')}
              className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-bone md:text-8xl"
            />
            <p className="mt-8 flex items-center gap-3 text-sm text-bone/50">
              <motion.span
                className="inline-block h-px w-12 bg-bone/50"
                animate={{ scaleX: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ originX: 0 }}
              />
              {t('scrollHint')}
            </p>
          </div>

          {commercialLines.map((line) => {
            const tier = lowestTier(line);
            return (
              <a
                key={line.key}
                href={`#${line.slug}`}
                data-cursor={t('discover')}
                className="group relative flex h-[68vh] w-[82vw] shrink-0 flex-col justify-between overflow-hidden rounded-[32px] p-7 md:w-[52vw] md:p-10 lg:w-[44vw]"
              >
                <Image
                  src={line.cover}
                  alt={tLines(`${line.key}.title`)}
                  fill
                  sizes="(min-width: 768px) 50vw, 85vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/10 to-ink/90" />
                {/* Registration marks and axes appear on hover */}
                {CARD_MARKS.map((mark) => (
                  <span
                    key={mark}
                    aria-hidden
                    className={`absolute scale-150 border-bone/80 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 ${mark}`}
                  />
                ))}
                <div
                  className="absolute inset-0 opacity-0 mix-blend-color transition-opacity duration-700 group-hover:opacity-40"
                  style={{ backgroundColor: line.accent }}
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className="md:text-9xl font-display text-7xl font-semibold leading-none -tracking-wider text-transparent"
                    style={{ WebkitTextStroke: `1.5px ${line.accent}` }}
                  >
                    {line.number}
                  </span>
                  <span
                    className="flex size-12 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45 md:size-14"
                    style={{
                      backgroundColor: line.accent,
                      color: line.onAccent,
                    }}
                  >
                    <ArrowUpRight className="size-6" aria-hidden />
                    <span className="sr-only">{t('discover')}</span>
                  </span>
                </div>

                <div className="relative">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-bone/80">
                    {tLines(`${line.key}.label`)}
                  </p>
                  <h3 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-bone md:text-6xl">
                    {tLines(`${line.key}.title`)}
                  </h3>
                  <p className="mt-2 font-display text-2xl text-bone/50 md:text-3xl">
                    {tShowcase('turnkey')}
                  </p>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-bone/15 pt-6">
                    <p className="max-w-sm text-sm leading-relaxed text-bone/70">
                      {tLines(`${line.key}.summary`)}
                    </p>
                    <p className="text-right">
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-bone/50">
                        {t('from')}
                      </span>
                      <span className="font-display text-3xl font-semibold tracking-tight text-bone md:text-4xl">
                        {tier
                          ? formatPrice(tier.price!, locale)
                          : t('onRequest')}
                        {tier?.unit === 'sqm' && (
                          <span className="text-base font-normal text-bone/60">
                            {tShowcase('sqm')}
                          </span>
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* Progress */}
        <div className="absolute inset-x-[6vw] bottom-8 h-px bg-bone/10">
          <motion.div
            className="h-full origin-left"
            style={{
              scaleX: scrollYProgress,
              backgroundColor: progressBackground,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LinesOverview;

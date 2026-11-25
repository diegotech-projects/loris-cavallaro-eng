'use client';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import { commercialLines } from '@/data/lines';
import { Link as LocalizedLink } from '@/i18n/navigation';

import { useIntroDone } from './LandingShell';
import { easeOutExpo } from './motion';

const SLIDE_DURATION_MS = 7000;
const CORNERS = [
  'left-4 top-4 border-l border-t md:left-8 md:top-8',
  'right-4 top-4 border-r border-t md:right-8 md:top-8',
  'bottom-4 left-4 border-b border-l md:bottom-8 md:left-8',
  'bottom-4 right-4 border-b border-r md:bottom-8 md:right-8',
];

const LandingHero = () => {
  const t = useTranslations('landing.hero');
  const tSheet = useTranslations('landing.sheet');
  const tLines = useTranslations('lines');
  const reduceMotion = useReducedMotion();
  const introDone = useIntroDone();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Autoplay: each change restarts the timer, so manual clicks reset it too
  useEffect(() => {
    if (reduceMotion || !introDone) return undefined;
    const timer = setTimeout(
      () => setActive((current) => (current + 1) % commercialLines.length),
      SLIDE_DURATION_MS,
    );
    return () => clearTimeout(timer);
  }, [active, introDone, reduceMotion]);

  // Content drifts up and fades while the image zooms as you scroll away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const line = commercialLines[active]!;
  const headline = [t('line1'), t('line2'), t('line3')];
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: { duration: 1, ease: easeOutExpo, delay },
  });

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-61px)] items-end overflow-hidden bg-ink pt-20 text-bone lg:h-[calc(100svh-69px)] lg:min-h-[640px] lg:pt-0"
    >
      {/* Background: plain crossfade, slow push-in */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ scale: imageScale }}
      >
        {/* All covers stay mounted (and preloaded) so a change only fades
            opacity; mounting a not-yet-loaded image flashed black */}
        {commercialLines.map((item, index) => (
          <motion.div
            key={item.key}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: index === active ? 1 : 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          >
            <Image
              src={item.cover}
              alt={index === active ? tLines(`${item.key}.title`) : ''}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

      {/* Registration marks */}
      {CORNERS.map((position) => (
        <motion.span
          key={position}
          aria-hidden
          className={`pointer-events-none absolute size-6 border-bone/50 md:size-10 ${position}`}
          initial={{ opacity: 0, scale: 1.6 }}
          animate={
            introDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.6 }
          }
          transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.2 }}
        />
      ))}

      <motion.div
        className="container-custom w-full pb-10 md:pb-20"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          {...enter(0.3)}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-bone/60 md:mb-8 md:text-sm"
        >
          {t('eyebrow')}
        </motion.p>

        {/* The word matching the current slide takes that line's colour */}
        <h1 className="font-display text-[13vw] font-semibold leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl xl:text-[8.5rem]">
          {headline.map((word, index) => (
            <span key={word} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{
                  y: introDone ? '0%' : '110%',
                  color:
                    index === active
                      ? commercialLines[index]!.accent
                      : 'rgba(238,233,224,0.22)',
                }}
                transition={{
                  y: {
                    duration: 1.2,
                    ease: easeOutExpo,
                    delay: 0.35 + index * 0.12,
                  },
                  color: { duration: 1.2, ease: 'easeInOut' },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div {...enter(0.9)}>
            <p className="max-w-md text-lg text-bone/70 md:text-xl">
              {t('subtitle')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
              <a
                href="#linee"
                className="rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brick hover:text-bone"
              >
                {t('primaryCta')}
              </a>
              <LocalizedLink
                href="/contact#contact-form"
                className="rounded-full border border-bone/30 px-6 py-3 text-sm font-medium text-bone transition-colors hover:border-bone"
              >
                {t('secondaryCta')}
              </LocalizedLink>
            </div>
          </motion.div>

          {/* Title block ("cartiglio") doubling as the slide navigator */}
          <motion.div
            {...enter(1.1)}
            className="w-full border border-bone/25 bg-ink/40 font-display text-[11px] uppercase tracking-[0.18em] backdrop-blur-sm lg:w-[420px]"
          >
            <dl className="grid grid-cols-[96px_1fr]">
              <dt className="border-b border-r border-bone/25 px-4 py-3 text-bone/50">
                {tSheet('sheet')}
              </dt>
              <dd className="border-b border-bone/25 px-4 py-3 tabular-nums">
                {line.number} / 0{commercialLines.length}
              </dd>
              <dt className="border-r border-bone/25 px-4 py-3 text-bone/50 sm:border-b">
                {tSheet('subject')}
              </dt>
              <dd className="relative h-[42px] overflow-hidden border-bone/25 sm:border-b">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={line.key}
                    className="absolute inset-0 px-4 py-3"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                  >
                    {tLines(`${line.key}.title`)}
                  </motion.span>
                </AnimatePresence>
              </dd>
              <dt className="hidden border-r border-bone/25 px-4 py-3 text-bone/50 sm:block">
                {tSheet('scale')}
              </dt>
              <dd className="hidden justify-between px-4 py-3 tabular-nums sm:flex">
                <span>1:100</span>
                <span className="text-bone/50">
                  {tSheet('date')} {new Date().getFullYear()}
                </span>
              </dd>
            </dl>
            <div className="grid grid-cols-3 border-t border-bone/25">
              {commercialLines.map((item, index) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`relative overflow-hidden px-4 py-3 text-left transition-colors ${
                    index > 0 ? 'border-l border-bone/25' : ''
                  } ${
                    active === index
                      ? 'text-bone'
                      : 'text-bone/40 hover:text-bone/80'
                  }`}
                  aria-label={tLines(`${item.key}.title`)}
                  aria-pressed={active === index}
                >
                  {active === index && introDone && (
                    <motion.span
                      key={`progress-${item.key}`}
                      className="absolute inset-x-0 bottom-0 h-[2px] origin-left"
                      style={{ backgroundColor: item.accent }}
                      initial={{ scaleX: reduceMotion ? 1 : 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: SLIDE_DURATION_MS / 1000,
                        ease: 'linear',
                      }}
                    />
                  )}
                  {item.number}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingHero;

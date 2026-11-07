'use client';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import { commercialLines } from '@/data/lines';
import { Link as LocalizedLink } from '@/i18n/navigation';

import { easeOutExpo } from './motion';

const SLIDE_DURATION_MS = 6500;

const LandingHero = () => {
  const t = useTranslations('landing.hero');
  const tLines = useTranslations('lines');
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Autoplay: each change restarts the timer, so manual clicks reset it too
  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = setTimeout(
      () => setActive((current) => (current + 1) % commercialLines.length),
      SLIDE_DURATION_MS,
    );
    return () => clearTimeout(timer);
  }, [active, reduceMotion]);

  // Mouse parallax on the background
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const parallaxX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const parallaxY = useSpring(pointerY, { stiffness: 60, damping: 20 });
  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * -30);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * -30);
  };

  // Content drifts up and fades while the image zooms as you scroll away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  const line = commercialLines[active]!;
  const headline = [t('line1'), t('line2'), t('line3')];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      className="relative isolate flex h-[calc(100svh-61px)] min-h-[640px] items-end overflow-hidden bg-ink text-bone lg:h-[calc(100svh-69px)]"
    >
      {/* Background carousel with a clip-path wipe between slides */}
      <motion.div
        className="absolute -inset-8 -z-10"
        style={{ x: parallaxX, y: parallaxY, scale: imageScale }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={line.key}
            className="absolute inset-0"
            initial={{ clipPath: 'inset(0% 0% 0% 100%)', zIndex: 2 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', zIndex: 2 }}
            exit={{ zIndex: 1, transition: { duration: 1.3 } }}
            transition={{ duration: 1.3, ease: easeOutExpo }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.25 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 8, ease: 'easeOut' }}
            >
              <Image
                src={line.cover}
                alt={tLines(`${line.key}.title`)}
                fill
                priority={active === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <motion.div
        className="container-custom w-full pb-12 md:pb-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo }}
          className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-bone/70 md:text-sm"
        >
          <motion.span
            className="inline-block size-2 rounded-full"
            animate={{ backgroundColor: line.accent }}
            transition={{ duration: 0.8 }}
          />
          {t('eyebrow')}
        </motion.p>

        {/* The word matching the current slide lights up in that line's colour */}
        <h1 className="font-display text-[13vw] font-semibold leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl xl:text-[8.5rem]">
          {headline.map((word, index) => (
            <span key={word} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{
                  y: '0%',
                  color:
                    index === active
                      ? commercialLines[index]!.accent
                      : 'rgba(242, 239, 233, 0.28)',
                }}
                transition={{
                  y: {
                    duration: 1.2,
                    ease: easeOutExpo,
                    delay: 0.1 + index * 0.1,
                  },
                  color: { duration: 0.9, ease: 'easeOut' },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.7 }}
          >
            <p className="max-w-md text-lg text-bone/75 md:text-xl">
              {t('subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#linee"
                className="rounded-full px-6 py-3 text-sm font-semibold text-ink"
                animate={{ backgroundColor: line.accent }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('primaryCta')}
              </motion.a>
              <LocalizedLink
                href="/contact#contact-form"
                className="rounded-full border border-bone/30 px-6 py-3 text-sm font-medium text-bone backdrop-blur-md transition-colors hover:border-bone hover:bg-bone hover:text-ink"
              >
                {t('secondaryCta')}
              </LocalizedLink>
            </div>
          </motion.div>

          {/* Slide navigator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full lg:w-[480px]"
          >
            <div className="mb-5 flex items-end justify-between gap-6">
              <div className="h-[3.2rem] overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={line.key}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.6, ease: easeOutExpo }}
                    className="font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl"
                  >
                    {tLines(`${line.key}.title`)}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p className="font-display text-sm tabular-nums text-bone/50">
                <span className="text-bone">{line.number}</span> / 0
                {commercialLines.length}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {commercialLines.map((item, index) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group py-3 text-left"
                  aria-label={tLines(`${item.key}.title`)}
                  aria-pressed={active === index}
                >
                  <span className="relative block h-[3px] overflow-hidden rounded-full bg-bone/15">
                    {active === index && (
                      <motion.span
                        key={`progress-${item.key}`}
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ backgroundColor: item.accent }}
                        initial={{ width: reduceMotion ? '100%' : '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                          duration: SLIDE_DURATION_MS / 1000,
                          ease: 'linear',
                        }}
                      />
                    )}
                  </span>
                  <span
                    className={`mt-3 block text-[10px] uppercase tracking-[0.22em] transition-colors md:text-[11px] ${
                      active === index
                        ? 'text-bone'
                        : 'text-bone/40 group-hover:text-bone/80'
                    }`}
                  >
                    {tLines(`${item.key}.label`)}
                  </span>
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

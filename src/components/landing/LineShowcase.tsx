'use client';

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowRight, MoveHorizontal } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import type { MouseEvent } from 'react';
import { useEffect, useRef } from 'react';

import type { CommercialLine } from '@/data/lines';
import { formatPrice, lowestTier } from '@/data/lines';
import { Link as LocalizedLink } from '@/i18n/navigation';

import { Reveal, SplitText } from './motion';

type LineProps = {
  line: CommercialLine;
};

// Cover grows from an inset card to full-bleed as it scrolls into view
const ScrollCover = ({ line }: LineProps) => {
  const tShowcase = useTranslations('landing.showcase');
  const t = useTranslations(`lines.${line.key}`);
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.78, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-12%', '0%']);
  const startingTier = lowestTier(line);

  return (
    <div ref={ref} className="relative h-[80vh] md:h-screen">
      <motion.div
        className="relative size-full overflow-hidden"
        style={{ scale, borderRadius: radius }}
      >
        <motion.div
          className="absolute inset-0 scale-125"
          style={{ y: imageY }}
        >
          <Image
            src={line.cover}
            alt={t('title')}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        {startingTier && (
          <div className="absolute bottom-6 left-6 rounded-3xl border border-bone/15 bg-ink/50 px-6 py-5 backdrop-blur-xl md:bottom-12 md:left-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-bone/60">
              {tShowcase('from')}
            </p>
            <p
              className={`font-display text-3xl font-semibold tracking-tight md:text-5xl ${line.accentText}`}
            >
              {formatPrice(startingTier.price!, locale)}
              {startingTier.unit === 'sqm' && (
                <span className="text-lg font-normal text-bone/60">
                  {tShowcase('sqm')}
                </span>
              )}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// Drag-to-scroll gallery
const DragGallery = ({ line }: LineProps) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const tShowcase = useTranslations('landing.showcase');

  return (
    <div className="mt-20 md:mt-32">
      <div className="container-custom mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bone/50">
        <MoveHorizontal className={`size-4 ${line.accentText}`} aria-hidden />
        {tShowcase('drag')}
      </div>
      <div ref={constraintsRef} className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.08}
          className="flex w-max cursor-grab gap-4 px-[6vw] active:cursor-grabbing md:gap-6"
        >
          {line.gallery.map((src, index) => (
            <motion.div
              key={src}
              className="relative aspect-[4/5] w-[72vw] shrink-0 overflow-hidden rounded-[28px] md:w-[34vw] lg:w-[28vw]"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 0.98 }}
            >
              <Image
                src={src}
                alt=""
                fill
                draggable={false}
                sizes="(min-width: 1024px) 28vw, (min-width: 768px) 34vw, 72vw"
                className="pointer-events-none select-none object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

type SpotlightCardProps = {
  index: number;
  text: string;
  accent: string;
  className?: string;
};

// Card with a coloured glow that follows the pointer
const SpotlightCard = ({
  index,
  text,
  accent,
  className,
}: SpotlightCardProps) => {
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      '--x',
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      '--y',
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <Reveal delay={(index % 4) * 0.07} className={className}>
      <div
        onMouseMove={handleMove}
        className="group relative flex h-full min-h-[170px] flex-col justify-between gap-10 overflow-hidden rounded-[24px] border border-bone/10 bg-bone/[0.03] p-6 transition-colors duration-500 hover:border-bone/25 md:min-h-[210px] md:p-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(320px circle at var(--x) var(--y), ${accent}33, transparent 70%)`,
          }}
        />
        <span
          className="relative font-display text-sm font-medium tabular-nums"
          style={{ color: accent }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="relative font-display text-xl font-medium leading-snug tracking-tight text-bone md:text-2xl">
          {text}
        </p>
      </div>
    </Reveal>
  );
};

type CountUpProps = {
  value: number;
  locale: string;
};

// Price that counts up from zero the first time it is seen
const CountUp = ({ value, locale }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  // Server HTML carries the real price (SEO, no-JS); the client rewinds it to
  // zero while it is still hidden, then counts up once it scrolls into view
  const count = useMotionValue(value);
  const text = useTransform(count, (latest) => formatPrice(latest, locale));

  useEffect(() => {
    if (!reduceMotion && !inView) count.set(0);
    // Only on mount: later inView changes are handled below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inView || reduceMotion) return undefined;
    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [count, inView, reduceMotion, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
};

const LineShowcase = ({ line }: LineProps) => {
  const t = useTranslations(`lines.${line.key}`);
  const tShowcase = useTranslations('landing.showcase');
  const locale = useLocale();
  const solutionKeys = Array.from(
    { length: line.solutionCount },
    (_, index) => `s${index + 1}`,
  );
  // Keep the cards grid free of orphans: 6 → 3×2, 7 → wide first card + 6, 8 → 4×2
  const useThreeColumns = line.solutionCount % 3 === 0;
  const spanFirstCard = !useThreeColumns && line.solutionCount % 2 === 1;

  return (
    <section
      id={line.slug}
      className="relative bg-ink py-24 text-bone md:py-40"
    >
      {/* Title */}
      <div className="container-custom mb-16 md:mb-24">
        <Reveal>
          <p
            className={`mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] md:text-sm ${line.accentText}`}
          >
            <span
              className={`inline-block size-2 rounded-full ${line.accentBg}`}
            />
            {line.number} — {t('label')}
          </p>
        </Reveal>
        <SplitText
          as="h2"
          text={t('title')}
          className="block font-display text-6xl font-semibold leading-[0.92] tracking-[-0.045em] md:text-8xl xl:text-[9rem]"
        />
        <SplitText
          text={`${tShowcase('turnkey')}.`}
          delay={0.15}
          className="block font-display text-6xl font-semibold leading-[0.92] tracking-[-0.045em] text-bone/25 md:text-8xl xl:text-[9rem]"
        />
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl text-xl text-bone/70 md:text-2xl">
            {t('tagline')}
          </p>
        </Reveal>
      </div>

      <ScrollCover line={line} />

      {/* Story */}
      <div className="container-custom mt-24 grid gap-10 md:mt-36 lg:grid-cols-12 lg:gap-16">
        <SplitText
          as="p"
          text={t('lead')}
          stagger={0.025}
          className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-5xl lg:col-span-7"
        />
        <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9 lg:pt-3">
          <p className="text-lg leading-relaxed text-bone/60">{t('body')}</p>
        </Reveal>
      </div>

      <DragGallery line={line} />

      {/* Solutions */}
      <div className="container-custom mt-24 md:mt-40">
        <SplitText
          as="h3"
          text={t('solutionsTitle')}
          className="mb-12 block font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl"
        />
        <div
          className={`grid gap-4 sm:grid-cols-2 ${
            useThreeColumns ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
          }`}
        >
          {solutionKeys.map((key, index) => (
            <SpotlightCard
              key={key}
              index={index}
              text={t(`solutions.${key}`)}
              accent={line.accent}
              className={
                spanFirstCard && index === 0 ? 'sm:col-span-2' : undefined
              }
            />
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="container-custom mt-24 md:mt-40">
        <div className="mx-auto max-w-3xl text-center">
          <SplitText
            as="h3"
            text={t('pricingTitle')}
            className="block font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-bone/60">{t('pricingText')}</p>
          </Reveal>
        </div>

        <div
          className={`mx-auto mt-14 grid gap-5 ${
            line.tiers.length > 1 ? 'max-w-5xl md:grid-cols-2' : 'max-w-2xl'
          }`}
        >
          {line.tiers.map((tier, index) => (
            <Reveal key={tier.key} delay={index * 0.12}>
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[32px] border p-8 md:p-12"
                style={
                  tier.highlighted
                    ? {
                        borderColor: `${line.accent}66`,
                        background: `radial-gradient(120% 80% at 100% 0%, ${line.accent}2e, transparent 60%), #111113`,
                        boxShadow: `0 40px 120px -40px ${line.accent}55`,
                      }
                    : {
                        borderColor: 'rgba(242, 239, 233, 0.1)',
                        background: 'rgba(242, 239, 233, 0.03)',
                      }
                }
              >
                <p
                  className="text-xs font-medium uppercase tracking-[0.3em]"
                  style={{
                    color: tier.highlighted
                      ? line.accent
                      : 'rgba(242,239,233,0.6)',
                  }}
                >
                  {t(`tiers.${tier.key}.name`)}
                </p>
                <p className="mt-10 text-[10px] uppercase tracking-[0.25em] text-bone/50">
                  {tier.price === null ? ' ' : tShowcase('from')}
                </p>
                <p className="mt-1 font-display text-6xl font-semibold tracking-[-0.04em] md:text-7xl">
                  {tier.price === null ? (
                    tShowcase('onRequest')
                  ) : (
                    <CountUp value={tier.price} locale={locale} />
                  )}
                  {tier.unit === 'sqm' && (
                    <span className="text-2xl font-normal text-bone/50">
                      {tShowcase('sqm')}
                    </span>
                  )}
                </p>
                <p className="mt-8 leading-relaxed text-bone/65">
                  {t(`tiers.${tier.key}.description`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-8 text-center">
          <p className="font-display text-2xl font-medium tracking-tight md:text-3xl">
            {t('closingLine')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <LocalizedLink
              href={`/contact?linea=${line.key}#contact-form`}
              className={`group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-ink ${line.accentBg}`}
            >
              {t('cta')}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </LocalizedLink>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default LineShowcase;

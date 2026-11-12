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
import { useEffect, useRef } from 'react';

import type { CommercialLine, LineTier } from '@/data/lines';
import { formatPrice, lowestTier } from '@/data/lines';
import { Link as LocalizedLink } from '@/i18n/navigation';

import DimensionDivider from './DimensionDivider';
import { Reveal, SplitText } from './motion';
import SolutionsPlate from './SolutionsPlate';

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
            <p className="font-display text-3xl font-semibold tracking-tight text-bone md:text-5xl">
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
  const tLines = useTranslations('lines');

  return (
    <div className="mt-20 md:mt-32">
      <div className="container-custom mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bone/50">
        <MoveHorizontal className={`size-4 ${line.accentText}`} aria-hidden />
        {tShowcase('drag')}
      </div>
      <div
        ref={constraintsRef}
        className="overflow-hidden"
        data-cursor={tShowcase('dragShort')}
      >
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
                alt={`${tLines(`${line.key}.title`)} ${index + 1}`}
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

type PriceSheetProps = {
  tier: LineTier;
  index: number;
  line: CommercialLine;
  name: string;
  description: string;
  locale: string;
};

// One column of the price schedule: title-block header, price, a dimension
// line that draws under it, description
const PriceSheet = ({
  tier,
  index,
  line,
  name,
  description,
  locale,
}: PriceSheetProps) => {
  const tShowcase = useTranslations('landing.showcase');
  const letter = String.fromCharCode(65 + index);

  return (
    <div
      className={`group relative flex flex-col ${
        index > 0 ? 'border-t border-bone/15 md:border-l md:border-t-0' : ''
      }`}
    >
      {/* Header row */}
      <div className="relative flex items-center gap-4 border-b border-bone/15 px-6 py-4 md:px-10">
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-full border font-display text-xs font-semibold"
          style={{
            borderColor: tier.highlighted
              ? line.accent
              : 'rgba(238,233,224,0.4)',
            color: tier.highlighted ? line.accent : 'rgba(238,233,224,0.7)',
          }}
        >
          {letter}
        </span>
        <span className="flex-1 font-display text-xs font-medium uppercase tracking-[0.3em] text-bone">
          {name}
        </span>
        <span className="font-display text-[11px] tabular-nums tracking-[0.15em] text-bone/40">
          {line.number}.P{index + 1}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col px-6 py-10 md:px-10 md:py-14">
        <p className="text-[10px] uppercase tracking-[0.25em] text-bone/50">
          {tier.price === null ? '\u00A0' : tShowcase('from')}
        </p>
        <p className="mt-2 font-display text-6xl font-semibold tracking-[-0.045em] md:text-8xl">
          {tier.price === null ? (
            tShowcase('onRequest')
          ) : (
            <CountUp value={tier.price} locale={locale} />
          )}
          {tier.unit === 'sqm' && (
            <span className="ml-2 text-xl font-normal tracking-normal text-bone/50 md:text-2xl">
              {tShowcase('sqm')}
            </span>
          )}
        </p>

        {/* Dimension line */}
        <div aria-hidden className="relative mt-8 h-4">
          <span className="absolute left-0 top-0 h-4 w-px bg-bone/40" />
          <span className="absolute right-0 top-0 h-4 w-px bg-bone/40" />
          <motion.span
            className="absolute inset-x-0 top-1/2 h-px origin-left"
            style={{
              backgroundColor: tier.highlighted
                ? line.accent
                : 'rgba(238,233,224,0.35)',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2 + index * 0.15,
            }}
          />
          <span className="absolute left-0 top-1/2 h-px w-3 -translate-x-1/2 -rotate-45 bg-bone/60" />
          <span className="absolute right-0 top-1/2 h-px w-3 translate-x-1/2 -rotate-45 bg-bone/60" />
        </div>

        <p className="mt-8 max-w-md leading-relaxed text-bone/65">
          {description}
        </p>
      </div>
    </div>
  );
};

type LineShowcaseProps = LineProps & {
  // On the line's own page the title is the page <h1> and the divider is
  // replaced by the breadcrumb
  asPage?: boolean;
};

const LineShowcase = ({ line, asPage = false }: LineShowcaseProps) => {
  const t = useTranslations(`lines.${line.key}`);
  const tSheet = useTranslations('landing.sheet');
  const tShowcase = useTranslations('landing.showcase');
  const locale = useLocale();
  const solutionKeys = Array.from(
    { length: line.solutionCount },
    (_, index) => `s${index + 1}`,
  );

  return (
    <section
      id={line.slug}
      className="relative bg-ink pb-24 pt-10 text-bone md:pb-40 md:pt-16"
    >
      {!asPage && (
        <DimensionDivider
          label={`${tSheet('short')} ${line.number} · ${t('title')}`}
        />
      )}

      {/* Title */}
      <div className="container-custom mb-16 md:mb-24">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-bone/70 md:text-sm">
            <span
              className={`inline-block size-2 rounded-full ${line.accentBg}`}
            />
            {tSheet('short')} {line.number} · {t('label')}
          </p>
        </Reveal>
        <SplitText
          as={asPage ? 'h1' : 'h2'}
          immediate={asPage}
          text={t('title')}
          className="block font-display text-[11vw] font-semibold leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-8xl xl:text-[9rem]"
        />
        <SplitText
          text={`${tShowcase('turnkey')}.`}
          delay={0.15}
          className="block font-display text-[11vw] font-semibold leading-[0.92] tracking-[-0.045em] text-bone/25 sm:text-6xl md:text-8xl xl:text-[9rem]"
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

      <SolutionsPlate
        line={line}
        items={solutionKeys.map((key) => t(`solutions.${key}`))}
      />

      {/* Pricing */}
      <div className="container-custom mt-24 md:mt-40">
        <div className="grid gap-6 border-b border-bone/15 pb-8 lg:grid-cols-12 lg:items-end">
          <SplitText
            as="h3"
            text={t('pricingTitle')}
            className="block font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl lg:col-span-8"
          />
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="text-lg text-bone/60">{t('pricingText')}</p>
          </Reveal>
        </div>

        {/* Price schedule drawn as a specification sheet */}
        <div
          className={`grid border-x border-b border-bone/15 ${
            line.tiers.length > 1 ? 'md:grid-cols-2' : ''
          }`}
        >
          {line.tiers.map((tier, index) => (
            <PriceSheet
              key={tier.key}
              tier={tier}
              index={index}
              line={line}
              name={t(`tiers.${tier.key}.name`)}
              description={t(`tiers.${tier.key}.description`)}
              locale={locale}
            />
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-8 text-center">
          <p className="font-display text-2xl font-medium tracking-tight md:text-3xl">
            {t('closingLine')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <LocalizedLink
              href={`/contact?linea=${line.key}#contact-form`}
              className={`group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold ${line.accentBg}`}
              style={{ color: line.onAccent }}
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

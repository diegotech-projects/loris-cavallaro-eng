'use client';

import type { MotionValue } from 'framer-motion';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { useRef } from 'react';

import { easeOutExpo, Reveal, SplitText } from '@/components/landing/motion';

const CORNERS = [
  'left-0 top-0 border-l border-t origin-top-left',
  'right-0 top-0 border-r border-t origin-top-right',
  'bottom-0 left-0 border-b border-l origin-bottom-left',
  'bottom-0 right-0 border-b border-r origin-bottom-right',
];

type PortraitProps = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
};

// Portrait that unveils from the bottom, with registration marks and a slow
// parallax drift while the page scrolls
export const RevealPortrait = ({
  src,
  alt,
  caption,
  priority,
  className = 'aspect-[4/5]',
}: PortraitProps) => {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  // The in-view trigger sits on the unclipped <figure>: a fully clipped
  // element never counts as intersecting, so it would never reveal itself
  return (
    <motion.figure
      ref={ref}
      className="relative p-3 md:p-4"
      initial={reduceMotion ? false : 'hidden'}
      whileInView="shown"
      viewport={{ once: true, margin: '-60px' }}
    >
      {CORNERS.map((corner, index) => (
        <motion.span
          key={corner}
          aria-hidden
          className={`absolute size-6 border-bone/60 ${corner}`}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            shown: { scale: 1, opacity: 1 },
          }}
          transition={{
            duration: 0.8,
            ease: easeOutExpo,
            delay: 0.6 + index * 0.08,
          }}
        />
      ))}
      <motion.div
        className={`relative overflow-hidden bg-bone/5 ${className}`}
        variants={{
          hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
          shown: { clipPath: 'inset(0% 0% 0% 0%)' },
        }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="absolute inset-x-0 inset-y-[-10%]"
          style={reduceMotion ? undefined : { y }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top"
          />
        </motion.div>
      </motion.div>
      {caption && (
        <figcaption className="mt-3 flex justify-between font-display text-[10px] uppercase tracking-[0.22em] text-bone/45">
          <span>{caption}</span>
          <span>1:1</span>
        </figcaption>
      )}
    </motion.figure>
  );
};

type WordProps = {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
};

const Word = ({ word, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span className="inline-block" style={{ opacity }}>
      {word}&nbsp;
    </motion.span>
  );
};

type ScrollStatementProps = {
  text: string;
  eyebrow: string;
};

// Big quote that lights up word by word as it crosses the viewport
export const ScrollStatement = ({ text, eyebrow }: ScrollStatementProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  });
  const words = text.split(' ');

  return (
    <div className="container-custom">
      <p className="mb-10 flex items-center gap-4 font-display text-xs uppercase tracking-[0.3em] text-bone/45">
        <span className="font-display text-5xl leading-none text-brick">
          &ldquo;
        </span>
        {eyebrow}
      </p>
      <p
        ref={ref}
        aria-label={text}
        className="max-w-6xl font-display text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-bone md:text-6xl"
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
    </div>
  );
};

type TimelineItemProps = {
  text: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

const TimelineItem = ({ text, index, total, progress }: TimelineItemProps) => {
  const reached = index / Math.max(1, total - 1);
  const start = Math.max(0, reached - 0.08);
  const textOpacity = useTransform(progress, [start, reached], [0.35, 1]);
  const nodeBackground = useTransform(
    progress,
    [start, reached],
    ['#0e0d0c', '#b4452b'],
  );
  const nodeBorder = useTransform(
    progress,
    [start, reached],
    ['rgba(238,233,224,0.3)', '#b4452b'],
  );

  return (
    <li className="relative flex items-center gap-6 py-5">
      <motion.span
        className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border font-display text-xs font-semibold tabular-nums text-bone"
        style={{ backgroundColor: nodeBackground, borderColor: nodeBorder }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.span>
      <motion.span
        className="font-display text-xl font-medium leading-snug tracking-[-0.01em] md:text-2xl"
        style={{ opacity: textOpacity }}
      >
        {text}
      </motion.span>
    </li>
  );
};

type TimelineProps = {
  items: string[];
};

// Qualifications on a vertical path: a brick line traces down with the
// scroll and each numbered node lights up as it is reached
export const QualificationsTimeline = ({ items }: TimelineProps) => {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.55'],
  });

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden className="absolute inset-y-5 left-5 w-px bg-bone/15" />
      <motion.span
        aria-hidden
        className="absolute inset-y-5 left-5 w-px origin-top bg-brick"
        style={{ scaleY: scrollYProgress }}
      />
      {items.map((item, index) => (
        <TimelineItem
          key={item}
          text={item}
          index={index}
          total={items.length}
          progress={scrollYProgress}
        />
      ))}
    </ol>
  );
};

// ---- Competency icons: line drawings that trace themselves ----
const ICONS: Record<string, string[]> = {
  buildingDesign: [
    'M12 56 V22 L32 8 L52 22 V56 Z',
    'M26 56 V42 H38 V56',
    'M20 30 H28 M36 30 H44 M20 36 H28 M36 36 H44',
  ],
  sustainability: [
    'M22 14 a8 8 0 1 0 0.1 0',
    'M22 4 V8 M22 30 V34 M8 22 H12 M32 22 H36 M12 12 L15 15 M29 29 L32 32',
    'M28 56 C28 38 42 28 56 28 C56 44 46 56 28 56 Z M28 56 L46 38',
  ],
  safety: [
    'M10 46 H54',
    'M14 46 C14 30 22 18 32 18 C42 18 50 30 50 46',
    'M32 18 V30 M24 22 L27 32 M40 22 L37 32 M14 52 H50',
  ],
  tenders: [
    'M16 8 H40 L50 18 V56 H16 Z M40 8 V18 H50',
    'M22 28 H44 M22 35 H44 M22 42 H32',
    'M42 48 a6 6 0 1 0 0.1 0',
  ],
  urbanPlanning: [
    'M8 16 L24 10 L40 16 L56 10 V48 L40 54 L24 48 L8 54 Z',
    'M24 10 V48 M40 16 V54',
    'M14 30 L20 26 M44 36 L50 32',
  ],
  consulting: [
    'M32 8 a3 3 0 1 0 0.1 0',
    'M32 14 L18 56 M32 14 L46 56',
    'M23 42 H41',
  ],
};

const CompetencyIcon = ({ name }: { name: string }) => (
  <svg
    viewBox="0 0 64 64"
    className="size-14 text-bone/70 transition-colors duration-500 group-hover:text-brick"
    aria-hidden
  >
    {(ICONS[name] ?? []).map((d, index) => (
      <motion.path
        key={d}
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 1.2,
          ease: [0.65, 0, 0.35, 1],
          delay: 0.2 + index * 0.25,
        }}
      />
    ))}
  </svg>
);

type Competency = {
  key: string;
  title: string;
  description: string;
};

export const CompetencyGrid = ({ items }: { items: Competency[] }) => (
  <div className="grid gap-px border border-bone/15 bg-bone/15 md:grid-cols-2 lg:grid-cols-3">
    {items.map((item, index) => (
      <Reveal
        key={item.key}
        delay={(index % 3) * 0.08}
        className="group flex min-h-[300px] flex-col justify-between gap-10 bg-ink p-6 transition-colors duration-500 hover:bg-[#151412] md:p-8"
      >
        <div className="flex items-start justify-between">
          <CompetencyIcon name={item.key} />
          <span className="font-display text-xs tabular-nums tracking-[0.2em] text-bone/35 transition-colors group-hover:text-brick">
            A.03.{String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">
            {item.title}
          </h3>
          <p className="mt-3 leading-relaxed text-bone/60">
            {item.description}
          </p>
        </div>
      </Reveal>
    ))}
  </div>
);

type AboutHeroProps = {
  sheet: string;
  title: string;
  subtitle: string;
  portrait: StaticImageData;
  name: string;
  role: string;
  location: string;
  labels: { name: string; role: string; location: string };
};

export const AboutHero = ({
  sheet,
  title,
  subtitle,
  portrait,
  name,
  role,
  location,
  labels,
}: AboutHeroProps) => (
  <section className="relative overflow-hidden border-b border-bone/10 bg-ink pb-16 pt-14 text-bone md:pb-24 md:pt-20">
    <div className="container-custom grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
      <div className="lg:col-span-7">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-bone/55 md:text-sm">
            <span className="inline-block size-2 rounded-full bg-brick" />
            {sheet}
          </p>
        </Reveal>
        <SplitText
          as="h1"
          text={title}
          immediate
          delay={0.1}
          className="block font-display text-[15vw] font-semibold leading-[0.88] tracking-[-0.055em] sm:text-7xl md:text-8xl xl:text-[10rem]"
        />
        <Reveal delay={0.3}>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-bone/65 md:text-xl">
            {subtitle}
          </p>
        </Reveal>

        {/* Title block */}
        <Reveal delay={0.45}>
          <dl className="mt-12 grid border border-bone/20 font-display text-[11px] uppercase tracking-[0.18em] sm:grid-cols-3">
            {[
              [labels.name, name],
              [labels.role, role],
              [labels.location, location],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`px-4 py-3 ${index > 0 ? 'border-t border-bone/20 sm:border-l sm:border-t-0' : ''}`}
              >
                <dt className="text-bone/45">{label}</dt>
                <dd className="mt-1 normal-case tracking-normal text-bone">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
      <div className="lg:col-span-5">
        <RevealPortrait src={portrait} alt={name} caption={role} priority />
      </div>
    </div>
  </section>
);

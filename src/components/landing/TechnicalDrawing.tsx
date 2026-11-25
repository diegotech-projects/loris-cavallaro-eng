'use client';

import type { MotionValue } from 'framer-motion';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

import { commercialLines } from '@/data/lines';

import { SplitText } from './motion';

const INK = '#eee9e0';
const CONCRETE = '#8c8781';
const SOLAR = commercialLines[0]!.accent;
const DIMENSION = commercialLines[2]!.accent;

type Range = [number, number];

type DrawProps = {
  d: string;
  progress: MotionValue<number>;
  range: Range;
  stroke?: string;
  width?: number;
  opacity?: number;
};

// A single SVG path that draws itself while `progress` moves through `range`
const Draw = ({
  d,
  progress,
  range,
  stroke = INK,
  width = 1.4,
  opacity = 1,
}: DrawProps) => {
  const pathLength = useTransform(progress, range, [0, 1]);
  // Hide the dot a zero-length stroke would leave behind
  const visible = useTransform(
    progress,
    [range[0], range[0] + 0.005],
    [0, opacity],
  );

  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      style={{ pathLength, opacity: visible }}
    />
  );
};

type FadeTextProps = {
  progress: MotionValue<number>;
  range: Range;
  children: string;
  x: number;
  y: number;
  anchor?: 'start' | 'middle' | 'end';
  rotate?: number;
  fill?: string;
  size?: number;
};

const FadeText = ({
  progress,
  range,
  children,
  x,
  y,
  anchor = 'start',
  rotate,
  fill = CONCRETE,
  size = 13,
}: FadeTextProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={fill}
      fontSize={size}
      letterSpacing="0.12em"
      className="font-display uppercase"
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
      style={{ opacity }}
    >
      {children}
    </motion.text>
  );
};

// ---- Geometry of the elevation (viewBox 0 0 1000 620) ----
const AXES = [
  { x: 180, label: 'A' },
  { x: 470, label: 'B' },
  { x: 760, label: 'C' },
];
const GROUND_HATCH = Array.from(
  { length: 30 },
  (_, i) => `M${70 + i * 30} 500 l-14 14`,
).join(' ');
const STRUCTURE = ['M180 500 V340 H700 V500', 'M240 340 V200 H780 V340 H700'];
const ROOF = 'M220 200 H800';
const WINDOWS = [
  'M210 500 V372 H420 V500',
  'M450 500 V372 H670 V500',
  'M315 372 V500',
  'M560 372 V500',
  'M280 318 V228 H460 V318 Z',
  'M500 318 V228 H750 V318 Z',
  'M625 228 V318',
];
const PERGOLA = [
  'M700 420 H880',
  'M880 420 V500',
  Array.from({ length: 8 }, (_, i) => `M${716 + i * 20} 413 V427`).join(' '),
];
const PANELS = Array.from({ length: 8 }, (_, i) => {
  const x = 250 + i * 66;
  return `M${x} 196 L${x + 12} 168 H${x + 56} L${x + 44} 196 Z`;
});
const DIMENSIONS = [
  // Horizontal chain under the ground line
  'M180 506 V562 M700 506 V562 M880 506 V562',
  'M180 555 H880',
  'M174 561 L186 549 M694 561 L706 549 M874 561 L886 549',
  // Overall height on the right
  'M806 200 H938 M886 500 H938',
  'M930 500 V200',
  'M924 506 L936 494 M924 206 L936 194',
];
const LEVELS = [500, 340, 200].map(
  (y) => `M60 ${y} H160 M100 ${y} L110 ${y - 12} L120 ${y} Z`,
);

const steps = ['survey', 'design', 'calculation', 'build'] as const;

const TechnicalDrawing = () => {
  const t = useTranslations('landing.drawing');
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: progress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const [step, setStep] = useState(0);
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(progress, 'change', (value) => {
    setStep(Math.min(steps.length - 1, Math.floor(value * steps.length)));
    setPercent(Math.round(value * 100));
  });

  const gridOpacity = useTransform(progress, [0, 0.08], [0, 1]);

  return (
    <section ref={sectionRef} className="relative h-[320vh] bg-ink">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-custom grid w-full items-center gap-10 pt-16 lg:grid-cols-12">
          {/* Copy + method steps */}
          <div className="lg:col-span-4">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-bone/50 md:text-sm">
              {t('eyebrow')}
            </p>
            <SplitText
              as="h2"
              text={t('title')}
              className="block font-display text-4xl font-semibold leading-none tracking-[-0.035em] text-bone md:text-6xl"
            />
            <p className="mt-6 hidden max-w-sm leading-relaxed text-bone/60 md:block">
              {t('text')}
            </p>
            <ol className="mt-8 grid grid-cols-4 gap-2 lg:mt-12 lg:grid-cols-1 lg:gap-0">
              {steps.map((key, index) => (
                <li
                  key={key}
                  className={`flex flex-col gap-1 border-t py-3 transition-colors duration-500 lg:flex-row lg:items-baseline lg:gap-5 lg:py-4 ${
                    index === step
                      ? 'border-brick text-bone'
                      : 'border-bone/10 text-bone/30'
                  }`}
                >
                  <span className="font-display text-xs tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-sm font-medium tracking-tight md:text-xl">
                    {t(`steps.${key}`)}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Drawing sheet */}
          <div className="relative lg:col-span-8">
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-sm border border-bone/10"
              style={{ opacity: gridOpacity }}
            />
            <svg
              viewBox="0 0 1000 620"
              className="relative w-full"
              role="img"
              aria-label={t('sheet')}
            >
              {/* Structural axes */}
              {AXES.map((axis) => (
                <g key={axis.label}>
                  <Draw
                    d={`M${axis.x} 76 V570`}
                    progress={progress}
                    range={[0.02, 0.16]}
                    stroke={CONCRETE}
                    width={0.8}
                    opacity={0.5}
                  />
                  <Draw
                    d={`M${axis.x - 16} 60 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0`}
                    progress={progress}
                    range={[0.04, 0.14]}
                    stroke={CONCRETE}
                    width={1}
                  />
                  <FadeText
                    progress={progress}
                    range={[0.1, 0.16]}
                    x={axis.x}
                    y={65}
                    anchor="middle"
                    size={14}
                  >
                    {axis.label}
                  </FadeText>
                </g>
              ))}

              {/* Ground */}
              <Draw
                d="M60 500 H940"
                progress={progress}
                range={[0.08, 0.2]}
                width={2}
              />
              <Draw
                d={GROUND_HATCH}
                progress={progress}
                range={[0.12, 0.24]}
                stroke={CONCRETE}
                width={0.8}
              />

              {/* Structure */}
              {STRUCTURE.map((d) => (
                <Draw
                  key={d}
                  d={d}
                  progress={progress}
                  range={[0.16, 0.38]}
                  width={2}
                />
              ))}
              <Draw d={ROOF} progress={progress} range={[0.3, 0.4]} width={3} />

              {/* Openings */}
              {WINDOWS.map((d, index) => (
                <Draw
                  key={d}
                  d={d}
                  progress={progress}
                  range={[0.36 + index * 0.02, 0.5 + index * 0.02]}
                  width={1.2}
                  opacity={0.85}
                />
              ))}
              {PERGOLA.map((d) => (
                <Draw
                  key={d}
                  d={d}
                  progress={progress}
                  range={[0.46, 0.58]}
                  width={1.2}
                />
              ))}

              {/* Solar array */}
              {PANELS.map((d, index) => (
                <Draw
                  key={d}
                  d={d}
                  progress={progress}
                  range={[0.56 + index * 0.012, 0.64 + index * 0.012]}
                  stroke={SOLAR}
                  width={1.6}
                />
              ))}

              {/* Dimensions */}
              {DIMENSIONS.map((d) => (
                <Draw
                  key={d}
                  d={d}
                  progress={progress}
                  range={[0.68, 0.82]}
                  stroke={DIMENSION}
                  width={1}
                />
              ))}
              <FadeText
                progress={progress}
                range={[0.78, 0.84]}
                x={440}
                y={546}
                anchor="middle"
                fill={DIMENSION}
              >
                12.40
              </FadeText>
              <FadeText
                progress={progress}
                range={[0.78, 0.84]}
                x={790}
                y={546}
                anchor="middle"
                fill={DIMENSION}
              >
                4.50
              </FadeText>
              <FadeText
                progress={progress}
                range={[0.78, 0.84]}
                x={958}
                y={350}
                anchor="middle"
                rotate={-90}
                fill={DIMENSION}
              >
                6.40
              </FadeText>

              {/* Levels */}
              {LEVELS.map((d) => (
                <Draw
                  key={d}
                  d={d}
                  progress={progress}
                  range={[0.72, 0.86]}
                  stroke={CONCRETE}
                  width={1}
                />
              ))}
              {[
                { y: 500, label: '±0.00' },
                { y: 340, label: '+3.20' },
                { y: 200, label: '+6.40' },
              ].map((level) => (
                <FadeText
                  key={level.label}
                  progress={progress}
                  range={[0.82, 0.88]}
                  x={60}
                  y={level.y - 8}
                >
                  {level.label}
                </FadeText>
              ))}

              {/* Sheet labels */}
              <FadeText
                progress={progress}
                range={[0.86, 0.94]}
                x={60}
                y={605}
                fill={INK}
                size={14}
              >
                {t('sheet')}
              </FadeText>
              <FadeText
                progress={progress}
                range={[0.86, 0.94]}
                x={940}
                y={605}
                anchor="end"
                size={14}
              >
                {t('scale')}
              </FadeText>
            </svg>

            <p className="absolute -bottom-8 right-0 font-display text-xs uppercase tabular-nums tracking-[0.2em] text-bone/40">
              {t('progress')} {String(percent).padStart(3, '0')}%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDrawing;

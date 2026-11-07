'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

import type { CommercialLine } from '@/data/lines';

import { easeOutExpo, SplitText } from './motion';
import type { PlateTone } from './plates';
import { plates } from './plates';

const TONES: Record<Exclude<PlateTone, 'accent'>, string> = {
  line: '#eee9e0',
  muted: '#8c8781',
  demolition: '#d8b49a',
  new: '#b4452b',
};

type SolutionsPlateProps = {
  line: CommercialLine;
  items: string[];
};

// "Our solutions" as a technical plate with a legend: the drawing traces
// itself when it comes into view, hovering a legend entry lights up the
// matching numbered callout on the drawing
const SolutionsPlate = ({ line, items }: SolutionsPlateProps) => {
  const t = useTranslations(`lines.${line.key}`);
  const tSheet = useTranslations('landing.sheet');
  const plate = plates[line.key];
  const sheetRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sheetRef, { once: true, margin: '-15% 0px' });
  const reduceMotion = useReducedMotion();
  const drawn = inView || Boolean(reduceMotion);
  const [active, setActive] = useState<number | null>(null);

  const colour = (tone: PlateTone = 'line') =>
    tone === 'accent' ? line.accent : TONES[tone];

  return (
    <div className="container-custom mt-24 md:mt-40">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Drawing */}
        <div className="lg:col-span-7">
          <div className="lg:sticky lg:top-28">
            <div
              ref={sheetRef}
              className="relative border border-bone/15 p-3 md:p-6"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(238,233,224,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(238,233,224,0.04) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            >
              <svg
                viewBox="0 0 1000 560"
                className="w-full"
                role="img"
                aria-label={t('plate.title')}
              >
                {plate.paths.map((path, index) => (
                  <motion.path
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    d={path.d}
                    fill="none"
                    stroke={colour(path.tone)}
                    strokeWidth={path.width ?? 1.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    initial={false}
                    animate={{
                      pathLength: drawn ? 1 : 0,
                      opacity: drawn ? 1 : 0,
                    }}
                    transition={{
                      pathLength: {
                        duration: 1.6,
                        ease: [0.65, 0, 0.35, 1],
                        delay: index * 0.12,
                      },
                      opacity: { duration: 0.01, delay: index * 0.12 },
                    }}
                  />
                ))}

                {plate.texts.map((text) => (
                  <motion.text
                    key={`${text.x}-${text.y}`}
                    x={text.x}
                    y={text.y}
                    textAnchor={text.anchor ?? 'start'}
                    fill={colour(text.tone ?? 'muted')}
                    fontSize={14}
                    letterSpacing="0.12em"
                    className="font-display uppercase"
                    transform={
                      text.rotate
                        ? `rotate(${text.rotate} ${text.x} ${text.y})`
                        : undefined
                    }
                    initial={false}
                    animate={{ opacity: drawn ? 1 : 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + plate.paths.length * 0.12,
                    }}
                  >
                    {text.labelKey
                      ? t(`plate.labels.${text.labelKey}`)
                      : text.text}
                  </motion.text>
                ))}

                {/* Numbered callouts */}
                {plate.callouts.slice(0, items.length).map((callout, index) => {
                  const isActive = active === index;
                  return (
                    <motion.g
                      key={`${callout.x}-${callout.y}`}
                      initial={false}
                      animate={{
                        opacity: drawn ? 1 : 0,
                        scale: drawn ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: easeOutExpo,
                        delay: 0.8 + plate.paths.length * 0.12 + index * 0.08,
                      }}
                      style={{
                        originX: `${callout.x}px`,
                        originY: `${callout.y}px`,
                      }}
                      onMouseEnter={() => setActive(index)}
                      onMouseLeave={() => setActive(null)}
                    >
                      {isActive && (
                        <motion.circle
                          cx={callout.x}
                          cy={callout.y}
                          fill="none"
                          stroke={line.accent}
                          initial={{ r: 16, opacity: 0.9 }}
                          animate={{ r: 34, opacity: 0 }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        />
                      )}
                      <motion.circle
                        cx={callout.x}
                        cy={callout.y}
                        stroke={line.accent}
                        strokeWidth={1.5}
                        vectorEffect="non-scaling-stroke"
                        animate={{
                          r: isActive ? 20 : 15,
                          fill: isActive ? line.accent : '#0e0d0c',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <text
                        x={callout.x}
                        y={callout.y + 5}
                        textAnchor="middle"
                        fontSize={14}
                        fontWeight={600}
                        fill={isActive ? line.onAccent : line.accent}
                        className="pointer-events-none font-display"
                      >
                        {index + 1}
                      </text>
                    </motion.g>
                  );
                })}
              </svg>
            </div>
            <div className="flex justify-between border-x border-b border-bone/15 px-4 py-3 font-display text-[11px] uppercase tracking-[0.18em] text-bone/50">
              <span>
                {tSheet('short')} {line.number}.2 — {t('plate.title')}
              </span>
              <span>{tSheet('scale')} 1:100</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="lg:col-span-5">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-bone/50 md:text-sm">
            {t('plate.legend')}
          </p>
          <SplitText
            as="h3"
            text={t('solutionsTitle')}
            className="mb-10 block font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl"
          />
          <ol>
            {items.map((item, index) => {
              const isActive = active === index;
              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.8,
                    ease: easeOutExpo,
                    delay: index * 0.05,
                  }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(index)}
                    onBlur={() => setActive(null)}
                    onClick={() => setActive(isActive ? null : index)}
                    className="group flex w-full items-center gap-5 border-t border-bone/10 py-5 text-left"
                  >
                    <span
                      className="flex size-9 shrink-0 items-center justify-center rounded-full border font-display text-sm font-semibold tabular-nums transition-colors duration-300"
                      style={{
                        borderColor: line.accent,
                        backgroundColor: isActive ? line.accent : 'transparent',
                        color: isActive ? line.onAccent : line.accent,
                      }}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`flex-1 font-display text-lg font-medium leading-snug tracking-tight transition-colors duration-300 md:text-xl ${
                        active === null || isActive
                          ? 'text-bone'
                          : 'text-bone/35'
                      }`}
                    >
                      {item}
                    </span>
                    <span className="hidden font-display text-[11px] tabular-nums tracking-[0.15em] text-bone/30 sm:block">
                      {line.number}.{String(index + 1).padStart(2, '0')}
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPlate;

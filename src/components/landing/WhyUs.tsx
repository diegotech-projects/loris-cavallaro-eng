'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import { commercialLines } from '@/data/lines';

import { Reveal, SplitText } from './motion';

const reasons = [
  'engineering',
  'tailored',
  'singleContact',
  'quality',
  'transparency',
  'integration',
] as const;

type ReasonProps = {
  index: number;
  text: string;
};

// Lights up while it sits in the middle band of the viewport
const Reason = ({ index, text }: ReasonProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const active = useInView(ref, { margin: '-45% 0px -45% 0px' });
  const { accent } = commercialLines[index % commercialLines.length]!;

  return (
    <li
      ref={ref}
      className="flex gap-6 border-b border-bone/10 py-10 md:gap-10 md:py-14"
    >
      <motion.span
        className="pt-2 font-display text-sm font-medium tabular-nums"
        animate={{ color: active ? accent : 'rgba(242,239,233,0.25)' }}
        transition={{ duration: 0.5 }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.span>
      <motion.p
        className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl"
        animate={{
          color: active ? '#f2efe9' : 'rgba(242,239,233,0.18)',
          x: active ? 0 : -8,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {text}
      </motion.p>
    </li>
  );
};

const WhyUs = () => {
  const t = useTranslations('landing.why');

  return (
    <section className="bg-ink py-24 text-bone md:py-40">
      <div className="container-custom grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-40">
            <Reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-bone/50 md:text-sm">
                {t('eyebrow')}
              </p>
            </Reveal>
            <SplitText
              as="h2"
              text={t('title')}
              className="block font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-7xl"
            />
          </div>
        </div>
        <ul className="border-t border-bone/10 lg:col-span-7">
          {reasons.map((reason, index) => (
            <Reason key={reason} index={index} text={t(`items.${reason}`)} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;

'use client';

import { motion } from 'framer-motion';

import { easeOutExpo } from './motion';

type DimensionDividerProps = {
  label: string;
};

// Section divider drawn like a dimension line: extension ticks at both ends,
// the line drawing outward from the centre, the label sitting on it
const DimensionDivider = ({ label }: DimensionDividerProps) => (
  <div aria-hidden className="container-custom py-6">
    <div className="relative flex h-6 items-center">
      <motion.span
        className="absolute left-0 h-6 w-px bg-bone/40"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      />
      <motion.span
        className="absolute right-0 h-6 w-px bg-bone/40"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      />
      <motion.span
        className="h-px w-full bg-bone/25"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: easeOutExpo, delay: 0.2 }}
      />
      <span className="absolute left-0 h-px w-3 -translate-x-1/2 -rotate-45 bg-bone/60" />
      <span className="absolute right-0 h-px w-3 translate-x-1/2 -rotate-45 bg-bone/60" />
      <motion.span
        className="absolute left-1/2 -translate-x-1/2 bg-ink px-4 font-display text-[11px] uppercase tracking-[0.25em] text-bone/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {label}
      </motion.span>
    </div>
  </div>
);

export default DimensionDivider;

'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// Fades content up the first time it scrolls into view
export const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: easeOutExpo, delay }}
    >
      {children}
    </motion.div>
  );
};

type SplitTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  // Animate on mount instead of when scrolled into view
  immediate?: boolean;
};

// Each word slides up from behind a mask, one after the other
export const SplitText = ({
  text,
  as: Tag = 'span',
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  immediate = false,
}: SplitTextProps) => {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');
  const trigger = immediate
    ? { animate: 'visible' }
    : {
        whileInView: 'visible',
        viewport: { once: true, margin: '-60px' },
      };

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden
        initial={reduceMotion ? false : 'hidden'}
        {...trigger}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {words.map((word, index) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={`${word}-${index}`}
            className="inline-block overflow-hidden pb-[0.12em] align-top"
          >
            <motion.span
              className={`inline-block ${wordClassName ?? ''}`}
              variants={{
                hidden: { y: '110%', rotate: 4 },
                visible: { y: '0%', rotate: 0 },
              }}
              transition={{ duration: 1.1, ease: easeOutExpo }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && ' '}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

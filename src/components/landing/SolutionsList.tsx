'use client';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import type { MouseEvent } from 'react';
import { useRef, useState } from 'react';

import type { CommercialLine } from '@/data/lines';

import { easeOutExpo, SplitText } from './motion';

type SolutionsListProps = {
  line: CommercialLine;
  title: string;
  items: string[];
};

const PREVIEW_WIDTH = 300;
const PREVIEW_HEIGHT = 380;

// Big interactive rows: hovering one floods it with the line colour and
// shows a project photo that trails the pointer
const SolutionsList = ({ line, title, items }: SolutionsListProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const images = [line.cover, ...line.gallery];

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 220, damping: 28, mass: 0.6 });
  const y = useSpring(pointerY, { stiffness: 220, damping: 28, mass: 0.6 });
  // Tilt the preview in the direction it is travelling
  const rotate = useTransform(useVelocity(x), [-1500, 1500], [-14, 14]);

  const handleMove = (event: MouseEvent<HTMLUListElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - rect.left - PREVIEW_WIDTH / 2);
    pointerY.set(event.clientY - rect.top - PREVIEW_HEIGHT / 2);
  };

  return (
    <div className="container-custom mt-24 md:mt-40">
      <div className="mb-10 flex items-end justify-between gap-6 md:mb-16">
        <SplitText
          as="h3"
          text={title}
          className="block font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl"
        />
        <span
          className="font-display text-7xl font-semibold leading-none -tracking-wider text-transparent md:text-[9rem]"
          style={{ WebkitTextStroke: `1.5px ${line.accent}` }}
          aria-hidden
        >
          {String(items.length).padStart(2, '0')}
        </span>
      </div>

      <ul
        ref={listRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setActive(null)}
        className="relative"
      >
        {/* Trailing preview (pointer devices only) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-20 hidden overflow-hidden rounded-[22px] shadow-2xl md:block"
          style={{
            x,
            y,
            rotate,
            width: PREVIEW_WIDTH,
            height: PREVIEW_HEIGHT,
          }}
          animate={{
            opacity: active === null ? 0 : 1,
            scale: active === null ? 0.6 : 1,
          }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
        >
          <AnimatePresence initial={false}>
            {active !== null && (
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ clipPath: 'inset(100% 0% 0% 0%)', scale: 1.3 }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.2 } }}
                transition={{ duration: 0.7, ease: easeOutExpo }}
              >
                <Image
                  src={images[active % images.length]!}
                  alt=""
                  fill
                  sizes={`${PREVIEW_WIDTH}px`}
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {items.map((item, index) => {
          const isActive = active === index;
          const isDimmed = active !== null && !isActive;
          let textColor = 'rgba(238,233,224,1)';
          if (isActive) textColor = line.onAccent;
          else if (isDimmed) textColor = 'rgba(238,233,224,0.3)';
          return (
            <motion.li
              key={item}
              onMouseEnter={() => setActive(index)}
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.9,
                ease: easeOutExpo,
                delay: index * 0.05,
              }}
            >
              {/* Divider draws itself in */}
              <motion.span
                className="absolute inset-x-0 top-0 h-px origin-left bg-bone/15"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: easeOutExpo,
                  delay: index * 0.05,
                }}
              />
              {/* Colour flood on hover */}
              <motion.span
                className="absolute inset-0 origin-bottom"
                style={{ backgroundColor: line.accent }}
                initial={false}
                animate={{ scaleY: isActive ? 1 : 0 }}
                transition={{ duration: 0.55, ease: easeOutExpo }}
              />
              <motion.div
                className="relative flex items-center gap-5 py-6 md:gap-10 md:py-9"
                animate={{
                  x: isActive ? 28 : 0,
                  color: textColor,
                }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
              >
                <span className="w-8 shrink-0 font-display text-sm tabular-nums opacity-70 md:w-12">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
                  {item}
                </span>
                <motion.span
                  className="mr-7 hidden shrink-0 md:block"
                  animate={{
                    rotate: isActive ? 0 : -45,
                    opacity: isActive ? 1 : 0.25,
                  }}
                  transition={{ duration: 0.5, ease: easeOutExpo }}
                >
                  <ArrowUpRight className="size-10" aria-hidden />
                </motion.span>
              </motion.div>
            </motion.li>
          );
        })}
        <li aria-hidden className="h-px bg-bone/15" />
      </ul>
    </div>
  );
};

export default SolutionsList;

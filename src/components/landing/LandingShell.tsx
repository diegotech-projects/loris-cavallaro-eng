'use client';

import 'lenis/dist/lenis.css';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Lenis from 'lenis';
import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { commercialLines } from '@/data/lines';

import Preloader from './Preloader';

const IntroContext = createContext(true);

// True once the preloader curtain starts lifting; entry animations wait for it
export const useIntroDone = () => useContext(IntroContext);

const INTRO_SEEN_KEY = 'cavallaro-intro-seen';

// Inertial smooth scrolling; paused while the preloader is on screen
const useSmoothScroll = (paused: boolean) => {
  const reduceMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const lenis = new Lenis({ duration: 1.2, anchors: true });
    lenisRef.current = lenis;
    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (paused) lenisRef.current?.stop();
    else lenisRef.current?.start();
  }, [paused]);
};

// CAD-style crosshair with live coordinates; shows a bracketed label over
// [data-cursor] elements and opens up over links
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [overLink, setOverLink] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const coordX = useTransform(x, (value) =>
    String(Math.max(0, Math.round(value))).padStart(4, '0'),
  );
  const coordY = useTransform(y, (value) =>
    String(Math.max(0, Math.round(value))).padStart(4, '0'),
  );

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    setEnabled(true);
    document.documentElement.classList.add('custom-cursor');

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const labelled = target?.closest('[data-cursor]');
      setLabel(labelled?.getAttribute('data-cursor') ?? null);
      setOverLink(
        Boolean(target?.closest('a, button, select, input, textarea')),
      );
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerover', handleOver);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
      document.documentElement.classList.remove('custom-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  const arm = label || overLink ? 22 : 12;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] text-bone mix-blend-difference"
      style={{ x, y }}
    >
      {/* Crosshair */}
      <motion.span
        className="absolute h-px bg-current"
        animate={{ width: arm * 2, x: -arm }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
      <motion.span
        className="absolute w-px bg-current"
        animate={{ height: arm * 2, y: -arm }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
      <motion.span
        className="absolute border border-current"
        animate={{
          width: overLink || label ? 14 : 6,
          height: overLink || label ? 14 : 6,
          x: overLink || label ? -7 : -3,
          y: overLink || label ? -7 : -3,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />

      {/* Coordinates / label */}
      <span className="absolute left-4 top-4 whitespace-nowrap font-display text-[10px] uppercase tabular-nums tracking-[0.18em]">
        <AnimatePresence mode="wait" initial={false}>
          {label ? (
            <motion.span
              key="label"
              className="block text-xs font-semibold"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
            >
              [ {label} ]
            </motion.span>
          ) : (
            <motion.span
              key="coords"
              className="block opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
            >
              X <motion.span>{coordX}</motion.span> · Y{' '}
              <motion.span>{coordY}</motion.span>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.div>
  );
};

const progressGradient = `linear-gradient(90deg, ${commercialLines
  .map((line) => line.accent)
  .join(', ')})`;

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left"
      style={{ scaleX, background: progressGradient }}
    />
  );
};

type LandingShellProps = {
  children: ReactNode;
};

// Home-page wrapper: preloader, smooth scroll, cursor, film grain, progress bar
const LandingShell = ({ children }: LandingShellProps) => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [quickIntro, setQuickIntro] = useState<boolean | null>(null);
  const [introDone, setIntroDone] = useState(false);

  useSmoothScroll(showPreloader);

  useEffect(() => {
    try {
      setQuickIntro(window.sessionStorage.getItem(INTRO_SEEN_KEY) === '1');
    } catch {
      setQuickIntro(false);
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    try {
      window.sessionStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch {
      // Storage can be blocked; the intro just plays again next time
    }
    window.scrollTo(0, 0);
    setShowPreloader(false);
    setIntroDone(true);
  }, []);

  return (
    <IntroContext.Provider value={introDone}>
      <AnimatePresence>
        {showPreloader && (
          <Preloader
            key="preloader"
            quick={quickIntro}
            onComplete={handleIntroComplete}
          />
        )}
      </AnimatePresence>
      <ScrollProgress />
      <CustomCursor />
      <div
        aria-hidden
        className="grain pointer-events-none fixed inset-0 z-[80]"
      />
      {children}
    </IntroContext.Provider>
  );
};

export default LandingShell;

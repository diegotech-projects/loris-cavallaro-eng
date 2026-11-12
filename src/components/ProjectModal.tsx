'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { NumberedList } from '@/components/page/PageParts';
import type { Project } from '@/data/types';
import { Link as LocalizedLink } from '@/i18n/navigation';

interface ProjectModalProps {
  project: Project;
  code: string;
  onClose: () => void;
}

const curtain = [0.76, 0, 0.24, 1] as const;

const imageKey = (image: Project['images'][number]) =>
  typeof image === 'string' ? image : image.src;

// Full-screen project sheet: large image stage on the left, details and
// title block on the right. Opens with a curtain from the bottom.
const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  code,
  onClose,
}) => {
  const t = useTranslations('projectModal');
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = project.images.length;

  const paginate = useCallback(
    (step: number) =>
      setSlide(([current]) => [(current + step + total) % total, step]),
    [total],
  );

  // Keyboard, scroll lock and initial focus
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowLeft') paginate(-1);
      else if (event.key === 'ArrowRight') paginate(1);
    };
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeRef.current?.focus();
    return () => {
      document.documentElement.style.overflow = overflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, paginate]);

  const current = project.images[index]!;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex flex-col bg-ink text-bone"
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      transition={{ duration: 0.9, ease: curtain }}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-bone/15 px-5 py-4 md:px-10">
        <p className="flex min-w-0 items-center gap-4 font-display text-xs uppercase tracking-[0.25em]">
          <span className="tabular-nums text-brick">{code}</span>
          <span className="truncate text-bone/55">{project.category}</span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="flex size-11 shrink-0 items-center justify-center border border-bone/25 transition-colors hover:border-bone hover:bg-bone hover:text-ink"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-12 lg:overflow-hidden">
        {/* Image stage */}
        <div className="relative min-h-[48vh] overflow-hidden bg-black lg:col-span-8 lg:min-h-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageKey(current)}
              custom={direction}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              variants={{
                enter: (dir: number) => ({
                  clipPath:
                    dir >= 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)',
                }),
                center: { clipPath: 'inset(0% 0% 0% 0%)', zIndex: 2 },
                exit: { zIndex: 1 },
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.9, ease: curtain }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                else if (info.offset.x > 80) paginate(-1);
              }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={current}
                  alt={`${project.title} ${index + 1}`}
                  fill
                  draggable={false}
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="pointer-events-none select-none object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

          {/* Stage controls */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-6 p-5 md:p-8">
            <div className="min-w-0 flex-1">
              <p className="font-display text-5xl font-semibold tabular-nums leading-none tracking-[-0.04em] md:text-7xl">
                {String(index + 1).padStart(2, '0')}
                <span className="text-2xl text-bone/40 md:text-3xl">
                  {' '}
                  / {String(total).padStart(2, '0')}
                </span>
              </p>
              <div className="mt-4 flex max-w-xs gap-2">
                {project.images.map((image, i) => (
                  <span
                    key={imageKey(image)}
                    className="relative h-[2px] flex-1 overflow-hidden bg-bone/20"
                  >
                    {i === index && (
                      <motion.span
                        layoutId="project-progress"
                        className="absolute inset-0 bg-brick"
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => paginate(-1)}
                className="flex size-12 items-center justify-center border border-bone/30 bg-ink/40 backdrop-blur-sm transition-colors hover:border-bone hover:bg-bone hover:text-ink"
                aria-label="Previous image"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                className="flex size-12 items-center justify-center border border-bone/30 bg-ink/40 backdrop-blur-sm transition-colors hover:border-bone hover:bg-bone hover:text-ink"
                aria-label="Next image"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Details */}
        <motion.aside
          className="border-bone/15 lg:col-span-4 lg:overflow-y-auto lg:border-l"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <div className="p-6 md:p-10">
            <h2 className="font-display text-4xl font-semibold leading-none tracking-[-0.04em] md:text-5xl">
              {project.title}
            </h2>

            <p className="mb-3 mt-10 font-display text-[11px] uppercase tracking-[0.25em] text-bone/45">
              {t('projectDescription')}
            </p>
            <p className="text-lg leading-relaxed text-bone/70">
              {project.description}
            </p>

            <p className="mb-2 mt-10 font-display text-[11px] uppercase tracking-[0.25em] text-bone/45">
              {t('mainFeatures')}
            </p>
            <NumberedList items={project.features} prefix={code} />

            {/* Title block */}
            <dl className="mt-10 grid grid-cols-2 border border-bone/20 font-display text-[11px] uppercase tracking-[0.18em]">
              <div className="border-r border-bone/20 px-4 py-3">
                <dt className="text-bone/45">{t('projectNumber')}</dt>
                <dd className="mt-1 tabular-nums">
                  {project.id.toString().padStart(3, '0')}
                </dd>
              </div>
              <div className="px-4 py-3">
                <dt className="text-bone/45">{t('category')}</dt>
                <dd className="mt-1 normal-case tracking-normal">
                  {project.category}
                </dd>
              </div>
            </dl>

            {/* Thumbnails */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              {project.images.map((image, i) => (
                <button
                  key={imageKey(image)}
                  type="button"
                  onClick={() => setSlide([i, i > index ? 1 : -1])}
                  className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                    i === index
                      ? 'border-brick'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`${project.title} ${i + 1}`}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <LocalizedLink
              href="/contact#contact-form"
              className="group mt-10 flex items-center justify-between bg-bone px-6 py-5 font-display font-semibold text-ink transition-colors hover:bg-brick hover:text-bone"
            >
              {t('contactUs')}
              <ArrowUpRight
                className="size-5 transition-transform group-hover:rotate-45"
                aria-hidden
              />
            </LocalizedLink>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default ProjectModal;

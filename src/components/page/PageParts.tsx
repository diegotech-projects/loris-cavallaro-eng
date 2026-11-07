import { ArrowRight } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ReactNode } from 'react';

import { Reveal, SplitText } from '@/components/landing/motion';
import { Link as LocalizedLink } from '@/i18n/navigation';

// Shared building blocks for the inner pages, in the same "drawing sheet"
// language as the home page: hairline grids, registration marks, sheet codes.

const CORNERS = [
  'left-0 top-0 border-l border-t',
  'right-0 top-0 border-r border-t',
  'bottom-0 left-0 border-b border-l',
  'bottom-0 right-0 border-b border-r',
];

type FramedImageProps = {
  src: StaticImageData | string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

// Photo inside a drawing frame: registration marks and a caption strip
export const FramedImage = ({
  src,
  alt,
  caption,
  className = 'aspect-[4/5]',
  imageClassName = 'object-cover',
  priority,
  sizes = '(min-width: 1024px) 40vw, 100vw',
}: FramedImageProps) => (
  <figure className="relative p-3 md:p-4">
    {CORNERS.map((corner) => (
      <span
        key={corner}
        aria-hidden
        className={`absolute size-5 border-bone/50 ${corner}`}
      />
    ))}
    <div className={`relative overflow-hidden bg-bone/5 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
    {caption && (
      <figcaption className="mt-3 flex justify-between font-display text-[10px] uppercase tracking-[0.22em] text-bone/45">
        <span>{caption}</span>
        <span>1:1</span>
      </figcaption>
    )}
  </figure>
);

type PageHeroProps = {
  sheet: string;
  title: string;
  subtitle?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  imageClassName?: string;
};

export const PageHero = ({
  sheet,
  title,
  subtitle,
  image,
  imageAlt = '',
  imageClassName,
}: PageHeroProps) => (
  <section className="relative overflow-hidden border-b border-bone/10 bg-ink pb-16 pt-14 text-bone md:py-24">
    <div
      className={`container-custom grid gap-12 ${
        image ? 'lg:grid-cols-12 lg:items-end' : ''
      }`}
    >
      <div className={image ? 'lg:col-span-7' : 'max-w-5xl'}>
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
          className="block font-display text-[12vw] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-8xl"
        />
        {subtitle && (
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/65 md:text-xl">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
      {image && (
        <Reveal delay={0.2} className="lg:col-span-5">
          <FramedImage
            src={image}
            alt={imageAlt}
            caption={imageAlt}
            priority
            imageClassName={imageClassName}
          />
        </Reveal>
      )}
    </div>
  </section>
);

type SectionHeaderProps = {
  index: string;
  title: string;
  description?: string;
};

export const SectionHeader = ({
  index,
  title,
  description,
}: SectionHeaderProps) => (
  <div className="mb-12 grid gap-6 border-b border-bone/15 pb-8 md:mb-16 lg:grid-cols-12 lg:items-end">
    <div className="lg:col-span-8">
      <p className="mb-4 font-display text-xs tabular-nums tracking-[0.3em] text-bone/45">
        {index}
      </p>
      <SplitText
        as="h2"
        text={title}
        className="block font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl"
      />
    </div>
    {description && (
      <Reveal delay={0.1} className="lg:col-span-4">
        <p className="leading-relaxed text-bone/60">{description}</p>
      </Reveal>
    )}
  </div>
);

type NumberedListProps = {
  items: string[];
  prefix?: string;
};

// Legend-style list: numbered rows on hairlines
export const NumberedList = ({ items, prefix }: NumberedListProps) => (
  <ol>
    {items.map((item, index) => (
      <li
        key={item}
        className="flex items-baseline gap-5 border-t border-bone/10 py-4 last:border-b"
      >
        <span className="min-w-10 shrink-0 font-display text-xs tabular-nums tracking-[0.15em] text-brick">
          {prefix ? `${prefix}.` : ''}
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="leading-relaxed text-bone/80">{item}</span>
      </li>
    ))}
  </ol>
);

type SheetCellProps = {
  children: ReactNode;
  className?: string;
};

// One cell of a hairline grid (wrap cells in <SheetGrid>)
export const SheetCell = ({ children, className = '' }: SheetCellProps) => (
  <div className={`bg-ink p-6 md:p-8 ${className}`}>{children}</div>
);

export const SheetGrid = ({ children, className = '' }: SheetCellProps) => (
  <div className={`grid gap-px border border-bone/15 bg-bone/15 ${className}`}>
    {children}
  </div>
);

type PageCtaProps = {
  title: string;
  description: string;
  button: string;
  href?: string;
};

export const PageCta = ({
  title,
  description,
  button,
  href = '/contact#contact-form',
}: PageCtaProps) => (
  <section className="border-t border-bone/10 bg-ink py-24 text-bone md:py-36">
    <div className="container-custom grid gap-10 lg:grid-cols-12 lg:items-end">
      <SplitText
        as="h2"
        text={title}
        className="block font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl lg:col-span-8"
      />
      <Reveal delay={0.15} className="lg:col-span-4">
        <p className="mb-8 text-lg leading-relaxed text-bone/65">
          {description}
        </p>
        <LocalizedLink
          href={href}
          className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-brick hover:text-bone"
        >
          {button}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </LocalizedLink>
      </Reveal>
    </div>
  </section>
);

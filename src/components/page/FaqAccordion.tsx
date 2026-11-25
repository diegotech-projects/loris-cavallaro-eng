import { SplitText } from '@/components/landing/motion';

type FaqAccordionProps = {
  title: string;
  codePrefix: string;
  items: { q: string; a: string }[];
};

// Numbered FAQ on hairlines; native <details> so answers are in the HTML and
// work without JavaScript (good for crawlers and AI answer engines)
const FaqAccordion = ({ title, codePrefix, items }: FaqAccordionProps) => (
  <div className="container-custom">
    <SplitText
      as="h2"
      text={title}
      className="mb-12 block font-display text-4xl font-semibold tracking-[-0.035em] md:text-6xl"
    />
    <ol className="border-b border-bone/15">
      {items.map((item, index) => (
        <li key={item.q} className="border-t border-bone/15">
          <details className="group" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-baseline gap-5 py-7 md:gap-10 [&::-webkit-details-marker]:hidden">
              <span className="w-12 shrink-0 font-display text-xs tabular-nums tracking-[0.2em] text-brick">
                {codePrefix}
                {index + 1}
              </span>
              <h3 className="flex-1 font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-bone/80 transition-colors group-open:text-bone md:text-2xl">
                {item.q}
              </h3>
              <span
                aria-hidden
                className="relative mt-2 size-5 shrink-0 self-start"
              >
                <span className="absolute inset-x-0 top-1/2 h-px bg-bone/60" />
                <span className="absolute inset-y-0 left-1/2 w-px bg-bone/60 transition-transform duration-300 group-open:scale-y-0" />
              </span>
            </summary>
            <p className="max-w-3xl pb-8 text-lg leading-relaxed text-bone/65 md:pl-[5.5rem]">
              {item.a}
            </p>
          </details>
        </li>
      ))}
    </ol>
  </div>
);

export default FaqAccordion;

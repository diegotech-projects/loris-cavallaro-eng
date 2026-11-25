import { FAQData } from '@/data/content';

// Numbered accordion on hairlines; native <details> so it works without JS
function FAQS() {
  const faqData = FAQData();

  return (
    <div className="container-custom">
      <ol className="border-b border-bone/15">
        {faqData.map((item: any, index: number) => (
          <li key={item.question} className="border-t border-bone/15">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-baseline gap-5 py-7 md:gap-10 md:py-9 [&::-webkit-details-marker]:hidden">
                <span className="w-12 shrink-0 font-display text-xs tabular-nums tracking-[0.2em] text-brick">
                  F.{String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-bone/80 transition-colors group-open:text-bone md:text-3xl">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className="relative mt-2 size-5 shrink-0 self-start md:mt-3"
                >
                  <span className="absolute inset-x-0 top-1/2 h-px bg-bone/60" />
                  <span className="absolute inset-y-0 left-1/2 w-px bg-bone/60 transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <div className="pb-9 md:pl-[5.5rem]">
                <p className="max-w-3xl text-lg leading-relaxed text-bone/65">
                  {item.answer}
                </p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FAQS;

import { useLocale, useTranslations } from 'next-intl';

import JsonLd from '@/components/JsonLd';
import LineShowcase from '@/components/landing/LineShowcase';
import { Reveal, SplitText } from '@/components/landing/motion';
import { PageCta } from '@/components/page/PageParts';
import type { LineKey } from '@/data/lines';
import { commercialLines, formatPrice } from '@/data/lines';
import { Link as LocalizedLink } from '@/i18n/navigation';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/utils/schema';
import { localizedUrl } from '@/utils/seo';

type LinePageProps = {
  lineKey: LineKey;
};

// Dedicated landing page for one commercial line: the home showcase as the
// page body, plus areas served, a line-specific FAQ and schema.org data
const LinePage = ({ lineKey }: LinePageProps) => {
  const line = commercialLines.find((item) => item.key === lineKey)!;
  const locale = useLocale();
  const t = useTranslations(`lines.${lineKey}`);
  const tPage = useTranslations('landing.linePage');
  const tAreas = useTranslations('landing.areas');
  const tClosing = useTranslations('landing.closing');
  const tSheet = useTranslations('landing.sheet');

  // Prices in the FAQ come from data/lines.ts so they never drift
  const prices: Record<string, string> = {};
  line.tiers.forEach((tier) => {
    if (tier.price !== null) prices[tier.key] = formatPrice(tier.price, locale);
  });
  const firstPrice = Object.values(prices)[0] ?? '';
  const fill = (text: string) =>
    text
      .replace('{price}', firstPrice)
      .replace(/\{(\w+)\}/g, (match, key: string) => prices[key] ?? match);

  const faq = (t.raw('faq') as { q: string; a: string }[]).map((item) => ({
    q: item.q,
    a: fill(item.a),
  }));
  const title = `${t('title')} ${tPage('turnkeySuffix')}`;
  const pageUrl = localizedUrl(locale, `/${line.slug}`);

  return (
    <main className="relative bg-ink text-bone">
      <JsonLd
        data={serviceSchema({
          locale,
          line,
          name: title,
          description: `${t('lead')} ${t('summary')}`,
          serviceType: t('title'),
          tiers: line.tiers.map((tier) => ({
            name: t(`tiers.${tier.key}.name`),
            description: t(`tiers.${tier.key}.description`),
          })),
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: tPage('breadcrumbHome'), url: localizedUrl(locale) },
          { name: title, url: pageUrl },
        ])}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="container-custom pt-8 font-display text-xs uppercase tracking-[0.22em] text-bone/45"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <LocalizedLink href="/" className="hover:text-bone">
              {tPage('breadcrumbHome')}
            </LocalizedLink>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-bone/80">
            {tSheet('short')} {line.number} — {t('title')}
          </li>
        </ol>
      </nav>

      <LineShowcase line={line} asPage />

      {/* Areas served */}
      <section className="border-t border-bone/10 py-24 md:py-32">
        <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-bone/45">
              {tAreas('eyebrow')}
            </p>
            <SplitText
              as="h2"
              text={tAreas('title')}
              className="block font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl"
            />
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-bone/65">
              {tAreas('text')}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {(tAreas.raw('items') as string[]).map((area) => (
                <li
                  key={area}
                  className="border border-bone/20 px-4 py-2 font-display text-sm text-bone/80"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-bone/10 py-24 md:py-32">
        <div className="container-custom">
          <SplitText
            as="h2"
            text={tPage('faqTitle')}
            className="mb-12 block font-display text-4xl font-semibold tracking-[-0.035em] md:text-6xl"
          />
          <ol className="border-b border-bone/15">
            {faq.map((item, index) => (
              <li key={item.q} className="border-t border-bone/15">
                <details className="group" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-baseline gap-5 py-7 md:gap-10 [&::-webkit-details-marker]:hidden">
                    <span className="w-12 shrink-0 font-display text-xs tabular-nums tracking-[0.2em] text-brick">
                      {line.number}.F{index + 1}
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
      </section>

      <PageCta
        title={tClosing('title')}
        description={tClosing('text')}
        button={t('cta')}
        href={`/contact?linea=${line.key}#contact-form`}
      />
    </main>
  );
};

export default LinePage;

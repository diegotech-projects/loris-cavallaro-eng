import { useLocale, useTranslations } from 'next-intl';

import JsonLd from '@/components/JsonLd';
import FaqAccordion from '@/components/page/FaqAccordion';
import { PageCta, PageHero } from '@/components/page/PageParts';
import PracticesPriceList from '@/components/page/PracticesPriceList';
import { formatPrice } from '@/data/lines';
import { practices, PRACTICES_SLUG } from '@/data/practices';
import { metadataFor } from '@/utils/pageMetadata';
import { breadcrumbSchema, faqSchema, practicesSchema } from '@/utils/schema';
import { localizedUrl } from '@/utils/seo';

const PATH = `/${PRACTICES_SLUG}`;

export const generateMetadata = metadataFor('practices', PATH);

export default function PracticesPage() {
  const locale = useLocale();
  const t = useTranslations('practices');
  const tSheet = useTranslations('landing.sheet');
  const tPage = useTranslations('landing.linePage');
  const tClosing = useTranslations('landing.closing');

  // FAQ prices come from data/practices.ts so they never drift
  const prices = Object.fromEntries(
    practices.map((p) => [p.key, formatPrice(p.price, locale)]),
  );
  const faq = (t.raw('faq') as { q: string; a: string }[]).map((item) => ({
    q: item.q,
    a: item.a.replace(
      /\{(\w+)\}/g,
      (match, key: string) => prices[key] ?? match,
    ),
  }));

  return (
    <main className="relative bg-ink text-bone">
      <JsonLd
        data={practicesSchema({
          locale,
          path: PATH,
          name: t('title'),
          description: t('description'),
          items: practices.map((p) => ({
            name: `${t(`items.${p.key}.name`)} (${t(`items.${p.key}.full`)})`,
            description: t(`items.${p.key}.description`),
            price: p.price,
          })),
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: tPage('breadcrumbHome'), url: localizedUrl(locale) },
          { name: t('title'), url: localizedUrl(locale, PATH) },
        ])}
      />

      <PageHero
        sheet={`${tSheet('short')} S.02 · ${t('eyebrow')}`}
        title={t('title')}
        subtitle={t('description')}
      />

      <section className="py-20 md:py-32">
        <div className="container-custom">
          <PracticesPriceList />
        </div>
      </section>

      <section className="border-t border-bone/10 py-24 md:py-32">
        <FaqAccordion title={tPage('faqTitle')} codePrefix="S.F" items={faq} />
      </section>

      <PageCta
        title={tClosing('title')}
        description={tClosing('text')}
        button={t('cta')}
        href="/contact?linea=permits#contact-form"
      />
    </main>
  );
}

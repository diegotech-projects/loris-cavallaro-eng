import { useTranslations } from 'next-intl';

import FAQS from '@/components/FAQS';
import JsonLd from '@/components/JsonLd';
import { PageCta, PageHero } from '@/components/page/PageParts';
import { metadataFor } from '@/utils/pageMetadata';
import { faqSchema } from '@/utils/schema';


export const generateMetadata = metadataFor('faq', '/faq');

export default function FAQPage() {
  const t = useTranslations('faq');
  const tSheet = useTranslations('landing.sheet');

  return (
    <main className="relative bg-ink text-bone">
      <JsonLd
        data={faqSchema(
          (t.raw('questions') as { question: string; answer: string }[]).map(
            (item) => ({ q: item.question, a: item.answer }),
          ),
        )}
      />
      <PageHero
        sheet={`${tSheet('short')} F — FAQ`}
        title={t('title')}
        subtitle={t('description')}
      />

      <section className="py-20 md:py-32">
        <FAQS />
      </section>

      <PageCta
        title={t('cta.title')}
        description={t('cta.description')}
        button={t('cta.button')}
      />
    </main>
  );
}

import { useTranslations } from 'next-intl';

import FAQS from '@/components/FAQS';
import { PageCta, PageHero } from '@/components/page/PageParts';

export default function FAQPage() {
  const t = useTranslations('faq');
  const tSheet = useTranslations('landing.sheet');

  return (
    <main className="relative bg-ink text-bone">
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

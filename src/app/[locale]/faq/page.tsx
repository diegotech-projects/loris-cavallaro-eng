import { useTranslations } from 'next-intl';

import FAQS from '@/components/FAQS';

export default function FAQPage() {
  const t = useTranslations('faq');

  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="mb-6 text-4xl font-bold text-whiteOne lg:text-5xl">
            {t('title')}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-blue-100">
            {t('description')}
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-whiteOne py-20">
        <FAQS />
      </div>

      {/* CTA Section */}
      <div className="bg-eliteGold py-20">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-4xl font-bold text-whiteOne">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-orange-100">
            {t('cta.description')}
          </p>
          <a
            href="/contact#contact-form"
            className="rounded-lg bg-whiteOne px-8 py-4 font-semibold text-eliteGold transition-colors hover:bg-eliteLight"
          >
            {t('cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
}

import { useTranslations } from 'next-intl';
import FAQS from '@/components/FAQS';

export default function FAQPage() {
  const t = useTranslations('faq');

  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-whiteOne mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
          <h2 className="text-4xl font-bold text-whiteOne mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <a href="/contact#contact-form" className="bg-whiteOne text-eliteGold px-8 py-4 rounded-lg font-semibold hover:bg-eliteLight transition-colors">
            {t('cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
}

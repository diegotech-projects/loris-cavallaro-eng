import { useTranslations } from 'next-intl';

import { FAQData } from '@/data/content';

function FAQS() {
  const t = useTranslations('faq');
  const faqData = FAQData();

  return (
    <div className="container-custom">
      {/* Header */}
      <div className="mb-20 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-themeTextPrimary lg:text-5xl xl:text-6xl">
          {t('title')}
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-themeTextSecondary">
          {t('description')}
        </p>
      </div>

      {/* FAQ List */}
      <div className="mx-auto max-w-4xl">
        {faqData.map((item: any) => (
          <div
            key={item.question}
            className="border-b border-themeTextSecondary border-opacity-20"
          >
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-6 text-lg font-bold tracking-wide text-themeTextPrimary group-open:text-themeTextPrimary">
                {item.question.toUpperCase()}
                <div className="ml-4 text-themeTextSecondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="block size-6 group-open:hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="hidden size-6 group-open:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div className="pb-6 leading-relaxed text-themeTextSecondary">
                {item.answer}
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQS;

import { ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { Reveal } from '@/components/landing/motion';
import { formatPrice } from '@/data/lines';
import { practices } from '@/data/practices';
import { Link as LocalizedLink } from '@/i18n/navigation';

// Price list of technical practices, laid out as a specification sheet
const PracticesPriceList = () => {
  const t = useTranslations('practices');
  const locale = useLocale();

  return (
    <div>
      <ol className="border-t border-bone/15">
        {practices.map((practice, index) => (
          <li key={practice.key} className="border-b border-bone/15">
            <Reveal
              delay={index * 0.05}
              className="group grid gap-4 py-7 transition-colors hover:bg-bone/[0.03] md:grid-cols-12 md:items-center md:gap-8 md:px-4 md:py-9"
            >
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-display text-xs tabular-nums tracking-[0.2em] text-bone/35">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-3xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-brick md:text-4xl">
                  {t(`items.${practice.key}.name`)}
                </span>
              </div>
              <div className="md:col-span-5">
                <p className="font-display text-[11px] uppercase tracking-[0.22em] text-bone/45">
                  {t(`items.${practice.key}.full`)}
                </p>
                <p className="mt-2 leading-relaxed text-bone/70">
                  {t(`items.${practice.key}.description`)}
                </p>
              </div>
              <p className="flex items-baseline gap-2 md:col-span-3 md:justify-end">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-bone/45">
                  {t('from')}
                </span>
                <span className="font-display text-3xl font-semibold tabular-nums tracking-[-0.03em] md:text-4xl">
                  {formatPrice(practice.price, locale)}
                </span>
              </p>
            </Reveal>
          </li>
        ))}
        <li className="grid gap-4 border-b border-bone/15 py-7 md:grid-cols-12 md:items-center md:gap-8 md:px-4 md:py-9">
          <div className="md:col-span-9">
            <p className="font-display text-2xl font-semibold tracking-[-0.02em]">
              {t('more')}
            </p>
            <p className="mt-2 leading-relaxed text-bone/60">{t('moreText')}</p>
          </div>
          <div className="md:col-span-3 md:text-right">
            <LocalizedLink
              href="/contact?linea=permits#contact-form"
              className="group inline-flex items-center gap-2 rounded-full bg-bone px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brick hover:text-bone"
            >
              {t('cta')}
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </LocalizedLink>
          </div>
        </li>
      </ol>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-bone/45">
        {t('note')}
      </p>
    </div>
  );
};

export default PracticesPriceList;

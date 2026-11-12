import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { Reveal } from '@/components/landing/motion';
import PracticesPriceList from '@/components/page/PracticesPriceList';
import {
  NumberedList,
  PageCta,
  PageHero,
  SectionHeader,
  SheetCell,
  SheetGrid,
} from '@/components/page/PageParts';
import { commercialLines, formatPrice, lowestTier } from '@/data/lines';
import { PRACTICES_SLUG } from '@/data/practices';
import { Link as LocalizedLink } from '@/i18n/navigation';
import { metadataFor } from '@/utils/pageMetadata';

const engineeringServices = [
  'structuralDesign',
  'projectManagement',
  'buildingPermits',
  'energyEfficiency',
  'technicalConsulting',
] as const;

const detailedServices = [
  'structuralDesign',
  'energyEfficiency',
  'projectManagement',
] as const;


export const generateMetadata = metadataFor('services', '/services');

const ServicesPage = () => {
  const t = useTranslations('servicesPage');
  const tPractices = useTranslations('practices');
  const tServices = useTranslations('services');
  const tSheet = useTranslations('landing.sheet');
  const tOverview = useTranslations('landing.overview');
  const tShowcase = useTranslations('landing.showcase');
  const tLines = useTranslations('lines');
  const locale = useLocale();

  return (
    <main className="relative bg-ink text-bone">
      <PageHero
        sheet={`${tSheet('short')} S · ${t('hero.title')}`}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* Turnkey lines */}
      <section className="py-24 md:py-36">
        <div className="container-custom">
          <SectionHeader
            index="S.01"
            title={tOverview('title')}
            description={tOverview('eyebrow')}
          />
          <SheetGrid className="md:grid-cols-3">
            {commercialLines.map((line) => {
              const tier = lowestTier(line);
              return (
                <LocalizedLink
                  key={line.key}
                  href={`/${line.slug}`}
                  className="group flex flex-col bg-ink"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={line.cover}
                      alt={tLines(`${line.key}.title`)}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-8 p-6 md:p-8">
                    <div>
                      <p className="mb-3 flex items-center gap-3 font-display text-xs uppercase tracking-[0.25em] text-bone/55">
                        <span
                          className={`inline-block size-2 rounded-full ${line.accentBg}`}
                        />
                        {tSheet('short')} {line.number} ·{' '}
                        {tLines(`${line.key}.label`)}
                      </p>
                      <h3 className="font-display text-3xl font-semibold tracking-[-0.03em]">
                        {tLines(`${line.key}.title`)}
                      </h3>
                      <p className="mt-3 leading-relaxed text-bone/60">
                        {tLines(`${line.key}.summary`)}
                      </p>
                    </div>
                    <div className="flex items-end justify-between border-t border-bone/15 pt-5">
                      <p>
                        <span className="block text-[10px] uppercase tracking-[0.25em] text-bone/50">
                          {tOverview('from')}
                        </span>
                        <span className="font-display text-2xl font-semibold tracking-tight">
                          {tier
                            ? formatPrice(tier.price!, locale)
                            : tOverview('onRequest')}
                          {tier?.unit === 'sqm' && (
                            <span className="text-base font-normal text-bone/50">
                              {tShowcase('sqm')}
                            </span>
                          )}
                        </span>
                      </p>
                      <ArrowUpRight
                        className="size-6 text-bone/50 transition-all group-hover:rotate-45 group-hover:text-bone"
                        aria-hidden
                      />
                    </div>
                  </div>
                </LocalizedLink>
              );
            })}
          </SheetGrid>
        </div>
      </section>

      {/* Technical practices price list */}
      <section
        id="pratiche"
        className="scroll-mt-20 border-t border-bone/10 py-24 md:py-36"
      >
        <div className="container-custom">
          <SectionHeader
            index="S.02"
            title={tPractices('title')}
            description={tPractices('description')}
          />
          <PracticesPriceList />
          <LocalizedLink
            href={`/${PRACTICES_SLUG}`}
            className="group mt-10 inline-flex items-center gap-2 font-display text-sm text-bone/70 transition-colors hover:text-bone"
          >
            {tPractices('pageLink')}
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </LocalizedLink>
        </div>
      </section>

      {/* Engineering services */}
      <section className="border-t border-bone/10 py-24 md:py-36">
        <div className="container-custom">
          <SectionHeader
            index="S.03"
            title={tServices('ourServices')}
            description={tServices('description')}
          />
          <SheetGrid className="md:grid-cols-2 lg:grid-cols-3">
            {engineeringServices.map((key, index) => (
              <SheetCell
                key={key}
                className="flex min-h-[240px] flex-col justify-between gap-10 transition-colors hover:bg-[#151412]"
              >
                <span className="font-display text-xs tabular-nums tracking-[0.2em] text-brick">
                  S.03.{String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">
                    {tServices(`${key}.title`)}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bone/60">
                    {tServices(`${key}.content`)}
                  </p>
                </div>
              </SheetCell>
            ))}
            <LocalizedLink
              href="/contact#contact-form"
              className="group flex min-h-[240px] flex-col justify-between gap-10 bg-bone p-6 text-ink transition-colors hover:bg-brick hover:text-bone md:p-8"
            >
              <ArrowUpRight
                className="size-8 transition-transform group-hover:rotate-45"
                aria-hidden
              />
              <span className="font-display text-2xl font-semibold tracking-[-0.02em]">
                {tServices('contactUs')}
              </span>
            </LocalizedLink>
          </SheetGrid>
        </div>
      </section>

      {/* Detailed services */}
      {detailedServices.map((key, index) => (
        <section key={key} className="border-t border-bone/10 py-24 md:py-32">
          <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-4 font-display text-xs tabular-nums tracking-[0.3em] text-bone/45">
                S.04.{String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-5xl">
                {t(`detailed.${key}.title`)}
              </h2>
              <Reveal>
                <p className="mt-6 text-lg leading-relaxed text-bone/65">
                  {t(`detailed.${key}.description`)}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="border border-bone/15">
                <div className="flex items-center justify-between border-b border-bone/15 px-6 py-4 font-display text-[11px] uppercase tracking-[0.2em] text-bone/50">
                  <span>{t(`detailed.${key}.cardTitle`)}</span>
                  <span>S.04.{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="px-6 py-8 font-display text-2xl font-medium leading-snug tracking-[-0.02em] md:text-3xl">
                  {t(`detailed.${key}.cardDescription`)}
                </p>
                <div className="px-6 pb-6">
                  <NumberedList
                    items={t.raw(`detailed.${key}.features`) as string[]}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <PageCta
        title={t('cta.title')}
        description={t('cta.description')}
        button={t('cta.button')}
      />
    </main>
  );
};

export default ServicesPage;

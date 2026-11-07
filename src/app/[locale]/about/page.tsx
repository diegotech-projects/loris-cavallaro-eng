import { useTranslations } from 'next-intl';
import lorisImg1 from 'public/images/portfolio/profile/01_loris_img.jpeg';
import lorisImg2 from 'public/images/portfolio/profile/02_loris_img.jpeg';
import React from 'react';

import { Reveal } from '@/components/landing/motion';
import {
  FramedImage,
  NumberedList,
  PageCta,
  PageHero,
  SectionHeader,
  SheetCell,
  SheetGrid,
} from '@/components/page/PageParts';

const competencies = [
  'buildingDesign',
  'sustainability',
  'safety',
  'tenders',
  'urbanPlanning',
  'consulting',
] as const;

const AboutPage = () => {
  const t = useTranslations('about');
  const tSheet = useTranslations('landing.sheet');
  const tClosing = useTranslations('landing.closing');
  const name = process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro';
  const brand = process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni';

  return (
    <main className="relative bg-ink text-bone">
      <PageHero
        sheet={`${tSheet('short')} A — ${t('hero.title')}`}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image={lorisImg2}
        imageAlt={t('team.director.name')}
        imageClassName="object-cover object-[50%_20%]"
      />

      {/* Company */}
      <section className="py-24 md:py-36">
        <div className="container-custom">
          <SectionHeader index="A.01" title={t('company.title')} />
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="space-y-6 text-lg leading-relaxed text-bone/70 lg:col-span-7">
              <p>
                {name} - {brand} {t('company.description1')}
              </p>
              <p>{t('company.description2')}</p>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-5">
              <blockquote className="border-l-2 border-brick pl-6 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-bone md:text-3xl">
                &ldquo;{t('company.mission')}&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-bone/10 py-24 md:py-36">
        <div className="container-custom">
          <SectionHeader index="A.02" title={t('team.title')} />
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <FramedImage
                src={lorisImg1}
                alt={t('team.director.name')}
                caption={t('team.director.role')}
                imageClassName="object-cover object-top"
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <h3 className="font-display text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                {t('team.director.name')}
              </h3>
              <p className="mt-3 font-display text-xs uppercase tracking-[0.3em] text-brick">
                {t('team.director.role')}
              </p>
              <p className="mt-8 text-lg leading-relaxed text-bone/70">
                {t('team.director.description')}
              </p>
              <div className="mt-10">
                <NumberedList
                  items={t.raw('team.director.qualifications') as string[]}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="border-t border-bone/10 py-24 md:py-36">
        <div className="container-custom">
          <SectionHeader index="A.03" title={t('competencies.title')} />
          <SheetGrid className="md:grid-cols-2 lg:grid-cols-3">
            {competencies.map((key, index) => (
              <SheetCell
                key={key}
                className="group flex min-h-[220px] flex-col justify-between gap-10 transition-colors hover:bg-[#151412]"
              >
                <span className="font-display text-xs tabular-nums tracking-[0.2em] text-brick">
                  A.03.{String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">
                    {t(`competencies.${key}.title`)}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bone/60">
                    {t(`competencies.${key}.description`)}
                  </p>
                </div>
              </SheetCell>
            ))}
          </SheetGrid>
        </div>
      </section>

      <PageCta
        title={tClosing('title')}
        description={tClosing('text')}
        button={tClosing('cta')}
      />
    </main>
  );
};

export default AboutPage;

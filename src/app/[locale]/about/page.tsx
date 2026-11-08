import { useTranslations } from 'next-intl';
import lorisImg1 from 'public/images/portfolio/profile/01_loris_img.jpeg';
import lorisImg2 from 'public/images/portfolio/profile/02_loris_img.jpeg';
import React from 'react';

import {
  AboutHero,
  CompetencyGrid,
  QualificationsTimeline,
  RevealPortrait,
  ScrollStatement,
} from '@/components/about/AboutSections';
import { Reveal } from '@/components/landing/motion';
import { PageCta, SectionHeader } from '@/components/page/PageParts';
import { metadataFor } from '@/utils/pageMetadata';

const competencies = [
  'buildingDesign',
  'sustainability',
  'safety',
  'tenders',
  'urbanPlanning',
  'consulting',
] as const;


export const generateMetadata = metadataFor('about', '/about');

const AboutPage = () => {
  const t = useTranslations('about');
  const tSheet = useTranslations('landing.sheet');
  const tClosing = useTranslations('landing.closing');
  const tFooter = useTranslations('footer');
  const name = process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro';
  const brand = process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni';

  return (
    <main className="relative bg-ink text-bone">
      <AboutHero
        sheet={`${tSheet('short')} A — ${t('hero.title')}`}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        portrait={lorisImg2}
        name={t('team.director.name')}
        role={t('team.director.role')}
        location={tFooter('contact.location')}
        labels={{
          name: t('meta.name'),
          role: t('meta.role'),
          location: t('meta.location'),
        }}
      />

      {/* Studio */}
      <section className="py-24 md:py-40">
        <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="mb-4 font-display text-xs tabular-nums tracking-[0.3em] text-bone/45">
                A.01
              </p>
              <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-5xl">
                {t('company.title')}
              </h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-bone md:text-4xl">
                {name} – {brand} {t('company.description1')}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-bone/60 md:ml-auto">
                {t('company.description2')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-bone/10 py-24 md:py-40">
        <ScrollStatement
          text={t('company.mission')}
          eyebrow={t('meta.mission')}
        />
      </section>

      {/* Team */}
      <section className="border-t border-bone/10 py-24 md:py-40">
        <div className="container-custom">
          <SectionHeader index="A.02" title={t('team.title')} />
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <RevealPortrait
                  src={lorisImg1}
                  alt={t('team.director.name')}
                  caption={t('team.director.role')}
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal>
                <h3 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
                  {t('team.director.name')}
                </h3>
                <p className="mt-5 font-display text-xs uppercase tracking-[0.3em] text-brick">
                  {t('team.director.role')}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-10 text-lg leading-relaxed text-bone/65 md:text-xl">
                  {t('team.director.description')}
                </p>
              </Reveal>
              <p className="mb-4 mt-16 font-display text-[11px] uppercase tracking-[0.25em] text-bone/45">
                {t('meta.qualifications')}
              </p>
              <QualificationsTimeline
                items={t.raw('team.director.qualifications') as string[]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="border-t border-bone/10 py-24 md:py-40">
        <div className="container-custom">
          <SectionHeader index="A.03" title={t('competencies.title')} />
          <CompetencyGrid
            items={competencies.map((key) => ({
              key,
              title: t(`competencies.${key}.title`),
              description: t(`competencies.${key}.description`),
            }))}
          />
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

import { ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import Appointment from '@/components/Contacts';
import {
  NumberedList,
  PageHero,
  SectionHeader,
  SheetCell,
  SheetGrid,
} from '@/components/page/PageParts';
import { metadataFor } from '@/utils/pageMetadata';


export const generateMetadata = metadataFor('contact', '/contact');

const ContactPage = () => {
  const t = useTranslations('contactPage');
  const tSheet = useTranslations('landing.sheet');

  const listItems = (group: 'qualifications' | 'competencies') =>
    [1, 2, 3, 4].map((n) => t(`professionalInfo.${group}.item${n}`));

  return (
    <main className="relative bg-ink text-bone">
      <PageHero
        sheet={`${tSheet('short')} C · ${t('hero.title')}`}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      <section className="py-20 md:py-32">
        <Appointment />
      </section>

      {/* Professional info */}
      <section className="border-t border-bone/10 py-24 md:py-32">
        <div className="container-custom">
          <SectionHeader index="C.02" title={t('professionalInfo.title')} />
          <SheetGrid className="md:grid-cols-2">
            {(['qualifications', 'competencies'] as const).map(
              (group, index) => (
                <SheetCell key={group}>
                  <p className="mb-6 font-display text-[11px] uppercase tracking-[0.25em] text-bone/50">
                    {t(`professionalInfo.${group}.title`)}
                  </p>
                  <NumberedList
                    items={listItems(group)}
                    prefix={`C.02.${index + 1}`}
                  />
                </SheetCell>
              ),
            )}
          </SheetGrid>
        </div>
      </section>

      {/* Documents */}
      <section className="border-t border-bone/10 py-24 md:py-32">
        <div className="container-custom">
          <SectionHeader
            index="C.03"
            title={t('documents.title')}
            description={t('documents.description')}
          />
          <a
            href="/images/portfolio/profile/cv_ing_loris_cavallaro.pdf"
            download
            className="group flex items-center justify-between border border-bone/15 p-6 font-display text-lg font-semibold transition-colors hover:border-bone hover:bg-bone hover:text-ink md:px-8"
          >
            <span className="flex items-center gap-5">
              <span className="font-display text-xs font-normal tracking-[0.2em] text-brick group-hover:text-ink">
                PDF
              </span>
              {t('documents.downloadCV')}
            </span>
            <ArrowDown
              className="size-5 transition-transform group-hover:translate-y-1"
              aria-hidden
            />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

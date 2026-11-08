import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { commercialLines } from '@/data/lines';
import { organizationGraph } from '@/utils/schema';
import { localizedUrl } from '@/utils/seo';

import JsonLd from './JsonLd';

// Site-wide entity graph (business, founder, website), rendered on the server
// in every page so crawlers that skip JavaScript still see it
export default function StructuredData() {
  const locale = useLocale();
  const t = useTranslations('seo.structuredData');
  const tPages = useTranslations('seo.pages');
  const tLines = useTranslations('lines');

  return (
    <JsonLd
      data={organizationGraph({
        locale,
        description: tPages('home.description'),
        founderJobTitle: t('person.jobTitle'),
        founderDescription: t('person.description'),
        knowsAbout: [
          ...commercialLines.map((line) => tLines(`${line.key}.title`)),
          ...(t.raw('knowsAbout') as string[]),
        ],
        services: commercialLines.map((line) => ({
          name: tLines(`${line.key}.title`),
          url: localizedUrl(locale, `/${line.slug}`),
        })),
      })}
    />
  );
}

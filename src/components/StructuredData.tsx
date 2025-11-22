'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

export default function StructuredData() {
  const t = useTranslations('seo.structuredData');
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://www.ingloriscavallarocostruzioni.com';

  // Get values from environment variables
  const engineerName =
    process.env.NEXT_PUBLIC_ENGINEER_NAME || 'Loris Cavallaro';
  const companyName =
    process.env.NEXT_PUBLIC_COMPANY_NAME ||
    'Loris Cavallaro - Ingegneria & Costruzioni';
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE
    ? `+39-${process.env.NEXT_PUBLIC_COMPANY_PHONE}`
    : undefined;
  const latitude = process.env.NEXT_PUBLIC_LATITUDINE;
  const longitude = process.env.NEXT_PUBLIC_LONGITUDINE;

  // Professional Service Schema
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Ing. ${engineerName} - ${t('professionalService.name')}`,
    image: `${baseUrl}/images/og-image.jpg`,
    description: t('professionalService.description'),
    url: baseUrl,
    ...(phone && { telephone: phone }),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
      addressRegion: 'Sicilia',
    },
    ...(latitude &&
      longitude && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude,
          longitude,
        },
      }),
    areaServed: {
      '@type': 'Country',
      name: 'Italy',
    },
    serviceType: t.raw('serviceTypes') as string[],
  };

  // Person Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: engineerName,
    jobTitle: t('person.jobTitle'),
    url: baseUrl,
    image: `${baseUrl}/images/og-image.jpg`,
    sameAs: [
      // Add social media profiles from env if available
      // process.env.NEXT_PUBLIC_LINKEDIN_URL,
      // process.env.NEXT_PUBLIC_TWITTER_URL,
    ].filter(Boolean),
    description: t('person.description'),
    knowsAbout: t.raw('knowsAbout') as string[],
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: companyName,
    url: baseUrl,
    description: t('professionalService.description'),
    inLanguage: ['it-IT', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/it?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

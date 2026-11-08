// schema.org builders. Everything hangs off stable @ids so Google and AI
// engines can join the business, its founder, services and pages into one
// entity graph.

import type { CommercialLine } from '@/data/lines';

import { absoluteUrl, BUSINESS, localizedUrl } from './seo';

export const ORG_ID = absoluteUrl('/#organization');
export const FOUNDER_ID = absoluteUrl('/#founder');
export const WEBSITE_ID = absoluteUrl('/#website');

export type JsonLdObject = Record<string, unknown>;

const areaServed = () =>
  BUSINESS.areaServed.map((area) => ({ '@type': area.type, name: area.name }));

const phone = () =>
  BUSINESS.phone ? `+39 ${BUSINESS.phone.replace(/\s/g, '')}` : undefined;

type OrganizationInput = {
  locale: string;
  description: string;
  founderJobTitle: string;
  founderDescription: string;
  knowsAbout: string[];
  services: { name: string; url: string }[];
};

export const organizationGraph = ({
  locale,
  description,
  founderJobTitle,
  founderDescription,
  knowsAbout,
  services,
}: OrganizationInput): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'GeneralContractor'],
      '@id': ORG_ID,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      alternateName: [`Ing. ${BUSINESS.founder}`, BUSINESS.legalName],
      description,
      url: localizedUrl(locale),
      logo: absoluteUrl('/icon.ico'),
      image: absoluteUrl(BUSINESS.ogImage),
      email: BUSINESS.email,
      ...(phone() && { telephone: phone() }),
      ...(BUSINESS.vat && { vatID: `IT${BUSINESS.vat}` }),
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        addressCountry: BUSINESS.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: Number(BUSINESS.latitude),
        longitude: Number(BUSINESS.longitude),
      },
      hasMap: `https://www.google.com/maps?q=${BUSINESS.latitude},${BUSINESS.longitude}`,
      areaServed: areaServed(),
      founder: { '@id': FOUNDER_ID },
      employee: { '@id': FOUNDER_ID },
      knowsAbout,
      sameAs: BUSINESS.sameAs,
      makesOffer: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.name, url: service.url },
      })),
    },
    {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: `Ing. ${BUSINESS.founder}`,
      givenName: BUSINESS.founder.split(' ')[0],
      familyName: BUSINESS.founder.split(' ').slice(1).join(' '),
      honorificPrefix: 'Ing.',
      jobTitle: founderJobTitle,
      description: founderDescription,
      worksFor: { '@id': ORG_ID },
      knowsAbout,
      sameAs: [BUSINESS.sameAs[0]],
      url: localizedUrl(locale, '/about'),
      image: absoluteUrl('/images/portfolio/profile/02_loris_img.jpeg'),
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: localizedUrl(locale),
      name: BUSINESS.name,
      inLanguage: locale === 'en' ? 'en' : 'it',
      publisher: { '@id': ORG_ID },
    },
  ],
});

type ServiceInput = {
  locale: string;
  line: CommercialLine;
  name: string;
  description: string;
  serviceType: string;
  tiers: { name: string; description: string }[];
};

export const serviceSchema = ({
  locale,
  line,
  name,
  description,
  serviceType,
  tiers,
}: ServiceInput): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': localizedUrl(locale, `/${line.slug}#service`),
  name,
  description,
  serviceType,
  url: localizedUrl(locale, `/${line.slug}`),
  image: absoluteUrl(line.cover),
  provider: { '@id': ORG_ID },
  areaServed: areaServed(),
  offers: line.tiers.map((tier, index) => ({
    '@type': 'Offer',
    name: tiers[index]?.name,
    description: tiers[index]?.description,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: localizedUrl(locale, `/${line.slug}`),
    ...(tier.price !== null && {
      priceSpecification: {
        '@type': tier.unit === 'sqm' ? 'UnitPriceSpecification' : 'PriceSpecification',
        price: tier.price,
        minPrice: tier.price,
        priceCurrency: 'EUR',
        ...(tier.unit === 'sqm' && { unitCode: 'MTK', unitText: 'm²' }),
      },
    }),
  })),
});

export const faqSchema = (items: { q: string; a: string }[]): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
});

export const breadcrumbSchema = (
  items: { name: string; url: string }[],
): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

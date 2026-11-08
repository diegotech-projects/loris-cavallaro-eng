import type { Metadata } from 'next';

// Single source of truth for URLs, locales and local-SEO facts used by
// metadata, sitemap, robots, structured data and llms.txt.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ingloriscavallarocostruzioni.com'
).replace(/\/$/, '');

export const LOCALES = ['it', 'en'] as const;
export type SiteLocale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: SiteLocale = 'it';

const OG_LOCALE: Record<SiteLocale, string> = { it: 'it_IT', en: 'en_GB' };

// TODO: confirm the studio's city/address with Loris. Messina is inferred from
// the map coordinates; the street address is not published yet.
export const BUSINESS = {
  name: 'Cavallaro Ingegneria e Costruzioni',
  legalName:
    process.env.NEXT_PUBLIC_COMPANY_NAME ||
    'Loris Cavallaro - Ingegneria & Costruzioni',
  founder: process.env.NEXT_PUBLIC_ENGINEER_NAME || 'Loris Cavallaro',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'loriscavallaro22@gmail.com',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '',
  vat: process.env.NEXT_PUBLIC_VAT_NUMBER || '',
  city: process.env.NEXT_PUBLIC_CITY || 'Messina',
  province: 'ME',
  region: 'Sicilia',
  country: 'IT',
  latitude: process.env.NEXT_PUBLIC_LATITUDINE || '38.1937571',
  longitude: process.env.NEXT_PUBLIC_LONGITUDINE || '15.5542082',
  sameAs: [
    'https://www.linkedin.com/in/ing-loris-cavallaro-a70417277',
    'https://www.facebook.com/share/1AYBqQq7Hm/',
    'https://www.edilnet.it/aziendeedili/loris-cavallaro-ingegneria-e-costruzioni-593344/',
  ],
  // Local first, then the wider area: Google uses this for "near me" intent
  areaServed: [
    { type: 'City', name: 'Messina' },
    { type: 'AdministrativeArea', name: 'Città metropolitana di Messina' },
    { type: 'Place', name: 'Isole Eolie' },
    { type: 'City', name: 'Milazzo' },
    { type: 'City', name: 'Catania' },
    { type: 'City', name: 'Palermo' },
    { type: 'AdministrativeArea', name: 'Sicilia' },
    { type: 'Country', name: 'Italia' },
  ],
  ogImage: '/images/og-image.jpg',
};

export const absoluteUrl = (path = '') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`.replace(/\/$/, '');

export const localizedUrl = (locale: string, path = '') =>
  absoluteUrl(`/${locale}${path === '/' ? '' : path}`);

// Canonical + hreflang for a route that exists in every locale
export const alternatesFor = (locale: string, path = '') => ({
  canonical: localizedUrl(locale, path),
  languages: {
    ...Object.fromEntries(LOCALES.map((l) => [l, localizedUrl(l, path)])),
    'x-default': localizedUrl(DEFAULT_LOCALE, path),
  },
});

type PageMetadataInput = {
  locale: string;
  path: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
};

export const pageMetadata = ({
  locale,
  path,
  title,
  description,
  image = BUSINESS.ogImage,
  noIndex,
}: PageMetadataInput): Metadata => {
  const ogLocale = OG_LOCALE[locale as SiteLocale] ?? OG_LOCALE.it;
  return {
    title: { absolute: title },
    description,
    alternates: alternatesFor(locale, path),
    openGraph: {
      type: 'website',
      url: localizedUrl(locale, path),
      siteName: BUSINESS.name,
      title,
      description,
      locale: ogLocale,
      alternateLocale: Object.values(OG_LOCALE).filter((l) => l !== ogLocale),
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)],
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
};

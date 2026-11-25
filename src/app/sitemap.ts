import type { MetadataRoute } from 'next';

import { commercialLines } from '@/data/lines';
import { PRACTICES_SLUG } from '@/data/practices';
import { LOCALES, localizedUrl } from '@/utils/seo';

type Route = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

// Commercial line pages rank right after the home: they target the searches
// that bring clients ("fotovoltaico Messina", "ristrutturazioni chiavi in mano")
const routes: Route[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  ...commercialLines.map((line) => ({
    path: `/${line.slug}`,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  })),
  { path: `/${PRACTICES_SLUG}`, priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cookie-policy', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: localizedUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: locale === 'it' ? route.priority : route.priority * 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, localizedUrl(l, route.path)]),
        ),
      },
    })),
  );
}

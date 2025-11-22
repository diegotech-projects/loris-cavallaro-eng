import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ingloriscavallarocostruzioni.com';
  const currentDate = new Date();

  // Define available locales
  const locales = ['it', 'en'];

  // Generate entries for each locale
  const localeEntries: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/${locale}#services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}#projects`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}#reviews`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/${locale}#faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/${locale}#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]);

  return [
    // Root redirect
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...localeEntries,
  ];
}

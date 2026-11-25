import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { pageMetadata } from './seo';

type MetadataProps = { params: { locale: string } };

// generateMetadata factory: title/description from messages `seo.pages.<key>`
export const metadataFor =
  (key: string, path: string, options: { noIndex?: boolean } = {}) =>
  async ({ params }: MetadataProps): Promise<Metadata> => {
    const { locale } = params;
    const t = await getTranslations({ locale, namespace: 'seo.pages' });
    return pageMetadata({
      locale,
      path,
      title: t(`${key}.title`),
      description: t(`${key}.description`),
      ...options,
    });
  };

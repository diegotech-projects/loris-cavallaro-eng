import '@/styles/global.css';

import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import React from 'react';

import GoogleTags from '@/components/GoogleTags';
import { AppConfig } from '@/utils/AppConfig';
import { BUSINESS, SITE_URL } from '@/utils/seo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
});

// Defaults only: every page sets its own title, description, canonical,
// hreflang and Open Graph through generateMetadata (see utils/seo.ts)
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: AppConfig.title,
    template: `%s | ${BUSINESS.name}`,
  },
  description: AppConfig.description,
  applicationName: BUSINESS.name,
  authors: [{ name: `Ing. ${BUSINESS.founder}` }],
  creator: `Ing. ${BUSINESS.founder}`,
  publisher: BUSINESS.name,
  category: 'construction',
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'geo.region': 'IT-ME',
    'geo.placename': `${BUSINESS.city}, ${BUSINESS.region}`,
    'geo.position': `${BUSINESS.latitude};${BUSINESS.longitude}`,
    ICBM: `${BUSINESS.latitude}, ${BUSINESS.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: '#0e0d0c',
  colorScheme: 'dark',
};

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  // The locale comes from the next-intl middleware, so /en pages declare English
  const locale = await getLocale();

  return (
    // suppressHydrationWarning: an inline script may add "intro-seen" to <html>
    // before React hydrates (see LandingShell)
    <html
      lang={locale}
      className={`${inter.variable} ${interTight.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-themeBackground">
        {children}
        {/* Google Analytics / Ads: loaded only after cookie consent */}
        <GoogleTags />
      </body>
    </html>
  );
}

// Enable edge runtime, but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';

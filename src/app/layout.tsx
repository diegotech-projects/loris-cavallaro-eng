import '@/styles/global.css';

import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import Script from 'next/script';
import { getLocale } from 'next-intl/server';
import React from 'react';

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
    <html lang={locale} className={`${inter.variable} ${interTight.variable}`}>
      <body className="min-h-screen bg-themeBackground">
        {children}
        {/* Google Ads / Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17610258605"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17610258605');
          `}
        </Script>
      </body>
    </html>
  );
}

// Enable edge runtime, but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';

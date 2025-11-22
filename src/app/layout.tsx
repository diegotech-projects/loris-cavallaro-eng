import '@/styles/global.css';

import type { Metadata } from 'next';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  title: {
    default: AppConfig.title,
    template: `%s | ${AppConfig.site_name}`,
  },
  description: AppConfig.description,
  keywords: [
    'Loris Cavallaro',
    'Ing. Loris Cavallaro',
    'ingegnere loris cavallaro',
    'studio tecnico loris cavallaro',
    'studio tecnico ingegneria',
    'ing Cavallaro',
    'ingegnere loris cavallaro',
    'ingegnere professionista',
    'consulente tecnico',
    'progettista edile',
    'progettista strutturale',
    'ingegnere civile',
    'ingegneria ambientale',
    'progettazione edile',
    'sostenibilità',
    'sicurezza cantieri',
    'consulenza tecnica',
    'bandi di gara',
    'ingegneria Sicilia',
  ],
  authors: [{ name: 'Loris Cavallaro' }],
  creator: 'Loris Cavallaro',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['en_US'],
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ingloriscavallarocostruzioni.com',
    siteName: AppConfig.site_name,
    title: AppConfig.title,
    description: AppConfig.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: AppConfig.site_name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: AppConfig.title,
    description: AppConfig.description,
    images: ['/images/og-image.jpg'],
  },
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
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-themeBackground">{children}</body>
    </html>
  );
}

// Enable edge runtime, but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';

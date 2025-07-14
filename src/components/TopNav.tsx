'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { BsBuilding } from 'react-icons/bs';

import { Link as LocalizedLink, usePathname } from '@/i18n/navigation';

import MenuBar from './MenuBar';

const TopNav = () => {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="container-custom text-themeTextPrimary">
      <div className="wrapper flex w-full items-center justify-between">
        <div className="flex w-[25%] items-center gap-1 font-bold 2xl:text-2xl">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-bold leading-none text-themeTextPrimary">
                {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'}
              </span>
              <span className="text-xs font-medium uppercase tracking-wide text-themeTextSecondary">
                {process.env.NEXT_PUBLIC_SIGLA || 'Ing. Civile'}
              </span>
            </div>
            <BsBuilding className="text-themeSecondary" />
          </Link>
        </div>
        <div className="hidden w-2/5 items-center justify-center gap-x-5 text-sm font-semibold lg:flex 2xl:gap-x-10 2xl:text-base">
          <LocalizedLink
            className={`anchor transition-colors ${
              pathname === '/'
                ? 'text-themeSecondary underline underline-offset-4'
                : 'hover:text-themeSecondary'
            }`}
            href="/"
          >
            {t('home')}
          </LocalizedLink>
          <LocalizedLink
            className={`anchor transition-colors ${
              pathname === '/about'
                ? 'text-themeSecondary underline underline-offset-4'
                : 'hover:text-themeSecondary'
            }`}
            href="/about"
          >
            {t('about')}
          </LocalizedLink>
          <LocalizedLink
            className={`anchor transition-colors ${
              pathname === '/services'
                ? 'text-themeSecondary underline underline-offset-4'
                : 'hover:text-themeSecondary'
            }`}
            href="/services"
          >
            {t('services')}
          </LocalizedLink>
          <LocalizedLink
            className={`anchor transition-colors ${
              pathname === '/projects'
                ? 'text-themeSecondary underline underline-offset-4'
                : 'hover:text-themeSecondary'
            }`}
            href="/projects"
          >
            {t('projects')}
          </LocalizedLink>
          <LocalizedLink
            className={`anchor transition-colors ${
              pathname === '/faq'
                ? 'text-themeSecondary underline underline-offset-4'
                : 'hover:text-themeSecondary'
            }`}
            href="/faq"
          >
            {t('faq')}
          </LocalizedLink>
        </div>

        {/* Language Toggle */}
        <div className="hidden items-center gap-2 lg:flex">
          <LocalizedLink
            href={pathname}
            locale="it"
            className={`flex items-center gap-1 rounded px-2 py-1 transition-colors ${
              locale === 'it'
                ? 'bg-themeSecondary text-themeSurface'
                : 'hover:bg-themeSurfaceLight'
            }`}
          >
            <span className="text-lg">🇮🇹</span>
            <span className="text-xs font-medium">IT</span>
          </LocalizedLink>
          <LocalizedLink
            href={pathname}
            locale="en"
            className={`flex items-center gap-1 rounded px-2 py-1 transition-colors ${
              locale === 'en'
                ? 'bg-themeSecondary text-themeSurface'
                : 'hover:bg-themeSurfaceLight'
            }`}
          >
            <span className="text-lg">🇬🇧</span>
            <span className="text-xs font-medium">EN</span>
          </LocalizedLink>
        </div>

        <div className="hidden w-[30%] items-center justify-end gap-x-5 text-sm font-semibold lg:flex 2xl:gap-x-10 2xl:text-base">
          <LocalizedLink
            href="/contact"
            className="anchor transition-colors hover:text-themeSecondary"
          >
            {t('contact')}
          </LocalizedLink>
          <LocalizedLink
            href="/contact#contact-form"
            className="rounded-full bg-themeAccent px-4 py-3 text-themeSurface opacity-80 transition-colors hover:bg-themeSecondary"
          >
            {t('requestQuote')}
          </LocalizedLink>
        </div>
        <div className="lg:hidden">
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default TopNav;

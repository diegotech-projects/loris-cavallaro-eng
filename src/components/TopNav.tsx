'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { BsBuilding } from 'react-icons/bs';
import { Link as LocalizedLink } from '@/i18n/navigation';

import MenuBar from './MenuBar';

const TopNav = () => {
  const t = useTranslations('navigation');
  const locale = useLocale();
  
  return (
    <div className="container-custom text-themeTextPrimary">
      <div className="wrapper flex w-full items-center justify-between">
        <div className="flex w-[25%] items-center gap-1 font-bold 2xl:text-2xl">
          <Link href="/" className="flex items-center gap-2">
            XYZENGINEERING <BsBuilding className="text-themeSecondary" />
          </Link>
        </div>
        <div className="hidden w-[40%] items-center justify-center gap-x-5 text-sm font-semibold lg:flex 2xl:gap-x-10 2xl:text-base">
          <Link className="anchor hover:text-themeSecondary transition-colors" href="/">
            Home
          </Link>
          <Link className="anchor hover:text-themeSecondary transition-colors" href="/about">
            Chi Siamo
          </Link>
          <Link className="anchor hover:text-themeSecondary transition-colors" href="/services">
            Servizi
          </Link>
          <Link className="anchor hover:text-themeSecondary transition-colors" href="/projects">
            Progetti
          </Link>
        </div>
        
        {/* Language Toggle */}
        <div className="hidden lg:flex items-center gap-2">
          <LocalizedLink 
            href="/" 
            locale="it"
            className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
              locale === 'it' 
                ? 'bg-themeSecondary text-themeSurface' 
                : 'hover:bg-themeSurfaceLight'
            }`}
          >
            <span className="text-lg">🇮🇹</span>
            <span className="text-xs font-medium">IT</span>
          </LocalizedLink>
          <LocalizedLink 
            href="/" 
            locale="en"
            className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
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
          <Link href="/contact" className="anchor hover:text-themeSecondary transition-colors">
            Contatti
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-themeSecondary px-4 py-3 text-themeSurface hover:bg-themeAccent transition-colors"
          >
            Richiedi Preventivo
          </Link>
        </div>
        <div className="lg:hidden">
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default TopNav;

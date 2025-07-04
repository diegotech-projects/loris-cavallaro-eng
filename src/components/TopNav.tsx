'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BsBuilding } from 'react-icons/bs';

import MenuBar from './MenuBar';

const TopNav = () => {
  const t = useTranslations('navigation');
  
  return (
    <div className="container-custom text-themeTextPrimary">
      <div className="wrapper flex w-full items-center justify-between">
        <div className="flex w-[30%] items-center gap-1 font-bold 2xl:text-2xl">
          <Link href="/" className="flex items-center gap-2">
            Loris Cavallaro <BsBuilding className="text-themeSecondary" />
          </Link>
        </div>
        <div className="hidden w-[40%] items-center justify-center gap-x-5 text-sm font-semibold lg:flex 2xl:gap-x-10 2xl:text-base">
          <Link className="anchor hover:text-themeSecondary transition-colors" href="/">
            Home
          </Link>
          <Link className="anchor hover:text-themeSecondary transition-colors" href="/about">
            Chi Sono
          </Link>
          <Link className="anchor hover:text-themeSecondary transition-colors" href="/services">
            Servizi
          </Link>
          <Link className="anchor hover:text-themeSecondary transition-colors" href="/projects">
            Progetti
          </Link>
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

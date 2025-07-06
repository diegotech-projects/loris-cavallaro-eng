import Link from 'next/link';
import React from 'react';
import { BsBuilding } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useLocale } from 'next-intl';
import { Link as LocalizedLink } from '@/i18n/navigation';

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  const locale = useLocale();

  const list = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Chi Siamo',
      href: '/about',
    },
    {
      title: 'Servizi',
      href: '/services',
    },
    {
      title: 'Progetti',
      href: '/projects',
    },
    {
      title: 'Contatti',
      href: '/contact',
    },
  ];

  return (
    <div className="h-screen w-full divide-y-2 divide-neutral-100 overflow-y-auto bg-themeSurface py-2 shadow-lg ring-1 transition">
      <div className="px-5 py-2">
        <div className="flex items-center gap-2 font-bold text-themeTextPrimary text-lg">
          <BsBuilding className="text-themeSecondary" />
          XYZENGINEERING_mob
        </div>
        <button
          type="button"
          className="absolute right-2 top-2 p-1 text-themeTextPrimary"
          onKeyDownCapture={onClickClose}
          onClick={onClickClose}
        >
          <MdClose />
        </button>
        
        {/* Language Toggle Mobile */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-themeTextSecondary">Lingua:</span>
          <LocalizedLink 
            href="/" 
            locale="it"
            onClick={onClickClose}
            className={`flex items-center gap-1 px-3 py-2 rounded transition-colors ${
              locale === 'it' 
                ? 'bg-themeSecondary text-themeSurface' 
                : 'bg-themeSurfaceLight text-themeTextPrimary'
            }`}
          >
            <span className="text-base">🇮🇹</span>
            <span className="text-sm font-medium">Italiano</span>
          </LocalizedLink>
          <LocalizedLink 
            href="/" 
            locale="en"
            onClick={onClickClose}
            className={`flex items-center gap-1 px-3 py-2 rounded transition-colors ${
              locale === 'en' 
                ? 'bg-themeSecondary text-themeSurface' 
                : 'bg-themeSurfaceLight text-themeTextPrimary'
            }`}
          >
            <span className="text-base">🇬🇧</span>
            <span className="text-sm font-medium">English</span>
          </LocalizedLink>
        </div>
      </div>
      
      <ul className="flex flex-col space-y-5 px-5 py-6">
        {list.map((item) => (
          <Link
            onClick={onClickClose}
            href={item.href}
            key={item.title}
            className="text-themeTextPrimary font-medium hover:text-themeSecondary transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </ul>
      
      <div className="px-5 py-6">
        <Link
          onClick={onClickClose}
          href="/contact#contact-form"
          className="rounded-full bg-themeSecondary px-6 py-3 text-themeSurface font-semibold hover:bg-themeAccent transition-colors"
        >
          Richiedi Preventivo
        </Link>
      </div>
    </div>
  );
};

export default NavMobile;

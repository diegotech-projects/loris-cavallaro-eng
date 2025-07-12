import React from 'react';
import { BsBuilding } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useLocale, useTranslations } from 'next-intl';
import { Link as LocalizedLink, usePathname } from '@/i18n/navigation';

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('navigation');

  const list = [
    {
      title: t('home'),
      href: '/',
    },
    {
      title: t('about'),
      href: '/about',
    },
    {
      title: t('services'),
      href: '/services',
    },
    {
      title: t('projects'),
      href: '/projects',
    },
    {
      title: t('faq'),
      href: '/faq',
    },
    {
      title: t('contact'),
      href: '/contact',
    },
  ];

  return (
    <div className="h-screen w-full divide-y-2 divide-neutral-100 overflow-y-auto bg-themeSurface py-2 shadow-lg ring-1 transition">
      <div className="px-5 py-2">
        <div className="flex items-center gap-2 font-bold text-themeTextPrimary text-lg">
          <BsBuilding className="text-themeSecondary" />
            <div className="flex flex-col ml-1">
              <span className="font-bold text-themeTextPrimary leading-none">{process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'}</span>
              <span className="text-xs text-themeTextSecondary font-medium uppercase tracking-wide">{process.env.NEXT_PUBLIC_SIGLA || 'Ing. Civile'}</span>
            </div>
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
          <span className="text-sm text-themeTextSecondary">{t('language')}:</span>
          <LocalizedLink 
            href={pathname} 
            locale="it"
            onClick={onClickClose}
            className={`flex items-center gap-1 px-3 py-2 rounded transition-colors ${
              locale === 'it' 
                ? 'bg-themeSecondary text-themeSurface' 
                : 'bg-themeSurfaceLight text-themeTextPrimary'
            }`}
          >
            <span className="text-base">🇮🇹</span>
            <span className="text-sm font-medium">{t('italian')}</span>
          </LocalizedLink>
          <LocalizedLink 
            href={pathname} 
            locale="en"
            onClick={onClickClose}
            className={`flex items-center gap-1 px-3 py-2 rounded transition-colors ${
              locale === 'en' 
                ? 'bg-themeSecondary text-themeSurface' 
                : 'bg-themeSurfaceLight text-themeTextPrimary'
            }`}
          >
            <span className="text-base">🇬🇧</span>
            <span className="text-sm font-medium">{t('english')}</span>
          </LocalizedLink>
        </div>
      </div>
      
      <ul className="flex flex-col space-y-5 px-5 py-6">
        {list.map((item) => (
          <LocalizedLink
            onClick={onClickClose}
            href={item.href}
            key={item.title}
            className="text-themeTextPrimary font-medium hover:text-themeSecondary transition-colors"
          >
            {item.title}
          </LocalizedLink>
        ))}
      </ul>
      
      <div className="px-5 py-6">
        <LocalizedLink
          onClick={onClickClose}
          href="/contact#contact-form"
          className="rounded-full bg-themeSecondary px-6 py-3 text-themeSurface font-semibold hover:bg-themeAccent transition-colors"
        >
          {t('requestQuote')}
        </LocalizedLink>
      </div>
    </div>
  );
};

export default NavMobile;

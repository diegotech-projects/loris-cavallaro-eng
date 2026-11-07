import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { MdClose } from 'react-icons/md';

import { Link as LocalizedLink, usePathname } from '@/i18n/navigation';

import BrandMark from './BrandMark';

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
        <BrandMark />
        <button
          type="button"
          className="absolute right-2 top-2 p-1 text-themeTextPrimary"
          onKeyDownCapture={onClickClose}
          onClick={onClickClose}
        >
          <MdClose />
        </button>

        {/* Language Toggle Mobile */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-themeTextSecondary">
            {t('language')}:
          </span>
          <LocalizedLink
            href={pathname}
            locale="it"
            onClick={onClickClose}
            className={`flex items-center gap-1 rounded px-3 py-2 transition-colors ${
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
            className={`flex items-center gap-1 rounded px-3 py-2 transition-colors ${
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
            className="font-medium text-themeTextPrimary transition-colors hover:text-themeSecondary"
          >
            {item.title}
          </LocalizedLink>
        ))}
      </ul>

      <div className="px-5 py-6">
        <LocalizedLink
          onClick={onClickClose}
          href="/contact#contact-form"
          className="rounded-full bg-themeSecondary px-6 py-3 font-semibold text-themeSurface transition-colors hover:bg-themeAccent"
        >
          {t('requestQuote')}
        </LocalizedLink>
      </div>
    </div>
  );
};

export default NavMobile;

'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Link as LocalizedLink, usePathname } from '@/i18n/navigation';

import BrandMark from './BrandMark';
import MenuBar from './MenuBar';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' },
] as const;

const TopNav = () => {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="container-custom text-themeTextPrimary">
      <div className="flex w-full items-center justify-between gap-6">
        <LocalizedLink href="/" aria-label="Cavallaro Ingegneria e Costruzioni">
          <BrandMark />
        </LocalizedLink>

        <nav className="hidden items-center gap-x-7 text-[13px] lg:flex 2xl:gap-x-9">
          {navItems.map((item) => (
            <LocalizedLink
              key={item.key}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? 'text-themeTextPrimary'
                  : 'text-themeTextSecondary hover:text-themeTextPrimary'
              }`}
            >
              {t(item.key)}
            </LocalizedLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-1 text-xs">
            {(['it', 'en'] as const).map((lang) => (
              <LocalizedLink
                key={lang}
                href={pathname}
                locale={lang}
                className={`rounded-full px-2 py-1 uppercase tracking-wide transition-colors ${
                  locale === lang
                    ? 'text-themeTextPrimary'
                    : 'text-themeTextSecondary hover:text-themeTextPrimary'
                }`}
              >
                {lang}
              </LocalizedLink>
            ))}
          </div>
          <LocalizedLink
            href="/contact#contact-form"
            className="rounded-full bg-bone px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:bg-volt"
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

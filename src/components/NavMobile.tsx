import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { MdClose } from 'react-icons/md';

import { Link as LocalizedLink, usePathname } from '@/i18n/navigation';

import BrandMark from './BrandMark';

export interface NavMobileProps {
  onClickClose?: () => void;
}

const items = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' },
] as const;

// Full-screen menu laid out like a drawing legend: numbered rows on hairlines
const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('navigation');

  return (
    <div className="flex h-dvh w-full flex-col overflow-y-auto bg-ink text-bone">
      <div className="flex items-center justify-between border-b border-bone/10 px-5 py-4">
        <BrandMark />
        <button
          type="button"
          className="flex size-10 items-center justify-center border border-bone/20 text-xl"
          onClick={onClickClose}
          aria-label="Close menu"
        >
          <MdClose />
        </button>
      </div>

      <nav className="flex-1 px-5 py-6">
        <ol>
          {items.map((item, index) => (
            <li key={item.key} className="border-b border-bone/10">
              <LocalizedLink
                onClick={onClickClose}
                href={item.href}
                className={`flex items-baseline gap-5 py-4 font-display text-3xl font-semibold tracking-[-0.03em] transition-colors ${
                  pathname === item.href ? 'text-bone' : 'text-bone/55'
                }`}
              >
                <span className="w-6 font-display text-xs font-normal tabular-nums tracking-normal text-bone/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {t(item.key)}
              </LocalizedLink>
            </li>
          ))}
        </ol>
      </nav>

      <div className="flex items-center justify-between gap-4 border-t border-bone/10 p-5">
        <div className="flex items-center gap-1 font-display text-xs uppercase tracking-[0.2em]">
          {(['it', 'en'] as const).map((lang) => (
            <LocalizedLink
              key={lang}
              href={pathname}
              locale={lang}
              onClick={onClickClose}
              className={`px-2 py-1 ${
                locale === lang ? 'text-bone' : 'text-bone/40'
              }`}
            >
              {lang}
            </LocalizedLink>
          ))}
        </div>
        <LocalizedLink
          onClick={onClickClose}
          href="/contact#contact-form"
          className="rounded-full bg-bone px-5 py-3 text-sm font-semibold text-ink"
        >
          {t('requestQuote')}
        </LocalizedLink>
      </div>
    </div>
  );
};

export default NavMobile;

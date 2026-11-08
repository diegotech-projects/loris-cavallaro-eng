'use client';

import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { commercialLines } from '@/data/lines';
import { Link as LocalizedLink } from '@/i18n/navigation';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' },
] as const;

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ing-loris-cavallaro-a70417277',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1AYBqQq7Hm/',
  },
];

const wordmark = 'CAVALLARO'.split('');

const columnTitle =
  'mb-5 font-display text-[11px] uppercase tracking-[0.25em] text-bone/45';
const linkClass =
  'group flex items-baseline gap-3 py-1.5 text-bone/75 transition-colors hover:text-bone';

function FooterComp() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tLines = useTranslations('lines');
  const currentYear = new Date().getFullYear();
  const name = process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro';
  const brand = process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni';
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'loriscavallaro22@gmail.com';
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '380 147 7121';
  const vat = t('legal.vatNumber')
    .replace('[DA INSERIRE]', process.env.NEXT_PUBLIC_VAT_NUMBER || '[DA INSERIRE]')
    .replace(
      '[TO BE INSERTED]',
      process.env.NEXT_PUBLIC_VAT_NUMBER || '[TO BE INSERTED]',
    );

  return (
    <footer className="container-custom pt-20 text-bone md:pt-28">
      <div className="grid gap-14 pb-16 lg:grid-cols-12 lg:gap-16 md:pb-24">
        {/* Studio */}
        <div className="lg:col-span-4">
          <p className="font-display text-lg font-semibold tracking-[0.18em]">
            CAVALLARO
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-bone/45">
            Ingegneria e Costruzioni
          </p>
          <p className="mt-8 max-w-sm leading-relaxed text-bone/60">
            {t('companyDescription')}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-display text-sm text-bone/75 transition-colors hover:text-bone"
              >
                {social.label}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:rotate-45" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          {/* Navigation */}
          <nav aria-label={t('navigation.title')}>
            <p className={columnTitle}>{t('navigation.title')}</p>
            {navItems.map((item, index) => (
              <LocalizedLink key={item.key} href={item.href} className={linkClass}>
                <span className="w-5 font-display text-[10px] tabular-nums text-bone/35 transition-colors group-hover:text-brick">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {tNav(item.key)}
              </LocalizedLink>
            ))}
          </nav>

          {/* Turnkey lines */}
          <div>
            <p className={columnTitle}>{t('lines.title')}</p>
            {commercialLines.map((line) => (
              <LocalizedLink
                key={line.key}
                href={`/${line.slug}`}
                className={linkClass}
              >
                <span
                  className={`inline-block size-1.5 shrink-0 translate-y-[-2px] rounded-full ${line.accentBg}`}
                />
                {tLines(`${line.key}.title`)}
              </LocalizedLink>
            ))}
            <LocalizedLink href="/services" className={`${linkClass} mt-3`}>
              <ArrowUpRight className="size-3.5 shrink-0 text-bone/35 transition-all group-hover:rotate-45 group-hover:text-brick" />
              {t('services.title')}
            </LocalizedLink>
          </div>

          {/* Contacts */}
          <div>
            <p className={columnTitle}>{t('contact.title')}</p>
            <a href={`mailto:${email}`} className={`${linkClass} break-all`}>
              {email}
            </a>
            {process.env.NEXT_PUBLIC_COMPANY_PEC && (
              <p className="py-1.5 text-sm text-bone/50">
                PEC: {process.env.NEXT_PUBLIC_COMPANY_PEC}
              </p>
            )}
            <a href={`tel:+39${phone.replace(/\s/g, '')}`} className={linkClass}>
              +39 {phone}
            </a>
            <p className="py-1.5 text-bone/50">{t('contact.location')}</p>
            <LocalizedLink
              href="/contact#contact-form"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brick hover:text-bone"
            >
              {tNav('requestQuote')}
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </LocalizedLink>
          </div>
        </div>
      </div>

      {/* Oversized outlined wordmark */}
      <div
        aria-hidden
        className="flex select-none justify-between overflow-hidden border-t border-bone/10 pt-6"
      >
        {wordmark.map((letter, index) => (
          <motion.span
            // eslint-disable-next-line react/no-array-index-key
            key={`${letter}-${index}`}
            className="font-display text-[12.5vw] font-semibold leading-[0.8] tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(238,233,224,0.28)] 2xl:text-[11.5rem]"
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Title-block bar */}
      <div className="mt-6 grid border border-bone/15 font-display text-[11px] uppercase tracking-[0.16em] text-bone/50 md:grid-cols-[1fr_auto_auto]">
        <p className="px-4 py-3 normal-case tracking-normal md:border-r md:border-bone/15">
          © {currentYear} {name} – {brand}. {t('legal.copyright')}{' '}
          <span className="ml-2 tabular-nums text-bone/35">{vat}</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-bone/15 px-4 py-3 md:border-r md:border-t-0">
          <LocalizedLink href="/privacy" className="hover:text-bone">
            {t('legal.privacy')}
          </LocalizedLink>
          <LocalizedLink href="/cookie-policy" className="hover:text-bone">
            {t('legal.cookies')}
          </LocalizedLink>
          <a
            href="https://www.edilnet.it/aziendeedili/loris-cavallaro-ingegneria-e-costruzioni-593344/"
            target="_blank"
            rel="noopener noreferrer"
            title="Profilo Edilnet.it di LORIS CAVALLARO INGEGNERIA E COSTRUZIONI"
            className="inline-flex items-center gap-1 hover:text-bone"
          >
            {t('partner')}
            <ArrowUpRight className="size-3" />
          </a>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center justify-between gap-3 border-t border-bone/15 px-4 py-3 uppercase transition-colors hover:bg-bone hover:text-ink md:border-t-0"
        >
          {t('backToTop')}
          <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
      <div className="h-6" />
    </footer>
  );
}

export default FooterComp;

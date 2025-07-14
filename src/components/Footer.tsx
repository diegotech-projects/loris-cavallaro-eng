import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  BsBuilding,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { MdCopyright, MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

function FooterComp() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-custom pt-10 text-sm text-whiteOne md:pt-20 md:text-base">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
        {/* Company Info */}
        <div className="flex flex-col gap-5 lg:w-[35%]">
          <div className="flex items-center gap-2 text-xl font-bold 2xl:text-2xl">
            <BsBuilding className="text-themeAccent" />
            {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} -{' '}
            {process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'}
          </div>
          <div className="w-[85%] text-gray-300">{t('companyDescription')}</div>
          <div className="flex items-center gap-3 text-lg">
            <BsFacebook className="cursor-pointer transition-colors hover:text-themeAccent" />
            <BsLinkedin className="cursor-pointer transition-colors hover:text-themeAccent" />
            <BsTwitter className="cursor-pointer transition-colors hover:text-themeAccent" />
            <BsInstagram className="cursor-pointer transition-colors hover:text-themeAccent" />
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid w-full grid-cols-2 gap-8 lg:w-3/5 lg:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {t('navigation.title')}
            </h3>
            <div className="space-y-2 text-gray-300">
              <Link
                href="/"
                className="block transition-colors hover:text-themeAccent"
              >
                {tNav('home')}
              </Link>
              <Link
                href="/about"
                className="block transition-colors hover:text-themeAccent"
              >
                {tNav('about')}
              </Link>
              <Link
                href="/services"
                className="block transition-colors hover:text-themeAccent"
              >
                {tNav('services')}
              </Link>
              <Link
                href="/projects"
                className="block transition-colors hover:text-themeAccent"
              >
                {tNav('projects')}
              </Link>
              <Link
                href="/faq"
                className="block transition-colors hover:text-themeAccent"
              >
                {tNav('faq')}
              </Link>
              <Link
                href="/contact"
                className="block transition-colors hover:text-themeAccent"
              >
                {tNav('contact')}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {t('services.title')}
            </h3>
            <div className="space-y-2 text-gray-300">
              <p className="cursor-pointer transition-colors hover:text-themeAccent">
                {t('services.structuralDesign')}
              </p>
              <p className="cursor-pointer transition-colors hover:text-themeAccent">
                {t('services.projectManagement')}
              </p>
              <p className="cursor-pointer transition-colors hover:text-themeAccent">
                {t('services.urbanPlanning')}
              </p>
              <p className="cursor-pointer transition-colors hover:text-themeAccent">
                {t('services.energyEfficiency')}
              </p>
              <p className="cursor-pointer transition-colors hover:text-themeAccent">
                {t('services.consulting')}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {t('contact.title')}
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MdEmail className="text-themeAccent" />
                <span className="text-sm">
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
                    'loriscavallaro22@gmail.com'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-themeAccent" />
                <span>
                  +39 {process.env.NEXT_PUBLIC_COMPANY_PHONE || '380 147 7121'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-themeAccent" />
                <span>{t('contact.location')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mb-5 mt-10 h-px border-0 bg-whiteTwo/50 md:mt-20" />

      <div className="flex flex-col items-center justify-between pb-5 text-xs md:flex-row md:text-sm lg:text-base">
        <div className="flex items-center text-gray-300">
          Copyright{' '}
          <span className="mx-1">
            <MdCopyright />
          </span>{' '}
          {currentYear}{' '}
          {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} -{' '}
          {process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'}.{' '}
          {t('legal.copyright')}
        </div>
        <div className="mt-2 flex items-center gap-1 text-xs text-gray-400 md:mt-0">
          <span>
            {t('legal.vatNumber')
              .replace(
                '[DA INSERIRE]',
                process.env.NEXT_PUBLIC_VAT_NUMBER || '[DA INSERIRE]',
              )
              .replace(
                '[TO BE INSERTED]',
                process.env.NEXT_PUBLIC_VAT_NUMBER || '[TO BE INSERTED]',
              )}
          </span>
          <span>|</span>
          <Link
            href="/privacy"
            className="transition-colors hover:text-themeAccent"
          >
            {t('legal.privacy')}
          </Link>
          <span>|</span>
          <Link
            href="/cookie-policy"
            className="transition-colors hover:text-themeAccent"
          >
            {t('legal.cookies')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;

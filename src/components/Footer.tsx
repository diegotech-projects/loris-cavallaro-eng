import {
  BsFacebook,
  BsBuilding,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from 'react-icons/bs';
import { MdCopyright, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function FooterComp() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-custom pt-10 text-sm text-whiteOne md:pt-20 md:text-base">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
        
        {/* Company Info */}
        <div className="flex flex-col gap-5 lg:w-[35%]">
          <div className="flex items-center gap-2 font-bold text-xl 2xl:text-2xl">
            <BsBuilding className="text-themeAccent" />
            {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - {process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'}
          </div>
          <div className="w-[85%] text-gray-300">
            {t('companyDescription')}
          </div>
          <div className="flex items-center gap-3 text-lg">
            <BsFacebook className="hover:text-themeAccent cursor-pointer transition-colors" />
            <BsLinkedin className="hover:text-themeAccent cursor-pointer transition-colors" />
            <BsTwitter className="hover:text-themeAccent cursor-pointer transition-colors" />
            <BsInstagram className="hover:text-themeAccent cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-3 lg:w-[60%]">
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('navigation.title')}</h3>
            <div className="space-y-2 text-gray-300">
              <Link href="/" className="block hover:text-themeAccent transition-colors">{tNav('home')}</Link>
              <Link href="/about" className="block hover:text-themeAccent transition-colors">{tNav('about')}</Link>
              <Link href="/services" className="block hover:text-themeAccent transition-colors">{tNav('services')}</Link>
              <Link href="/projects" className="block hover:text-themeAccent transition-colors">{tNav('projects')}</Link>
              <Link href="/faq" className="block hover:text-themeAccent transition-colors">{tNav('faq')}</Link>
              <Link href="/contact" className="block hover:text-themeAccent transition-colors">{tNav('contact')}</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('services.title')}</h3>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-themeAccent transition-colors cursor-pointer">{t('services.structuralDesign')}</p>
              <p className="hover:text-themeAccent transition-colors cursor-pointer">{t('services.projectManagement')}</p>
              <p className="hover:text-themeAccent transition-colors cursor-pointer">{t('services.urbanPlanning')}</p>
              <p className="hover:text-themeAccent transition-colors cursor-pointer">{t('services.energyEfficiency')}</p>
              <p className="hover:text-themeAccent transition-colors cursor-pointer">{t('services.consulting')}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('contact.title')}</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MdEmail className="text-themeAccent" />
                <span className="text-sm">{process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'loriscavallaro22@gmail.com'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-themeAccent" />
                <span>+39 {process.env.NEXT_PUBLIC_COMPANY_PHONE || '380 147 7121'}</span>
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
      
      <div className="flex flex-col md:flex-row items-center justify-between pb-5 text-xs md:text-sm lg:text-base">
        <div className="flex items-center text-gray-300">
          Copyright{' '}
          <span className="mx-1">
            <MdCopyright />
          </span>{' '}
          {currentYear} {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - {process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'}. {t('legal.copyright')}
        </div>
        <div className="text-gray-400 text-xs mt-2 md:mt-0 flex items-center gap-1">
          <span>{t('legal.vatNumber')}</span>
          <span>|</span>
          <Link href="/privacy" className="hover:text-themeAccent transition-colors">
            {t('legal.privacy')}
          </Link>
          <span>|</span>
          <Link href="/cookie-policy" className="hover:text-themeAccent transition-colors">
            {t('legal.cookies')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;

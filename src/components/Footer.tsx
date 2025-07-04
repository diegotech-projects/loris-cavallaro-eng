import {
  BsFacebook,
  BsBuilding,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from 'react-icons/bs';
import { MdCopyright, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';

function FooterComp() {
  return (
    <div className="container-custom pt-10 text-sm text-whiteOne md:pt-20 md:text-base">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
        
        {/* Company Info */}
        <div className="flex flex-col gap-5 lg:w-[35%]">
          <div className="flex items-center gap-2 font-bold text-xl 2xl:text-2xl">
            <BsBuilding className="text-themeAccent" />
            XYZENGINEERING
          </div>
          <div className="w-[85%] text-gray-300">
            Studio di ingegneria civile e ambientale specializzato in progettazione edile, 
            sostenibilità e innovazione tecnica per progetti di grande valore.
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
            <h3 className="font-semibold text-lg mb-4 text-white">Navigazione</h3>
            <div className="space-y-2 text-gray-300">
              <Link href="/" className="block hover:text-themeAccent transition-colors">Home</Link>
              <Link href="/about" className="block hover:text-themeAccent transition-colors">Chi Siamo</Link>
              <Link href="/services" className="block hover:text-themeAccent transition-colors">Servizi</Link>
              <Link href="/projects" className="block hover:text-themeAccent transition-colors">Progetti</Link>
              <Link href="/contact" className="block hover:text-themeAccent transition-colors">Contatti</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Servizi</h3>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-themeAccent transition-colors cursor-pointer">Progettazione Strutturale</p>
              <p className="hover:text-themeAccent transition-colors cursor-pointer">Direzione Lavori</p>
              <p className="hover:text-themeAccent transition-colors cursor-pointer">Pratiche Urbanistiche</p>
              <p className="hover:text-themeAccent transition-colors cursor-pointer">Efficienza Energetica</p>
              <p className="hover:text-themeAccent transition-colors cursor-pointer">Consulenza Tecnica</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contatti</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MdEmail className="text-themeAccent" />
                <span className="text-sm">loriscavallaro22@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone className="text-themeAccent" />
                <span>+39 380 147 7121</span>
              </div>
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-themeAccent" />
                <span>Sicilia, Italia</span>
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
          2024 XYZENGINEERING. Tutti i diritti riservati.
        </div>
        <div className="text-gray-400 text-xs mt-2 md:mt-0 flex items-center gap-1">
          <span>P.IVA: [DA INSERIRE]</span>
          <span>|</span>
          <Link href="/privacy" className="hover:text-themeAccent transition-colors">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/cookie-policy" className="hover:text-themeAccent transition-colors">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;

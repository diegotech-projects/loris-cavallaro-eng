import Image from 'next/image';
import { useTranslations } from 'next-intl';

function Heading() {
  const t = useTranslations('heading');
  
  return (
    <div className="relative py-32 lg:py-40 bg-themeBackground">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-themeTextPrimary leading-tight tracking-tight">
              <p className="mb-2">ENGINEERING</p>
              <p>SOLUTIONS</p>
            </div>
            <div className="text-lg text-themeTextSecondary max-w-lg leading-relaxed">
              <p>{t('description')}</p>
            </div>
            <div className="pt-4">
              <button className="border-2 border-themeTextPrimary text-themeTextPrimary px-8 py-4 font-medium tracking-wide hover:bg-themeTextPrimary hover:text-themeBackground transition-colors duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[60vh] lg:h-[70vh]">
            <div className="h-full w-full overflow-hidden">
              <Image
                height={900}
                width={700}
                src="https://images.unsplash.com/photo-1544891459-cf0d5d4b08e6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Progetto di Ingegneria Civile"
                className="h-full w-full object-cover object-center grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;

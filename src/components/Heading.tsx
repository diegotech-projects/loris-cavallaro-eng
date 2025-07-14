import Image from 'next/image';
import { useTranslations } from 'next-intl';

function Heading() {
  const t = useTranslations('heading');

  return (
    <div className="relative bg-themeBackground py-32 lg:py-40">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="xl:text-7xl text-5xl font-bold leading-tight tracking-tight text-themeTextPrimary lg:text-6xl">
              <p className="mb-2">ENGINEERING</p>
              <p>SOLUTIONS</p>
            </div>
            <div className="max-w-lg text-lg leading-relaxed text-themeTextSecondary">
              <p>{t('description')}</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[60vh] lg:h-[70vh]">
            <div className="size-full overflow-hidden">
              <Image
                height={900}
                width={700}
                src="https://images.unsplash.com/photo-1544891459-cf0d5d4b08e6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Progetto di Ingegneria Civile"
                className="size-full object-cover object-center grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;

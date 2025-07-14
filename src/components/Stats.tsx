import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PiantinaEsternoCasa from 'public/images/portfolio/projects/01_3D_piantina_mappa_esterno.jpeg';

import { useStatsData } from '@/data/content';

function Stats() {
  const t = useTranslations('home');
  const statsData = useStatsData();

  return (
    <div className="container-custom">
      <div className="flex flex-col gap-20 lg:flex-row lg:gap-24">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <div className="h-80 overflow-hidden lg:h-96">
            <Image
              height={700}
              width={600}
              src={PiantinaEsternoCasa}
              alt="Piantina Esterno Casa"
              className="size-full object-cover opacity-80 transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2">
          <div className="mb-12">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-themeTextPrimary lg:text-5xl xl:text-6xl">
              {t('stats.title')}
            </h2>
            <p className="text-lg leading-relaxed text-themeTextSecondary">
              {t('stats.description')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-12">
            {statsData.stats.map((item) => (
              <div key={item.id} className="space-y-2">
                <h3 className="text-5xl font-bold tracking-tight text-themeTextPrimary lg:text-6xl">
                  {item.title}+
                </h3>
                <p className="text-sm font-medium uppercase tracking-wide text-themeTextSecondary">
                  {item.stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

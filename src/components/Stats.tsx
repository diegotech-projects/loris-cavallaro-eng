import Image from 'next/image';
import { StatsData } from '@/data/content';
import PiantinaEsternoCasa from '@/_docs/data/progetti_img/01_3D_piantina_mappa_esterno.jpeg';

function Stats() {
  return (
    <div className="container-custom">
      <div className="flex flex-col gap-20 lg:flex-row lg:gap-24">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <div className="h-80 lg:h-96 overflow-hidden">
            <Image
              height={700}
              width={600}
              src={PiantinaEsternoCasa} 
              alt="Piantina Esterno Casa" 
              className="w-full h-full object-cover opacity-80 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-themeTextPrimary mb-6 tracking-tight">
              OUR IMPACT IN NUMBERS
            </h2>
            <p className="text-lg text-themeTextSecondary leading-relaxed">
              Anni di esperienza e risultati concreti nell'ingegneria civile e ambientale, 
              con progetti che trasformano le comunità.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-12">
            {StatsData.stats.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-5xl lg:text-6xl font-bold text-themeTextPrimary tracking-tight">
                  {item.title}+
                </h3>
                <p className="text-themeTextSecondary font-medium tracking-wide uppercase text-sm">
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

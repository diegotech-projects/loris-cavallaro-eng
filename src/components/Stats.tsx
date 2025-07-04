import Image from 'next/image';
import { StatsData } from '@/data/content';
import PiantinaEsternoCasa from '@/_docs/data/progetti_img/01_3D_piantina_mappa_esterno.jpeg';

function Stats() {
  return (
    <div className="container-custom">
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
        {/* Left Side - Image placeholder */}
        <div className="lg:w-1/2">
          <div className="h-80 lg:h-96 bg-themeSurfaceLight rounded-lg overflow-hidden">
            <Image
              height={700}
              width={600}
              src={PiantinaEsternoCasa} 
              alt="Piantina Esterno Casa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary mb-4">
              Our impact in numbers
            </h2>
            <p className="text-lg text-themeTextSecondary">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper nulla magna eleget mauris dapibus tincidunt amet.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {StatsData.stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary mb-2">
                  {item.title}+
                </h3>
                <p className="text-themeTextSecondary font-medium">
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

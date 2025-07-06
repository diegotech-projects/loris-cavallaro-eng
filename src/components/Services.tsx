import {useTranslations} from 'next-intl';
import { FaBuilding, FaHardHat, FaFileAlt, FaSolarPanel, FaCalculator } from 'react-icons/fa';

function Services() {
  const t = useTranslations('services');

  const engineeringServices = [
    {
      id: 1,
      icon: FaBuilding,
      title: t('structuralDesign.title'),
      content: t('structuralDesign.content'),
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      icon: FaHardHat,
      title: t('projectManagement.title'),
      content: t('projectManagement.content'),
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      icon: FaFileAlt,
      title: t('buildingPermits.title'),
      content: t('buildingPermits.content'),
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      icon: FaSolarPanel,
      title: t('energyEfficiency.title'),
      content: t('energyEfficiency.content'),
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      icon: FaCalculator,
      title: t('technicalConsulting.title'),
      content: t('technicalConsulting.content'),
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="container-custom">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-themeTextPrimary mb-6 tracking-tight">
          SERVICES
        </h2>
        <p className="text-lg text-themeTextSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
          Soluzioni complete di ingegneria civile e ambientale per ogni tipologia di progetto
        </p>
      </div>

      {/* Services Grid - Minimal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {engineeringServices.slice(0, 3).map((service) => {
          return (
            <div
              key={service.id}
              className="group bg-themeSurface p-8 transition-all duration-300 hover:bg-themeSurfaceLight"
            >
              <div className="relative h-48 mb-6 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-themeTextPrimary tracking-wide">
                  {service.title.toUpperCase()}
                </h3>
                <p className="text-themeTextSecondary text-sm leading-relaxed">
                  {service.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Services - Minimal List */}
      <div className="space-y-6">
        {engineeringServices.slice(3, 5).map((service) => {
          return (
            <div
              key={service.id}
              className="flex items-center justify-between p-8 bg-themeSurface hover:bg-themeSurfaceLight transition-colors duration-300"
            >
              <div className="flex-1">
                <h4 className="text-lg font-bold text-themeTextPrimary mb-2 tracking-wide">
                  {service.title.toUpperCase()}
                </h4>
                <p className="text-themeTextSecondary text-sm leading-relaxed">
                  {service.content}
                </p>
              </div>
              <div className="ml-8 text-themeTextSecondary">
                →
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <button className="border-2 border-themeTextPrimary text-themeTextPrimary px-8 py-4 font-medium tracking-wide hover:bg-themeTextPrimary hover:text-themeBackground transition-colors duration-300">
          VIEW ALL SERVICES
        </button>
      </div>
    </div>
  );
}

export default Services;

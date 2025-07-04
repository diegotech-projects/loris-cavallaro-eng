import Link from 'next/link';
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
      <div className="text-center mb-16">
        <button
          type="button"
          className="bg-themeAccent text-themeSurface px-6 py-3 rounded-full text-sm font-medium mb-6 mx-auto flex items-center gap-2"
        >
          <FaBuilding className="w-4 h-4" />
          <span>{t('ourServices')}</span>
        </button>
        <h2 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary mb-4">
          {t("comprehensiveSet")}
        </h2>
        <p className="text-lg text-themeTextSecondary mb-8 max-w-2xl mx-auto">
          Soluzioni complete di ingegneria civile e ambientale per ogni tipologia di progetto
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/services" className="bg-themeSecondary text-themeSurface px-6 py-3 rounded-lg font-medium hover:bg-themeAccent transition-colors">
            {t("viewMore")}
          </Link>
          <Link href="/contact" className="border border-themeSecondary text-themeSecondary px-6 py-3 rounded-lg font-medium hover:bg-themeSecondary hover:text-themeSurface transition-colors">
            {t("contactUs")}
          </Link>
        </div>
      </div>

      {/* Services Grid - Show first 3 services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {engineeringServices.slice(0, 3).map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-lg bg-themeSurface shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-themeSecondary bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-themeAccent rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-themeSurface" />
                  </div>
                  <h3 className="text-xl font-semibold text-themeTextPrimary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-themeTextSecondary text-sm leading-relaxed">
                  {service.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Services Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {engineeringServices.slice(3, 5).map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="flex items-center p-6 bg-themeSurface rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-themeAccent rounded-lg flex items-center justify-center mr-4">
                <IconComponent className="w-6 h-6 text-themeSurface" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-themeTextPrimary mb-2">
                  {service.title}
                </h4>
                <p className="text-themeTextSecondary text-sm">
                  {service.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;

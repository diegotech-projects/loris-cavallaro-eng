import React from 'react';
import { useTranslations } from 'next-intl';
import Services from '@/components/Services';

const ServicesPage = () => {
  const t = useTranslations('servicesPage');
  
  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-whiteOne mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-whiteOne py-20">
        <Services />
      </div>

      {/* Detailed Services */}
      <div className="bg-eliteLight py-20">
        <div className="container-custom">
          <div className="space-y-16">
            
            {/* Structural Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">{t('detailed.structuralDesign.title')}</h2>
                <p className="text-lg text-themeTextSecondary mb-6">
                  {t('detailed.structuralDesign.description')}
                </p>
                <ul className="space-y-3 text-themeTextSecondary opacity-50">
                  {t.raw('detailed.structuralDesign.features').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-eliteNavy to-eliteGold p-8 rounded-lg text-center">
                <div className="text-whiteOne">
                  <h3 className="text-2xl font-bold mb-4">{t('detailed.structuralDesign.cardTitle')}</h3>
                  <p className="">{t('detailed.structuralDesign.cardDescription')}</p>
                </div>
              </div>
            </div>

            {/* Energy Efficiency */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-3xl font-bold text-primary mb-6">{t('detailed.energyEfficiency.title')}</h2>
                <p className="text-lg text-themeTextSecondary mb-6">
                  {t('detailed.energyEfficiency.description')}
                </p>
                <ul className="space-y-3 text-themeTextSecondary opacity-50">
                  {t.raw('detailed.energyEfficiency.features').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-eliteGold to-eliteNavy p-8 rounded-lg text-center">
                <div className="text-whiteOne">
                  <h3 className="text-2xl font-bold mb-4">{t('detailed.energyEfficiency.cardTitle')}</h3>
                  <p className="">{t('detailed.energyEfficiency.cardDescription')}</p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">{t('detailed.projectManagement.title')}</h2>
                <p className="text-lg text-themeTextSecondary mb-6">
                  {t('detailed.projectManagement.description')}
                </p>
                <ul className="space-y-3 text-themeTextSecondary opacity-50">
                  {t.raw('detailed.projectManagement.features').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-eliteNavy to-eliteGold p-8 rounded-lg text-center">
                <div className="text-whiteOne">
                  <h3 className="text-2xl font-bold mb-4">{t('detailed.projectManagement.cardTitle')}</h3>
                  <p className="">{t('detailed.projectManagement.cardDescription')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-eliteGold py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-whiteOne mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-black-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <a href="/contact#contact-form" className="bg-whiteOne text-eliteGold px-8 py-4 rounded-lg font-semibold hover:bg-eliteLight transition-colors">
            {t('cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
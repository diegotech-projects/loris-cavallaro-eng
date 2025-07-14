import { useTranslations } from 'next-intl';
import React from 'react';

import Services from '@/components/Services';

const ServicesPage = () => {
  const t = useTranslations('servicesPage');

  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="mb-6 text-4xl font-bold text-whiteOne lg:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-blue-100">
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
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">
                  {t('detailed.structuralDesign.title')}
                </h2>
                <p className="mb-6 text-lg text-themeTextSecondary">
                  {t('detailed.structuralDesign.description')}
                </p>
                <ul className="space-y-3 text-themeTextSecondary opacity-50">
                  {t
                    .raw('detailed.structuralDesign.features')
                    .map((feature: string) => (
                      <li
                        key={`feature-${feature.slice(0, 15)}`}
                        className="flex items-center"
                      >
                        <span className="mr-3 size-2 rounded-full bg-eliteGold" />
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-eliteNavy to-eliteGold p-8 text-center">
                <div className="text-whiteOne">
                  <h3 className="mb-4 text-2xl font-bold">
                    {t('detailed.structuralDesign.cardTitle')}
                  </h3>
                  <p className="">
                    {t('detailed.structuralDesign.cardDescription')}
                  </p>
                </div>
              </div>
            </div>

            {/* Energy Efficiency */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="lg:order-2">
                <h2 className="mb-6 text-3xl font-bold text-primary">
                  {t('detailed.energyEfficiency.title')}
                </h2>
                <p className="mb-6 text-lg text-themeTextSecondary">
                  {t('detailed.energyEfficiency.description')}
                </p>
                <ul className="space-y-3 text-themeTextSecondary opacity-50">
                  {t
                    .raw('detailed.energyEfficiency.features')
                    .map((feature: string) => (
                      <li
                        key={`feature-${feature.slice(0, 15)}`}
                        className="flex items-center"
                      >
                        <span className="mr-3 size-2 rounded-full bg-eliteGold" />
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-eliteGold to-eliteNavy p-8 text-center lg:order-1">
                <div className="text-whiteOne">
                  <h3 className="mb-4 text-2xl font-bold">
                    {t('detailed.energyEfficiency.cardTitle')}
                  </h3>
                  <p className="">
                    {t('detailed.energyEfficiency.cardDescription')}
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">
                  {t('detailed.projectManagement.title')}
                </h2>
                <p className="mb-6 text-lg text-themeTextSecondary">
                  {t('detailed.projectManagement.description')}
                </p>
                <ul className="space-y-3 text-themeTextSecondary opacity-50">
                  {t
                    .raw('detailed.projectManagement.features')
                    .map((feature: string) => (
                      <li
                        key={`feature-${feature.slice(0, 15)}`}
                        className="flex items-center"
                      >
                        <span className="mr-3 size-2 rounded-full bg-eliteGold" />
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-eliteNavy to-eliteGold p-8 text-center">
                <div className="text-whiteOne">
                  <h3 className="mb-4 text-2xl font-bold">
                    {t('detailed.projectManagement.cardTitle')}
                  </h3>
                  <p className="">
                    {t('detailed.projectManagement.cardDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-eliteGold py-20">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-4xl font-bold text-whiteOne">
            {t('cta.title')}
          </h2>
          <p className="text-black-100 mx-auto mb-8 max-w-2xl text-xl">
            {t('cta.description')}
          </p>
          <a
            href="/contact#contact-form"
            className="rounded-lg bg-whiteOne px-8 py-4 font-semibold text-eliteGold transition-colors hover:bg-eliteLight"
          >
            {t('cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

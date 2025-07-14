import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import lorisImg1 from 'public/images/portfolio/profile/01_loris_img.jpeg';
import lorisImg2 from 'public/images/portfolio/profile/02_loris_img.jpeg';

const AboutPage = () => {
  const t = useTranslations('about');
  
  return (
    <div className="relative bg-whiteOne">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-whiteOne mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={lorisImg2}
                alt={`Ingegnere ${process.env.NEXT_PUBLIC_NOME_COGNOME}`}
                fill
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Section */}
      <div className="bg-whiteOne py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-eliteNavy mb-8">{t('company.title')}</h2>
            <div className="text-left space-y-6">
              <p className="text-base lg:text-lg text-themeTextSecondary leading-relaxed">
                {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - {process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'} {t('company.description1')}
              </p>
              <p className="text-base lg:text-lg text-themeTextSecondary leading-relaxed">
                {t('company.description2')}
              </p>
              <div className="bg-eliteLight p-6 lg:p-8 rounded-lg border-l-4 border-eliteGold mt-8">
                <p className="text-lg lg:text-xl font-medium text-eliteNavy italic text-center">
                  "{t('company.mission')}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-eliteLight py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-eliteNavy mb-12 text-center">{t('team.title')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src={lorisImg1}
                  alt={t('team.director.name')}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-xl lg:text-2xl font-bold text-eliteNavy mb-3">{t('team.director.name')}</h3>
                <p className="text-base lg:text-lg text-eliteGold font-semibold mb-4">{t('team.director.role')}</p>
                <p className="text-themeTextSecondary mb-6 leading-relaxed">
                  {t('team.director.description')}
                </p>
                <div className="space-y-2">
                  {t.raw('team.director.qualifications').map((qualification: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="text-eliteGold mr-2 mt-1">•</span>
                      <span className="text-themeTextSecondary">{qualification}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competencies Section */}
      <div className="bg-whiteOne py-16 lg:py-20">
        <div className="container-custom">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-eliteNavy mb-12">{t('competencies.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-whiteOne p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-semibold text-eliteNavy mb-3">{t('competencies.buildingDesign.title')}</h3>
              <p className="text-themeTextSecondary leading-relaxed">{t('competencies.buildingDesign.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-semibold text-eliteNavy mb-3">{t('competencies.sustainability.title')}</h3>
              <p className="text-themeTextSecondary leading-relaxed">{t('competencies.sustainability.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-semibold text-eliteNavy mb-3">{t('competencies.safety.title')}</h3>
              <p className="text-themeTextSecondary leading-relaxed">{t('competencies.safety.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-semibold text-eliteNavy mb-3">{t('competencies.tenders.title')}</h3>
              <p className="text-themeTextSecondary leading-relaxed">{t('competencies.tenders.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-semibold text-eliteNavy mb-3">{t('competencies.urbanPlanning.title')}</h3>
              <p className="text-themeTextSecondary leading-relaxed">{t('competencies.urbanPlanning.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg lg:text-xl font-semibold text-eliteNavy mb-3">{t('competencies.consulting.title')}</h3>
              <p className="text-themeTextSecondary leading-relaxed">{t('competencies.consulting.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
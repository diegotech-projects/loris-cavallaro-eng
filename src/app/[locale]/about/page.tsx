import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import lorisImg from '@/_docs/data/profilo/02_loris_img.jpeg';
import lorisImg2 from '@/_docs/data/profilo/01_loris_img.jpeg';

const AboutPage = () => {
  const t = useTranslations('about');
  
  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-whiteOne mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={lorisImg}
                alt={`Ingegnere ${process.env.NEXT_PUBLIC_NOME_COGNOME}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Section */}
      <div className="bg-whiteOne py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">{t('company.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-themeTextSecondary mb-6 text-justify">
                {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - {process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'} {t('company.description1')}
              </p>
              <p className="text-lg text-themeTextSecondary mb-6 text-justify">
                {t('company.description2')}
              </p>
              <blockquote className="border-l-4 border-eliteGold pl-6 py-4 bg-eliteLight">
                <p className="text-xl font-medium text-primary italic">
                  "{t('company.mission')}"
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-eliteLight py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">{t('team.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={lorisImg2}
                  alt={t('team.director.name')}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">{t('team.director.name')}</h3>
                <p className="text-lg text-eliteGold font-semibold mb-4">{t('team.director.role')}</p>
                <p className="text-themeTextSecondary mb-4">
                  {t('team.director.description')}
                </p>
                <ul className="text-themeTextSecondary space-y-2">
                  {t.raw('team.director.qualifications').map((qualification: string, index: number) => (
                    <li key={index}>• {qualification}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competencies Section */}
      <div className="bg-eliteLight py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('competencies.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">{t('competencies.buildingDesign.title')}</h3>
              <p className="text-themeTextSecondary">{t('competencies.buildingDesign.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">{t('competencies.sustainability.title')}</h3>
              <p className="text-themeTextSecondary">{t('competencies.sustainability.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">{t('competencies.safety.title')}</h3>
              <p className="text-themeTextSecondary">{t('competencies.safety.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">{t('competencies.tenders.title')}</h3>
              <p className="text-themeTextSecondary">{t('competencies.tenders.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">{t('competencies.urbanPlanning.title')}</h3>
              <p className="text-themeTextSecondary">{t('competencies.urbanPlanning.description')}</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">{t('competencies.consulting.title')}</h3>
              <p className="text-themeTextSecondary">{t('competencies.consulting.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
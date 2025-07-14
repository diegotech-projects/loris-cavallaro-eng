import Image from 'next/image';
import { useTranslations } from 'next-intl';
import lorisImg1 from 'public/images/portfolio/profile/01_loris_img.jpeg';
import lorisImg2 from 'public/images/portfolio/profile/02_loris_img.jpeg';
import React from 'react';

const AboutPage = () => {
  const t = useTranslations('about');

  return (
    <div className="relative bg-whiteOne">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="mb-6 text-3xl font-bold text-whiteOne lg:text-4xl xl:text-5xl">
                {t('hero.title')}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-blue-100 lg:text-xl">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl lg:h-[500px]">
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
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-2xl font-bold text-eliteNavy lg:text-3xl">
              {t('company.title')}
            </h2>
            <div className="space-y-6 text-left">
              <p className="text-base leading-relaxed text-themeTextSecondary lg:text-lg">
                {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} -{' '}
                {process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'}{' '}
                {t('company.description1')}
              </p>
              <p className="text-base leading-relaxed text-themeTextSecondary lg:text-lg">
                {t('company.description2')}
              </p>
              <div className="mt-8 rounded-lg border-l-4 border-eliteGold bg-eliteLight p-6 lg:p-8">
                <p className="text-center text-lg font-medium italic text-eliteNavy lg:text-xl">
                  &ldquo;{t('company.mission')}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-eliteLight py-16 lg:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-2xl font-bold text-eliteNavy lg:text-3xl">
              {t('team.title')}
            </h2>
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative order-2 h-96 overflow-hidden rounded-lg shadow-lg lg:order-1 lg:h-[500px]">
                <Image
                  src={lorisImg1}
                  alt={t('team.director.name')}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="mb-3 text-xl font-bold text-eliteNavy lg:text-2xl">
                  {t('team.director.name')}
                </h3>
                <p className="mb-4 text-base font-semibold text-eliteGold lg:text-lg">
                  {t('team.director.role')}
                </p>
                <p className="mb-6 leading-relaxed text-themeTextSecondary">
                  {t('team.director.description')}
                </p>
                <div className="space-y-2">
                  {t
                    .raw('team.director.qualifications')
                    .map((qualification: string) => (
                      <div
                        key={`qualification-${qualification.slice(0, 10)}`}
                        className="flex items-start"
                      >
                        <span className="mr-2 mt-1 text-eliteGold">•</span>
                        <span className="text-themeTextSecondary">
                          {qualification}
                        </span>
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
          <h2 className="mb-12 text-center text-2xl font-bold text-eliteNavy lg:text-3xl">
            {t('competencies.title')}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg border border-gray-100 bg-whiteOne p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="mb-3 text-lg font-semibold text-eliteNavy lg:text-xl">
                {t('competencies.buildingDesign.title')}
              </h3>
              <p className="leading-relaxed text-themeTextSecondary">
                {t('competencies.buildingDesign.description')}
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-whiteOne p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="mb-3 text-lg font-semibold text-eliteNavy lg:text-xl">
                {t('competencies.sustainability.title')}
              </h3>
              <p className="leading-relaxed text-themeTextSecondary">
                {t('competencies.sustainability.description')}
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-whiteOne p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="mb-3 text-lg font-semibold text-eliteNavy lg:text-xl">
                {t('competencies.safety.title')}
              </h3>
              <p className="leading-relaxed text-themeTextSecondary">
                {t('competencies.safety.description')}
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-whiteOne p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="mb-3 text-lg font-semibold text-eliteNavy lg:text-xl">
                {t('competencies.tenders.title')}
              </h3>
              <p className="leading-relaxed text-themeTextSecondary">
                {t('competencies.tenders.description')}
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-whiteOne p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="mb-3 text-lg font-semibold text-eliteNavy lg:text-xl">
                {t('competencies.urbanPlanning.title')}
              </h3>
              <p className="leading-relaxed text-themeTextSecondary">
                {t('competencies.urbanPlanning.description')}
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-whiteOne p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="mb-3 text-lg font-semibold text-eliteNavy lg:text-xl">
                {t('competencies.consulting.title')}
              </h3>
              <p className="leading-relaxed text-themeTextSecondary">
                {t('competencies.consulting.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

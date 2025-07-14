import { useTranslations } from 'next-intl';
import React from 'react';

import Appointment from '@/components/Contacts';
import FAQS from '@/components/FAQS';
import Heading from '@/components/Heading';
import ProjectShowcase from '@/components/PortfolioSection';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';
import Stats from '@/components/Stats';

const page = () => {
  const t = useTranslations('home');

  return (
    <div className="relative bg-themeBackground">
      {/* Hero Section */}
      <div className="relative w-full">
        <Heading />
      </div>

      {/* Impact Numbers */}
      <div className="bg-themeSurface py-24">
        <Stats />
      </div>

      {/* Services Overview */}
      <div className="bg-themeBackground py-24" id="services">
        <Services />
      </div>

      {/* Featured Projects */}
      <div className="bg-themeSurface py-24" id="projects">
        <ProjectShowcase />
      </div>

      {/* CTA Section */}
      <div className="bg-themeSurfaceLight py-24">
        <div className="container-custom text-center">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-themeTextPrimary lg:text-5xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-themeTextSecondary">
            {t('cta.description')}
          </p>
          <div className="flex justify-center gap-6">
            <button className="border-2 border-themeTextPrimary px-8 py-4 font-medium tracking-wide text-themeTextPrimary transition-colors duration-300 hover:bg-themeTextPrimary hover:text-themeBackground">
              {t('cta.discoverProjects')}
            </button>
            <a
              href="/contact#contact-form"
              className="bg-themeTextPrimary px-8 py-4 font-medium tracking-wide text-themeBackground transition-colors duration-300 hover:bg-themeTextSecondary"
            >
              {t('cta.requestQuote')}
            </a>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-themeBackground py-24" id="testimonials">
        <Reviews />
      </div>

      {/* FAQ Section */}
      <div className="bg-themeSurface py-24" id="FAQ">
        <FAQS />
      </div>

      {/* Final CTA */}
      <div className="bg-surfaceLight py-24" id="appointment">
        <Appointment />
      </div>
    </div>
  );
};

export default page;

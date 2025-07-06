import React from 'react';

import Appointment from '@/components/Contacts';
import BgGlassmorphism from '@/components/BgGlassMorphism';
import ProjectShowcase from '@/components/PortfolioSection';
import FAQS from '@/components/FAQS';
import Heading from '@/components/Heading';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';
import Stats from '@/components/Stats';

const page = () => {
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
          <h2 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary mb-8 tracking-tight">
            PRONTI A REALIZZARE IL VOSTRO PROGETTO?
          </h2>
          <p className="text-lg text-themeTextSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Iniziate oggi stesso il vostro progetto di ingegneria con le nostre soluzioni innovative, 
            sostenibili e tecnicamente avanzate.
          </p>
          <div className="flex justify-center gap-6">
            <button className="border-2 border-themeTextPrimary text-themeTextPrimary px-8 py-4 font-medium tracking-wide hover:bg-themeTextPrimary hover:text-themeBackground transition-colors duration-300">
              SCOPRI PROGETTI
            </button>
            <a 
              href="/contact#contact-form"
              className="bg-themeTextPrimary text-themeBackground px-8 py-4 font-medium tracking-wide hover:bg-themeTextSecondary transition-colors duration-300"
            >
              RICHIEDI PREVENTIVO
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

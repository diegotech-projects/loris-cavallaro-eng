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
    <div className="relative bg-eliteLight">
      <BgGlassmorphism />

      {/* Hero Section */}
      <div className="relative w-full bg-eliteNavy">
        <Heading />
      </div>

      {/* Impact Numbers */}
      <div className="bg-eliteLight py-20">
        <Stats />
      </div>

      {/* Services Overview */}
      <div className="bg-whiteOne py-20" id="services">
        <Services />
      </div>

      {/* Featured Projects */}
      <div className="bg-whiteTwo py-20" id="projects">
        <ProjectShowcase />
      </div>

      {/* CTA Section */}
      <div className="bg-eliteGold py-20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-whiteOne mb-6">
            Pronti a Realizzare il Vostro Progetto?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Iniziate oggi stesso il vostro progetto di ingegneria con le nostre soluzioni innovative, 
            sostenibili e tecnicamente avanzate.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-whiteOne text-eliteGold px-8 py-4 rounded-lg font-semibold hover:bg-eliteLight transition-colors">
              Scopri Progetti
            </button>
            <button className="border-2 border-whiteOne text-whiteOne px-8 py-4 rounded-lg font-semibold hover:bg-whiteOne hover:text-eliteGold transition-colors">
              Richiedi Preventivo
            </button>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-eliteLight py-20" id="testimonials">
        <Reviews />
      </div>

      {/* FAQ Section */}
      <div className="bg-whiteOne py-20" id="FAQ">
        <FAQS />
      </div>

      {/* Final CTA */}
      <div className="bg-eliteDark py-20" id="appointment">
        <Appointment />
      </div>
    </div>
  );
};

export default page;

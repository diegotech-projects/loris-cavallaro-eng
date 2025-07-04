import React from 'react';

import Appointment from '@/components/Appointment';
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

      {/* Most Popular Products */}
      <div className="bg-whiteOne py-20" id="products">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center mb-16">
            <button className="bg-whiteTwo text-eliteSlate px-6 py-3 rounded-full text-sm font-medium mb-6">
              Our Products
            </button>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Most popular<br />products
              </h2>
              <div className="flex gap-4">
                <button className="bg-eliteNavy text-whiteOne px-6 py-3 rounded-lg font-medium hover:bg-eliteDark transition-colors">
                  View more
                </button>
                <button className="border border-eliteGray text-eliteSlate px-6 py-3 rounded-lg font-medium hover:bg-whiteTwo transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Telemedicine Services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 text-center">
                Telemedicine Services
              </h3>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Health Monitoring" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 text-center">
                Health Monitoring
              </h3>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Medical Records" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 text-center">
                Medical Records
              </h3>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Emergency Care" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 text-center">
                Emergency Care
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Project */}
      <div className="bg-white py-20" id="recent-project">
        <div className="container-custom">
          <div className="text-center mb-16">
            <button className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
              Recent Work
            </button>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Take a look at our<br />most recent project
              </h2>
              <div className="flex gap-4">
                <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  View more
                </button>
                <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="bg-slate-100 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-square lg:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Medical Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Modern Healthcare Facility in Los Angeles, CA
                </h3>
                <p className="text-slate-600 mb-6">
                  State-of-the-art medical center providing comprehensive healthcare services with the latest technology and expert medical professionals dedicated to patient care.
                </p>
                <div className="flex gap-4">
                  <button className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
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
            Ready to Transform Your Health? Get a Consultation Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards better health with our comprehensive medical services and expert care.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-whiteOne text-eliteGold px-8 py-4 rounded-lg font-semibold hover:bg-eliteLight transition-colors">
              Get Products
            </button>
            <button className="border-2 border-whiteOne text-whiteOne px-8 py-4 rounded-lg font-semibold hover:bg-whiteOne hover:text-eliteGold transition-colors">
              Contact Us
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

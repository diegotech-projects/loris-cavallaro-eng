import React from 'react';
import Appointment from '@/components/Appointment';

const ContactPage = () => {
  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-whiteOne mb-6">
            Contattaci
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Siamo qui per aiutarti a realizzare i tuoi progetti. 
            Contattaci per una consulenza personalizzata e gratuita.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-whiteOne py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            
            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-eliteGold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-whiteOne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
              <p className="text-gray-600 mb-2">loriscavallaro22@gmail.com</p>
              <p className="text-gray-600">Ingegnerelorising@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-eliteGold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-whiteOne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Telefono</h3>
              <p className="text-gray-600">+39 380 147 7121</p>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="w-16 h-16 bg-eliteGold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-whiteOne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Ubicazione</h3>
              <p className="text-gray-600">Sicilia, Italia</p>
              <p className="text-gray-500 text-sm">Servizi su tutto il territorio nazionale</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-eliteDark py-20">
        <Appointment />
      </div>

      {/* Professional Info */}
      <div className="bg-whiteOne py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Informazioni Professionali
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-eliteLight p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Qualifiche</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Laurea Magistrale in Ingegneria Civile e Ambientale</li>
                  <li>• Specializzazione in Sicurezza sui Luoghi di Lavoro</li>
                  <li>• Abilitazione Professionale Ingegneri</li>
                  <li>• Certificazione Efficienza Energetica</li>
                </ul>
              </div>
              <div className="bg-eliteLight p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Aree di Competenza</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Progettazione Strutturale</li>
                  <li>• Bandi di Gara e Appalti Pubblici</li>
                  <li>• Diagnosi Energetiche e APE</li>
                  <li>• Impianti Fotovoltaici</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div className="bg-eliteLight py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Documenti</h2>
          <p className="text-lg text-gray-700 mb-8">Scarica il curriculum vitae e scopri di più sul nostro background professionale.</p>
          <a 
            href="/src/_docs/data/profilo/cv_ing_loris_cavallaro.pdf" 
            download
            className="inline-flex items-center bg-eliteNavy text-whiteOne px-8 py-4 rounded-lg font-semibold hover:bg-eliteDark transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Scarica CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import React from 'react';

import Appointment from '@/components/Contacts';

const ContactPage = () => {
  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="mb-6 text-4xl font-bold text-whiteOne lg:text-5xl">
            Contattaci
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-blue-100">
            Siamo qui per aiutarti a realizzare i tuoi progetti. Contattaci per
            una consulenza personalizzata e gratuita.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-whiteOne py-20">
        <div className="container-custom">
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Email */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-eliteGold">
                <svg
                  className="size-8 text-whiteOne"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Email</h3>
              <p className="mb-2 text-themeTextSecondary">
                loriscavallaro22@gmail.com
              </p>
              <p className="text-themeTextSecondary">
                Ingegnerelorising@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-eliteGold">
                <svg
                  className="size-8 text-whiteOne"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">
                Telefono
              </h3>
              <p className="text-themeTextSecondary">+39 380 147 7121</p>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-eliteGold">
                <svg
                  className="size-8 text-whiteOne"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">
                Dove siamo
              </h3>
              <p className="text-themeTextSecondary">Sicilia, Italia</p>
              <p className="text-sm text-themeTextSecondary opacity-50">
                Servizi su tutto il territorio nazionale
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-surfaceLight py-20">
        <Appointment />
      </div>

      {/* Professional Info */}
      <div className="bg-whiteOne py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-primary">
              Informazioni Professionali
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-eliteLight p-6">
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  Qualifiche
                </h3>
                <ul className="space-y-2 text-themeTextSecondary opacity-50">
                  <li>• Laurea Magistrale in Ingegneria Civile e Ambientale</li>
                  <li>• Specializzazione in Sicurezza sui Luoghi di Lavoro</li>
                  <li>• Abilitazione Professionale Ingegneri</li>
                  <li>• Certificazione Efficienza Energetica</li>
                </ul>
              </div>
              <div className="rounded-lg bg-eliteLight p-6">
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  Aree di Competenza
                </h3>
                <ul className="space-y-2 text-themeTextSecondary opacity-50">
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
          <h2 className="mb-8 text-3xl font-bold text-primary">Documenti</h2>
          <p className="mb-8 text-lg text-themeTextSecondary">
            Scarica il curriculum vitae e scopri di più sul nostro background
            professionale.
          </p>
          <a
            href="/src/_docs/data/profilo/cv_ing_loris_cavallaro.pdf"
            download
            className="inline-flex items-center rounded-lg bg-eliteNavy px-8 py-4 font-semibold text-whiteOne transition-colors hover:bg-eliteDark"
          >
            <svg
              className="mr-2 size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Scarica CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

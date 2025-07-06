import React from 'react';
import { useTranslations } from 'next-intl';
import Services from '@/components/Services';

const ServicesPage = () => {
  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-whiteOne mb-6">
            I Nostri Servizi
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Soluzioni complete di ingegneria civile e ambientale per progetti di qualità, 
            sostenibilità e sicurezza.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Progettazione Strutturale</h2>
                <p className="text-lg text-themeTextSecondary mb-6">
                  Progettazione completa di strutture edili con calcoli strutturali, verifiche statiche 
                  e dimensionamento per edifici residenziali, commerciali e industriali.
                </p>
                <ul className="space-y-3 text-themeTextSecondary opacity-50">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                    Calcoli strutturali e verifiche sismiche
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                    Progettazione fondazioni e strutture portanti
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                    Ristrutturazioni e consolidamenti
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-eliteNavy to-eliteGold p-8 rounded-lg text-center">
                <div className="text-whiteOne">
                  <h3 className="text-2xl font-bold mb-4">Progetti Strutturali</h3>
                  <p className="selection:">Soluzioni tecniche innovative per ogni tipologia di costruzione</p>
                </div>
              </div>
            </div>

            {/* Energy Efficiency */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-3xl font-bold text-primary mb-6">Efficienza Energetica</h2>
                <p className="text-lg text-themeTextSecondary mb-6">
                  Specializzazione in diagnosi energetiche, certificazioni APE e progettazione 
                  di impianti fotovoltaici per la sostenibilità ambientale.
                </p>
                <ul className="space-y-3 text-themeTextSecondary opacity-50">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                    Diagnosi energetiche secondo Legge 10
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                    Certificazioni APE (Attestato Prestazione Energetica)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                    Progettazione impianti fotovoltaici
                  </li>
                </ul>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-eliteGold to-eliteNavy p-8 rounded-lg text-center">
                <div className="text-whiteOne">
                  <h3 className="text-2xl font-bold mb-4">Sostenibilità</h3>
                  <p className="">Efficienza energetica e soluzioni eco-sostenibili</p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Direzione Lavori</h2>
                <p className="text-lg text-themeTextSecondary mb-6">
                  Coordinamento completo dei lavori edili con gestione tecnica, controllo qualità 
                  e supervisione durante tutte le fasi costruttive.
                </p>
                <ul className="space-y-3 text-themeTextSecondary opacity-50">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                    Coordinamento sicurezza in cantiere
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                    Controllo qualità e avanzamento lavori
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                    Gestione interferenze e problematiche tecniche
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-eliteNavy to-eliteGold p-8 rounded-lg text-center">
                <div className="text-whiteOne">
                  <h3 className="text-2xl font-bold mb-4">Gestione Progetti</h3>
                  <p className="">Controllo e coordinamento professionale</p>
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
            Hai un progetto in mente?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza personalizzata e scopri come possiamo 
            trasformare le tue idee in realtà.
          </p>
          <a href="/contact#contact-form" className="bg-whiteOne text-eliteGold px-8 py-4 rounded-lg font-semibold hover:bg-eliteLight transition-colors">
            Richiedi Preventivo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
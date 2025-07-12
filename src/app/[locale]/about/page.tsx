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
                Chi Siamo
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Studio di ingegneria civile e ambientale specializzato in progetti di grande valore e sostenibilità.
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
            <h2 className="text-3xl font-bold text-primary mb-8">Il Nostro Studio</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-themeTextSecondary mb-6 text-justify">
                {process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - Ingegneria & Costruzioni è uno studio di ingegneria civile e ambientale che si distingue per 
                l'approccio professionale e innovativo nella progettazione edile, sostenibilità e sicurezza. 
                Il nostro team è guidato dall'Ing. Loris Cavallaro, specializzato in sicurezza sui luoghi di lavoro.
              </p>
              <p className="text-lg text-themeTextSecondary mb-6 text-justify">
                Ci occupiamo di bandi di gara, gare d'appalto, progettazioni civili, pratiche urbanistiche, 
                diagnosi energetiche secondo Legge 10, certificazioni APE e progettazione di impianti fotovoltaici. 
                Un vero e proprio punto di riferimento per progettazione e sostenibilità.
              </p>
              <blockquote className="border-l-4 border-eliteGold pl-6 py-4 bg-eliteLight">
                <p className="text-xl font-medium text-primary italic">
                  "La nostra missione è vedere ciò che creiamo sulla carta trasformarsi in realtà tangibile, 
                  costruendo non solo strutture, ma anche bellezza, funzionalità e sostenibilità per le future generazioni."
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
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Il Nostro Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={lorisImg2}
                  alt="Ing. Loris Cavallaro - Direttore Tecnico"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Ing. Loris Cavallaro</h3>
                <p className="text-lg text-eliteGold font-semibold mb-4">Direttore Tecnico e Fondatore</p>
                <p className="text-themeTextSecondary mb-4">
                  Ingegnere civile e ambientale con specializzazione in sicurezza sui luoghi di lavoro. 
                  Con anni di esperienza nel settore, guida il team tecnico dello studio con competenza 
                  e dedizione verso l'eccellenza progettuale.
                </p>
                <ul className="text-themeTextSecondary space-y-2">
                  <li>• Laurea Magistrale in Ingegneria Civile e Ambientale</li>
                  <li>• Specializzazione in Sicurezza sui Luoghi di Lavoro</li>
                  <li>• Esperto in Efficienza Energetica e Sostenibilità</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competencies Section */}
      <div className="bg-eliteLight py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Competenze</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Progettazione Edile</h3>
              <p className="text-themeTextSecondary">Progettazione strutturale e architettonica per edifici residenziali e commerciali</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Sostenibilità</h3>
              <p className="text-themeTextSecondary">Efficienza energetica, certificazioni APE e impianti fotovoltaici</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Sicurezza</h3>
              <p className="text-themeTextSecondary">Specializzazione in sicurezza sui luoghi di lavoro</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Bandi e Appalti</h3>
              <p className="text-themeTextSecondary">Gestione di bandi di gara e procedure di appalto pubblico</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Pratiche Urbanistiche</h3>
              <p className="text-themeTextSecondary">Autorizzazioni edilizie e conformità normativa</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Consulenza Tecnica</h3>
              <p className="text-themeTextSecondary">Perizie, valutazioni tecniche e supporto specialistico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
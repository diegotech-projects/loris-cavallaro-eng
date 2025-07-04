import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import lorisImg from '@/_docs/data/profilo/02_loris_img.jpeg';

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
                Chi sono
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Ingegnere civile e ambientale per contribuire a realizzare progetti di grande valore.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={lorisImg}
                alt="Ingegnere Loris Cavallaro"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bg-whiteOne py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">Loris Cavallaro</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Ingegnere civile e ambientale per contribuire a realizzare progetti di grande valore. 
                Con una laurea magistrale in sicurezza sui luoghi di lavoro, Loris è il professionista 
                che si occupa di bandi di gara, gare d'appalto, progettazioni civili, pratiche urbanistiche, 
                diagnosi legge 10, APE convenzionale e progettazione di impianti fotovoltaici.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Insomma, un vero e proprio punto di riferimento quando si parla di progettazione e sostenibilità.
              </p>
              <blockquote className="border-l-4 border-eliteGold pl-6 py-4 bg-eliteLight">
                <p className="text-xl font-medium text-primary italic">
                  "Vedere che ciò che crea sulla carta si trasforma in realtà tangibile, 
                  costruendo non solo strutture, ma anche bellezza e funzionalità, 
                  è per lui l'aspetto più gratificante di far parte di questa realtà."
                </p>
              </blockquote>
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
              <p className="text-gray-600">Progettazione strutturale e architettonica per edifici residenziali e commerciali</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Sostenibilità</h3>
              <p className="text-gray-600">Efficienza energetica, certificazioni APE e impianti fotovoltaici</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Sicurezza</h3>
              <p className="text-gray-600">Specializzazione in sicurezza sui luoghi di lavoro</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Bandi e Appalti</h3>
              <p className="text-gray-600">Gestione di bandi di gara e procedure di appalto pubblico</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Pratiche Urbanistiche</h3>
              <p className="text-gray-600">Autorizzazioni edilizie e conformità normativa</p>
            </div>
            <div className="bg-whiteOne p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Consulenza Tecnica</h3>
              <p className="text-gray-600">Perizie, valutazioni tecniche e supporto specialistico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import Image from 'next/image';

// Import project images
import project1_1 from '@/_docs/data/progetti_img/01_3D_esterno casa.jpeg';
import project1_2 from '@/_docs/data/progetti_img/01_3D_interno_casa_salone.jpeg';
import project1_3 from '@/_docs/data/progetti_img/01_3D_piantina_mappa_esterno.jpeg';
import project2_1 from '@/_docs/data/progetti_img_2/01_esterno_giorno_notte.jpeg';
import project2_2 from '@/_docs/data/progetti_img_2/02_esterno_giorno.jpeg';
import project2_3 from '@/_docs/data/progetti_img_2/03_interno salone.jpeg';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Villa Residenziale Moderna",
      category: "Progettazione Residenziale",
      description: "Progettazione completa di villa unifamiliare con focus su sostenibilità e efficienza energetica. Include progettazione strutturale, impianti e certificazione energetica.",
      images: [project1_1, project1_2, project1_3],
      features: ["Classe energetica A+", "Struttura antisismica", "Impianto fotovoltaico", "Design sostenibile"]
    },
    {
      id: 2,
      title: "Complesso Residenziale Urbano",
      category: "Progettazione Commerciale",
      description: "Progetto di ristrutturazione e ampliamento per complesso residenziale con integrazione architettonica nel contesto urbano esistente.",
      images: [project2_1, project2_2, project2_3],
      features: ["Ristrutturazione completa", "Efficienza energetica", "Integrazione urbana", "Spazi comuni innovativi"]
    }
  ];

  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-whiteOne mb-6">
            I Nostri Progetti
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Una selezione dei nostri progetti più significativi, 
            che dimostrano la qualità e l'innovazione del nostro approccio all'ingegneria civile.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-whiteOne py-20">
        <div className="container-custom">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Project Images */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <Image
                      src={project.images[1]}
                      alt={`${project.title} - Interior`}
                      width={290}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg shadow-md"
                    />
                    <Image
                      src={project.images[2]}
                      alt={`${project.title} - Plan`}
                      width={290}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="mb-4">
                    <span className="bg-eliteGold text-whiteOne px-4 py-2 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">{project.title}</h2>
                  <p className="text-lg text-themeTextSecondary mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">Caratteristiche Principali</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-themeTextSecondary opacity-50">
                          <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <button className="bg-eliteNavy text-whiteOne px-6 py-3 rounded-lg font-medium hover:bg-eliteDark transition-colors">
                      Dettagli Progetto
                    </button>
                    <button className="border border-eliteGray text-eliteSlate px-6 py-3 rounded-lg font-medium hover:bg-whiteTwo transition-colors">
                      Galleria Immagini
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photovoltaic Projects Section */}
      <div className="bg-eliteLight py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Progetti Fotovoltaici
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* We'll add photovoltaic project images here */}
            <div className="bg-whiteOne rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-eliteNavy to-eliteGold flex items-center justify-center">
                <span className="text-whiteOne font-semibold">Impianto Fotovoltaico Lipari</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Impianto Fotovoltaico Residenziale</h3>
                <p className="text-themeTextSecondary opacity-50 mb-4">Progettazione e installazione impianto fotovoltaico per abitazione privata con ottimizzazione energetica.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Potenza: 6 kW</span>
                  <span>Anno: 2023</span>
                </div>
              </div>
            </div>
            
            <div className="bg-whiteOne rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-eliteGold to-eliteNavy flex items-center justify-center">
                <span className="text-whiteOne font-semibold">Efficienza Energetica</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Diagnosi Energetica Commerciale</h3>
                <p className="text-themeTextSecondary opacity-50 mb-4">Analisi energetica completa per edificio commerciale con proposte di miglioramento.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Risparmio: 40%</span>
                  <span>Classe: A+</span>
                </div>
              </div>
            </div>

            <div className="bg-whiteOne rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-eliteNavy to-eliteGold flex items-center justify-center">
                <span className="text-whiteOne font-semibold">Consulenza Tecnica</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Bando Pubblico Infrastrutture</h3>
                <p className="text-themeTextSecondary opacity-50 mb-4">Supporto tecnico per partecipazione a bando pubblico per opere infrastrutturali.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Valore: €2M</span>
                  <span>Status: Aggiudicato</span>
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
            Vuoi realizzare il tuo progetto?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contattaci per discutere del tuo progetto e scoprire come possiamo 
            trasformare le tue idee in soluzioni concrete e sostenibili.
          </p>
          <button className="bg-whiteOne text-eliteGold px-8 py-4 rounded-lg font-semibold hover:bg-eliteLight transition-colors">
            Inizia il tuo Progetto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
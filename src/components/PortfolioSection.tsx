import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Import project images
import project1 from '@/_docs/data/progetti_img/01_3D_esterno casa.jpeg';
import project2 from '@/_docs/data/progetti_img/01_3D_interno_casa_salone.jpeg';
import project3 from '@/_docs/data/progetti_img_2/01_esterno_giorno_notte.jpeg';
import project4 from '@/_docs/data/progetti_img_2/02_esterno_giorno.jpeg';

function ProjectShowcase() {
  const featuredProjects = [
    {
      id: 1,
      title: "Villa Residenziale Moderna",
      category: "Progettazione Residenziale",
      image: project1,
      description: "Progettazione completa di villa unifamiliare con focus su sostenibilità ed efficienza energetica.",
      year: "2023"
    },
    {
      id: 2,
      title: "Interni Contemporanei",
      category: "Design Interno",
      image: project2,
      description: "Progettazione spazi interni con soluzioni innovative e materiali sostenibili.",
      year: "2023"
    },
    {
      id: 3,
      title: "Complesso Residenziale",
      category: "Edilizia Commerciale",
      image: project3,
      description: "Ristrutturazione e ampliamento per complesso residenziale urbano.",
      year: "2022"
    },
    {
      id: 4,
      title: "Edificio Sostenibile",
      category: "Efficienza Energetica",
      image: project4,
      description: "Progetto con certificazione energetica A+ e impianti fotovoltaici integrati.",
      year: "2022"
    }
  ];

  return (
    <div className="container-custom">
      {/* Header Section */}
      <div className="text-center mb-16">
        <button className="bg-themeAccent text-themeSurface px-6 py-3 rounded-full text-sm font-medium mb-6 flex items-center gap-2 mx-auto">
          <FaExternalLinkAlt className="w-4 h-4" />
          I Nostri Progetti
        </button>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary">
            Progetti in<br />evidenza
          </h2>
          <div className="flex gap-4">
            <Link href="/projects" className="bg-themeSecondary text-themeSurface px-6 py-3 rounded-lg font-medium hover:bg-themeAccent transition-colors">
              Tutti i Progetti
            </Link>
            <Link href="/contact" className="border border-themeSecondary text-themeSecondary px-6 py-3 rounded-lg font-medium hover:bg-themeSecondary hover:text-themeSurface transition-colors">
              Richiedi Preventivo
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-themeSurfaceLight aspect-square mb-4">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-themeSecondary bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              <div className="absolute top-3 right-3">
                <span className="bg-themeAccent text-themeSurface px-2 py-1 rounded text-xs font-medium">
                  {project.year}
                </span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-themeAccent text-xs font-medium uppercase tracking-wide">
                {project.category}
              </span>
              <h3 className="font-semibold text-lg text-themeTextPrimary mb-2 mt-1">
                {project.title}
              </h3>
              <p className="text-themeTextSecondary text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-themeTextSecondary mb-6">
          Scopri tutti i nostri progetti e le soluzioni innovative che abbiamo sviluppato
        </p>
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 bg-themeSecondary text-themeSurface px-8 py-3 rounded-lg font-medium hover:bg-themeAccent transition-colors"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
          Visualizza Tutti i Progetti
        </Link>
      </div>
    </div>
  );
}

export default ProjectShowcase;

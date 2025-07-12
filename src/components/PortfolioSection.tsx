import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Import project images
import project1 from '@/_docs/data/progetti_img/01_3D_esterno casa.jpeg';
import project2 from '@/_docs/data/progetti_img/01_3D_interno_casa_salone.jpeg';
import project3 from '@/_docs/data/progetti_img_2/01_esterno_giorno_notte.jpeg';
import project4 from '@/_docs/data/progetti_img_2/02_esterno_giorno.jpeg';

function ProjectShowcase() {
  const t = useTranslations('portfolioSection');
  
  // Get translated project data
  const translatedProjects = t.raw('featuredProjects');
  
  // Combine with images
  const images = [project1, project2, project3, project4];
  const featuredProjects = translatedProjects.map((project: any, index: number) => ({
    ...project,
    image: images[index]
  }));

  return (
    <div className="container-custom">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-themeTextPrimary">
            {t('title').split(' ').map((word, index, array) => (
              <span key={index}>
                {word}
                {index === array.length - 2 ? <br /> : ' '}
              </span>
            ))}
          </h2>
          <div className="flex gap-4">
            <Link href="/projects" className="bg-themeAccent text-themeSurface px-6 py-3 rounded-lg font-medium hover:bg-themeSecondary transition-colors">
              {t('viewAllProjects')}
            </Link>
            <Link href="/contact#contact-form" className="bg-themeAccent opacity-65 text-themeSurface px-6 py-3 rounded-lg font-medium hover:bg-themeSecondary transition-colors">
              {t('requestQuote')}
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProjects.map((project: any) => (
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
          {t('cta.description')}
        </p>
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 bg-themeAccent text-themeSurface px-6 py-3 rounded-lg font-medium hover:bg-themeSecondary transition-colors"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
          {t('cta.button')}
        </Link>
      </div>
    </div>
  );
}

export default ProjectShowcase;

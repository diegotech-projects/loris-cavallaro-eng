import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Define project images

function ProjectShowcase() {
  const t = useTranslations('portfolioSection');

  // Get translated project data
  const translatedProjects = t.raw('featuredProjects');

  // Combine with images
  const images = [
    '/images/portfolio/projects/01_3D_esterno casa.jpeg',
    '/images/portfolio/projects/01_3D_interno_casa_salone.jpeg',
    '/images/portfolio/projects/01_esterno_giorno_notte.jpeg',
    '/images/portfolio/projects/02_esterno_giorno.jpeg',
  ];
  const featuredProjects = translatedProjects.map(
    (project: any, index: number) => ({
      ...project,
      image: images[index],
    }),
  );

  return (
    <div className="container-custom">
      {/* Header Section */}
      <div className="mb-16 text-center">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <h2 className="text-4xl font-bold text-themeTextPrimary lg:text-5xl">
            {t('title')
              .split(' ')
              .map((word, index, array) => (
                <span key={index}>
                  {word}
                  {index === array.length - 2 ? <br /> : ' '}
                </span>
              ))}
          </h2>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-themeAccent px-6 py-3 font-medium text-themeSurface transition-colors hover:bg-themeSecondary"
            >
              {t('viewAllProjects')}
            </Link>
            <Link
              href="/contact#contact-form"
              className="rounded-lg bg-themeAccent px-6 py-3 font-medium text-themeSurface opacity-65 transition-colors hover:bg-themeSecondary"
            >
              {t('requestQuote')}
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featuredProjects.map((project: any) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-themeSurfaceLight">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-themeSecondary bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20" />
              <div className="absolute right-3 top-3">
                <span className="rounded bg-themeAccent px-2 py-1 text-xs font-medium text-themeSurface">
                  {project.year}
                </span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-wide text-themeAccent">
                {project.category}
              </span>
              <h3 className="mb-2 mt-1 text-lg font-semibold text-themeTextPrimary">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-themeTextSecondary">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="mb-6 text-themeTextSecondary">{t('cta.description')}</p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg bg-themeAccent px-6 py-3 font-medium text-themeSurface transition-colors hover:bg-themeSecondary"
        >
          <FaExternalLinkAlt className="size-4" />
          {t('cta.button')}
        </Link>
      </div>
    </div>
  );
}

export default ProjectShowcase;

'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import ProjectModal from '@/components/ProjectModal';
import { ProjectsData } from '@/data/content';
import type { Project } from '@/data/types';

// Define project images

const ProjectsPage = () => {
  const t = useTranslations('projectsPage');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Get translation data and combine with images
  const translatedProjects = ProjectsData();
  const projects: Project[] = [
    {
      ...translatedProjects[0],
      images: [
        '/images/portfolio/projects/01_3D_esterno casa_2.jpeg',
        '/images/portfolio/projects/01_3D_interno_casa_bagno.jpeg',
        '/images/portfolio/projects/03_3D_model_pool.jpeg',
      ],
    },
    {
      ...translatedProjects[1],
      images: [
        '/images/portfolio/projects/01_esterno_giorno_notte.jpeg',
        '/images/portfolio/projects/02_esterno_giorno.jpeg',
        '/images/portfolio/projects/03_interno salone.jpeg',
      ],
    },
    {
      ...translatedProjects[2],
      images: [
        '/images/portfolio/photovoltaic/02_fotovotaico.png',
        '/images/portfolio/photovoltaic/05_fotovotaico.png',
        '/images/portfolio/photovoltaic/07_fotovotaico.png',
      ],
    },
  ];

  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="mb-6 text-4xl font-bold text-whiteOne lg:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-blue-100">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-whiteOne py-20">
        <div className="container-custom">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Project Images */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      {project.images[0] && (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="h-64 w-full rounded-lg object-cover shadow-lg"
                        />
                      )}
                    </div>
                    {project.images[1] && (
                      <Image
                        src={project.images[1]}
                        alt={`${project.title} - Interior`}
                        width={290}
                        height={200}
                        className="h-40 w-full rounded-lg object-cover shadow-md"
                      />
                    )}
                    {project.images[2] && (
                      <Image
                        src={project.images[2]}
                        alt={`${project.title} - Plan`}
                        width={290}
                        height={200}
                        className="h-40 w-full rounded-lg object-cover shadow-md"
                      />
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div className="mb-4">
                    <span className="rounded-full bg-eliteGold px-4 py-2 text-sm font-medium text-whiteOne">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-primary">
                    {project.title}
                  </h2>
                  <p className="mb-6 text-lg text-themeTextSecondary">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="mb-3 text-xl font-semibold text-primary">
                      {t('projectFeatures.title')}
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature: string) => (
                        <li
                          key={`feature-${feature.slice(0, 15)}`}
                          className="flex items-center text-themeTextSecondary opacity-70"
                        >
                          <span className="mr-3 size-2 rounded-full bg-eliteGold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => openModal(project)}
                      className="ext-themeSurface rounded-lg bg-themeAccent px-6 py-3 font-medium opacity-70 transition-colors hover:bg-themeSecondary"
                    >
                      {t('viewProject')}
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
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            {t('photovoltaicSection.title')}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Residential Photovoltaic System */}
            <div className="overflow-hidden rounded-lg bg-whiteOne shadow-md">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-eliteNavy to-eliteGold">
                <span className="font-semibold text-whiteOne">
                  Impianto Fotovoltaico Lipari
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  {t('photovoltaicSection.residentialSystem.title')}
                </h3>
                <p className="mb-4 text-themeTextSecondary opacity-50">
                  {t('photovoltaicSection.residentialSystem.description')}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    {t('photovoltaicSection.residentialSystem.power')}
                  </span>
                  <span>{t('photovoltaicSection.residentialSystem.year')}</span>
                </div>
              </div>
            </div>

            {/* Energy Diagnosis */}
            <div className="overflow-hidden rounded-lg bg-whiteOne shadow-md">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-eliteGold to-eliteNavy">
                <span className="font-semibold text-whiteOne">
                  Efficienza Energetica
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  {t('photovoltaicSection.energyDiagnosis.title')}
                </h3>
                <p className="mb-4 text-themeTextSecondary opacity-50">
                  {t('photovoltaicSection.energyDiagnosis.description')}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    {t('photovoltaicSection.energyDiagnosis.savings')}
                  </span>
                  <span>
                    {t('photovoltaicSection.energyDiagnosis.energyClass')}
                  </span>
                </div>
              </div>
            </div>

            {/* Public Tender */}
            <div className="overflow-hidden rounded-lg bg-whiteOne shadow-md">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-eliteNavy to-eliteGold">
                <span className="font-semibold text-whiteOne">
                  Consulenza Tecnica
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-primary">
                  {t('photovoltaicSection.publicTender.title')}
                </h3>
                <p className="mb-4 text-themeTextSecondary opacity-50">
                  {t('photovoltaicSection.publicTender.description')}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{t('photovoltaicSection.publicTender.value')}</span>
                  <span>{t('photovoltaicSection.publicTender.status')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-eliteGray py-20">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-4xl font-bold text-whiteOne">
            {t('cta.title')}
          </h2>
          <p className="text-black-100 mx-auto mb-8 max-w-2xl text-xl">
            {t('cta.description')}
          </p>
          <a
            href="/contact#contact-form"
            className="rounded-lg bg-whiteOne px-8 py-4 font-semibold text-eliteGold transition-colors hover:bg-eliteLight"
          >
            {t('cta.button')}
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectsPage;

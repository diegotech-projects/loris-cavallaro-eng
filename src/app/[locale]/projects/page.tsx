'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ProjectModal from '@/components/ProjectModal';
import { ProjectsData } from '@/data/content';
import type { Project } from '@/data/types';

// Import project images
import project1_1 from '@/_docs/data/progetti_img/01_3D_esterno casa.jpeg';
import project1_2 from '@/_docs/data/progetti_img/01_3D_interno_casa_salone.jpeg';
import project1_3 from '@/_docs/data/progetti_img/01_3D_piantina_mappa_esterno.jpeg';
import project2_1 from '@/_docs/data/progetti_img_2/01_esterno_giorno_notte.jpeg';
import project2_2 from '@/_docs/data/progetti_img_2/02_esterno_giorno.jpeg';
import project2_3 from '@/_docs/data/progetti_img_2/03_interno salone.jpeg';
// Import photovoltaic project images
import fotovoltaico1 from '@/_docs/data/fotovoltaico_lipari/02_fotovotaico.png';
import fotovoltaico2 from '@/_docs/data/fotovoltaico_lipari/05_fotovotaico.png';
import fotovoltaico3 from '@/_docs/data/fotovoltaico_lipari/07_fotovotaico.png';

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
      images: [project1_1, project1_2, project1_3]
    },
    {
      ...translatedProjects[1],
      images: [project2_1, project2_2, project2_3]
    },
    {
      ...translatedProjects[2],
      images: [fotovoltaico1, fotovoltaico2, fotovoltaico3]
    },
  ];

  return (
    <div className="relative bg-eliteLight">
      {/* Hero Section */}
      <div className="bg-eliteNavy py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-whiteOne mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('hero.subtitle')}
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
                      {project.images[0] && (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                      )}
                    </div>
                    {project.images[1] && (
                      <Image
                        src={project.images[1]}
                        alt={`${project.title} - Interior`}
                        width={290}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                      />
                    )}
                    {project.images[2] && (
                      <Image
                        src={project.images[2]}
                        alt={`${project.title} - Plan`}
                        width={290}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                      />
                    )}
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
                    <h3 className="text-xl font-semibold text-primary mb-3">{t('projectFeatures.title')}</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center text-themeTextSecondary opacity-70">
                          <span className="w-2 h-2 bg-eliteGold rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => openModal(project)}
                      className="bg-themeAccent opacity-70 px-6 py-3 rounded-lg font-medium ext-themeSurface hover:bg-themeSecondary transition-colors"
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
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            {t('photovoltaicSection.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Photovoltaic System */}
            <div className="bg-whiteOne rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-eliteNavy to-eliteGold flex items-center justify-center">
                <span className="text-whiteOne font-semibold">Impianto Fotovoltaico Lipari</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{t('photovoltaicSection.residentialSystem.title')}</h3>
                <p className="text-themeTextSecondary opacity-50 mb-4">{t('photovoltaicSection.residentialSystem.description')}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{t('photovoltaicSection.residentialSystem.power')}</span>
                  <span>{t('photovoltaicSection.residentialSystem.year')}</span>
                </div>
              </div>
            </div>
            
            {/* Energy Diagnosis */}
            <div className="bg-whiteOne rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-eliteGold to-eliteNavy flex items-center justify-center">
                <span className="text-whiteOne font-semibold">Efficienza Energetica</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{t('photovoltaicSection.energyDiagnosis.title')}</h3>
                <p className="text-themeTextSecondary opacity-50 mb-4">{t('photovoltaicSection.energyDiagnosis.description')}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{t('photovoltaicSection.energyDiagnosis.savings')}</span>
                  <span>{t('photovoltaicSection.energyDiagnosis.energyClass')}</span>
                </div>
              </div>
            </div>

            {/* Public Tender */}
            <div className="bg-whiteOne rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-eliteNavy to-eliteGold flex items-center justify-center">
                <span className="text-whiteOne font-semibold">Consulenza Tecnica</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{t('photovoltaicSection.publicTender.title')}</h3>
                <p className="text-themeTextSecondary opacity-50 mb-4">{t('photovoltaicSection.publicTender.description')}</p>
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
          <h2 className="text-4xl font-bold text-whiteOne mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-black-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <a href="/contact#contact-form" className="bg-whiteOne text-eliteGold px-8 py-4 rounded-lg font-semibold hover:bg-eliteLight transition-colors">
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
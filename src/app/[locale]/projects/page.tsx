'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { Reveal } from '@/components/landing/motion';
import {
  FramedImage,
  NumberedList,
  PageCta,
  PageHero,
  SectionHeader,
  SheetGrid,
} from '@/components/page/PageParts';
import ProjectModal from '@/components/ProjectModal';
import { ProjectsData } from '@/data/content';
import type { Project } from '@/data/types';

const projectImages = [
  [
    '/images/portfolio/projects/01_3D_esterno casa_2.jpeg',
    '/images/portfolio/projects/01_3D_interno_casa_bagno.jpeg',
    '/images/portfolio/projects/03_3D_model_pool.jpeg',
  ],
  [
    '/images/portfolio/projects/01_esterno_giorno_notte.jpeg',
    '/images/portfolio/projects/02_esterno_giorno.jpeg',
    '/images/portfolio/projects/03_interno salone.jpeg',
  ],
  [
    '/images/lines/solar-sea.jpg',
    '/images/lines/solar-vineyard.jpg',
    '/images/lines/solar-pergola.jpg',
  ],
];

const energyCards = [
  {
    key: 'residentialSystem',
    image: '/images/lines/solar-hero.jpg',
    meta: ['power', 'year'],
  },
  {
    key: 'energyDiagnosis',
    image: '/images/lines/solar-storage.jpg',
    meta: ['savings', 'energyClass'],
  },
  {
    key: 'publicTender',
    image: '/images/lines/prefab-hillside.jpg',
    meta: ['value', 'status'],
  },
] as const;

const ProjectsPage = () => {
  const t = useTranslations('projectsPage');
  const tSheet = useTranslations('landing.sheet');
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

  const projectsText = ProjectsData() as Omit<Project, 'images'>[];
  const projects: Project[] = projectsText
    .slice(0, projectImages.length)
    .map((project, index) => ({ ...project, images: projectImages[index]! }));

  return (
    <main className="relative bg-ink text-bone">
      <PageHero
        sheet={`${tSheet('short')} P — ${t('hero.title')}`}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* Projects */}
      {projects.map((project, index) => {
        const code = `P.${String(index + 1).padStart(2, '0')}`;
        const reversed = index % 2 === 1;
        return (
          <section
            key={project.id}
            className="border-b border-bone/10 py-24 md:py-32"
          >
            <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal
                className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
              >
                <FramedImage
                  src={project.images[0]!}
                  alt={project.title}
                  caption={`${code} — ${project.title}`}
                  className="aspect-[16/10]"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
                <div className="mt-4 grid grid-cols-2 gap-4 px-3 md:px-4">
                  {project.images.slice(1, 3).map((src) => (
                    <div
                      key={typeof src === 'string' ? src : src.src}
                      className="relative aspect-[4/3] overflow-hidden bg-bone/5"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 27vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal
                delay={0.1}
                className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}
              >
                <p className="mb-4 flex items-center gap-3 font-display text-xs uppercase tracking-[0.25em] text-bone/55">
                  <span className="tabular-nums text-brick">{code}</span>
                  {project.category}
                </p>
                <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-5xl">
                  {project.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-bone/65">
                  {project.description}
                </p>
                <p className="mb-2 mt-10 font-display text-[11px] uppercase tracking-[0.25em] text-bone/45">
                  {t('projectFeatures.title')}
                </p>
                <NumberedList items={project.features} prefix={code} />
                <button
                  type="button"
                  onClick={() => openModal(project)}
                  className="group mt-10 inline-flex items-center gap-3 rounded-full border border-bone/30 px-6 py-3 text-sm font-medium transition-colors hover:border-bone hover:bg-bone hover:text-ink"
                >
                  {t('viewProject')}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:rotate-45"
                    aria-hidden
                  />
                </button>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Energy and technical work */}
      <section className="py-24 md:py-36">
        <div className="container-custom">
          <SectionHeader index="P.04" title={t('photovoltaicSection.title')} />
          <SheetGrid className="md:grid-cols-3">
            {energyCards.map((card, index) => (
              <article key={card.key} className="flex flex-col bg-ink">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={t(`photovoltaicSection.${card.key}.title`)}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-8 p-6 md:p-8">
                  <div>
                    <p className="mb-3 font-display text-xs tabular-nums tracking-[0.2em] text-brick">
                      P.04.{String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">
                      {t(`photovoltaicSection.${card.key}.title`)}
                    </h3>
                    <p className="mt-3 leading-relaxed text-bone/60">
                      {t(`photovoltaicSection.${card.key}.description`)}
                    </p>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-bone/15 pt-4 font-display text-[11px] uppercase tracking-[0.18em] text-bone/55">
                    {card.meta.map((metaKey) => (
                      <span key={metaKey}>
                        {t(`photovoltaicSection.${card.key}.${metaKey}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </SheetGrid>
        </div>
      </section>

      <PageCta
        title={t('cta.title')}
        description={t('cta.description')}
        button={t('cta.button')}
      />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </main>
  );
};

export default ProjectsPage;

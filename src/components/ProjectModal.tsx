'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useState } from 'react';

import type { Project } from '@/data/types';
import { Link as LocalizedLink } from '@/i18n/navigation';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const t = useTranslations('projectModal');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  }, [project.images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen) return null;

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
      role="presentation"
      tabIndex={-1}
    >
      <div
        className="max-h-[90vh] w-full max-w-6xl overflow-y-auto border border-bone/15 bg-ink text-bone"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-bone/15 p-6">
          <div>
            <span className="font-display text-xs uppercase tracking-[0.25em] text-brick">
              {project.category}
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-bone">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-bone/60 transition-colors hover:text-bone"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              {project.images[currentImageIndex] && (
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  width={600}
                  height={400}
                  className="h-80 w-full object-cover"
                />
              )}

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                    type="button"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail navigation */}
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2">
                {project.images.map((image, index) => {
                  const imageSrc =
                    typeof image === 'string' ? image : image.src;
                  return (
                    <button
                      type="button"
                      key={`thumbnail-${project.id}-${imageSrc}`}
                      onClick={() => goToImage(index)}
                      className={`size-16 overflow-hidden border transition-colors ${
                        index === currentImageIndex
                          ? 'border-bone'
                          : 'border-bone/20'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        width={64}
                        height={64}
                        className="size-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-display text-xl font-semibold text-bone">
                {t('projectDescription')}
              </h3>
              <p className="leading-relaxed text-themeTextSecondary">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-display text-xl font-semibold text-bone">
                {t('mainFeatures')}
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature: string) => (
                  <li
                    key={`feature-${feature.slice(0, 20)}`}
                    className="flex items-start text-themeTextSecondary"
                  >
                    <span className="mr-3 mt-2 size-2 shrink-0 rounded-full bg-brick" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-bone/15 p-4">
              <h3 className="mb-2 font-display text-lg font-semibold text-bone">
                {t('technicalInfo')}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-bold text-themeTextSecondary">
                    {t('projectNumber')}
                  </span>
                  <p className="font-medium text-themeTextSecondary opacity-70">
                    {project.id.toString().padStart(3, '0')}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-themeTextSecondary">
                    {t('category')}
                  </span>
                  <p className="font-medium text-themeTextSecondary opacity-70">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <LocalizedLink
                href="/contact#contact-form"
                className="flex-1 rounded-full bg-bone px-6 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-brick hover:text-bone"
              >
                {t('contactUs')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

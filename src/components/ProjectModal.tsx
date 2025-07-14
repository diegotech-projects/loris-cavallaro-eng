'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import type { Project } from '@/data/types';

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-lg bg-whiteOne"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <span className="rounded-full bg-eliteGold px-3 py-1 text-sm font-medium text-whiteOne">
              {project.category}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-primary">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 transition-colors hover:text-gray-700"
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
                  className="h-80 w-full rounded-lg object-cover"
                />
              )}

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-70"
                    type="button"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-70"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail navigation */}
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2">
                {project.images.map((image, index) => (
                  <button
                    type="button"
                    key={`thumbnail-${index}`}
                    onClick={() => goToImage(index)}
                    className={`size-16 overflow-hidden rounded-lg border-2 transition-colors ${
                      index === currentImageIndex
                        ? 'border-eliteGold'
                        : 'border-gray-300'
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
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                {t('projectDescription')}
              </h3>
              <p className="leading-relaxed text-themeTextSecondary">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                {t('mainFeatures')}
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li
                    key={`feature-${index}`}
                    className="flex items-start text-themeTextSecondary"
                  >
                    <span className="mr-3 mt-2 size-2 shrink-0 rounded-full bg-eliteGold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-eliteLight p-4">
              <h3 className="mb-2 text-lg font-semibold text-primary">
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
              <button
                type="button"
                className="flex-1 rounded-lg border border-eliteGray px-6 py-3 font-medium text-eliteSlate transition-colors hover:bg-whiteTwo"
              >
                {t('contactUs')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

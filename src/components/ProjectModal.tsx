'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/data/types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const t = useTranslations('projectModal');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-whiteOne rounded-lg max-w-6xl max-h-[90vh] w-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <span className="bg-eliteGold text-whiteOne px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold text-primary mt-2">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              {project.images[currentImageIndex] && (
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                />
              )}
              
              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail navigation */}
            {project.images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-eliteGold' : 'border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t('projectDescription')}</h3>
              <p className="text-themeTextSecondary leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t('mainFeatures')}</h3>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start text-themeTextSecondary">
                    <span className="w-2 h-2 bg-eliteGold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-eliteLight p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2">{t('technicalInfo')}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-themeTextSecondary font-bold">{t('projectNumber')}</span>
                  <p className="font-medium text-themeTextSecondary opacity-70">{project.id.toString().padStart(3, '0')}</p>
                </div>
                <div>
                  <span className="text-themeTextSecondary font-bold">{t('category')}</span>
                  <p className="font-medium text-themeTextSecondary opacity-70">{project.category}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex-1 border border-eliteGray text-eliteSlate px-6 py-3 rounded-lg font-medium hover:bg-whiteTwo transition-colors">
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
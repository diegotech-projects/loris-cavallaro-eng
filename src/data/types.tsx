import type { StaticImageData } from 'next/image';

export interface Service {
  id: number;
  icon: StaticImageData;
  title: string;
  content: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: (StaticImageData | string)[];
  features: string[];
}

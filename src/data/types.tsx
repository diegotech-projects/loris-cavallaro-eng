import type { StaticImageData } from 'next/image';

export interface Service {
  id: number;
  icon: StaticImageData;
  title: string;
  content: string;
}

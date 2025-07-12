import {useTranslations} from 'next-intl';
import exodus from '@/images/companies/exodus.png';
import firstbase from '@/images/companies/firstbase.png';
import omada from '@/images/companies/omada.png';
import robinhood from '@/images/companies/robinhood.png';
import samsara from '@/images/companies/samsara.png';
import doctor1 from '@/images/doctors/doctor1.png';
import doctor2 from '@/images/doctors/doctor2.png';
import doctor3 from '@/images/doctors/doctor3.png';
import doctor4 from '@/images/doctors/doctor4.png';
import doctor5 from '@/images/doctors/doctor5.png';
import doctor6 from '@/images/doctors/doctor6.png';
import phone from '@/images/services/phone.png';
import prescription from '@/images/services/prescription.png';
import records from '@/images/services/records.png';
import remote from '@/images/services/remote.png';
import booking from '@/images/services/success.png';

import type { Service } from './types';

export const companyLogos = [omada, robinhood, samsara, firstbase, exodus];

export const userServiceData = () => {
  const t = useTranslations('services');
  
  return [
    {
      id: 1,
      icon: phone,
      title: t('structuralDesign.title'),
      content: t('structuralDesign.content'),
    },
    {
      id: 2,
      icon: booking,
      title: t('projectManagement.title'),
      content: t('projectManagement.content'),
    },
    {
      id: 3,
      icon: records,
      title: t('buildingPermits.title'),
      content: t('buildingPermits.content'),
    },
    {
      id: 4,
      icon: remote,
      title: t('energyEfficiency.title'),
      content: t('energyEfficiency.content'),
    },
    {
      id: 5,
      icon: prescription,
      title: t('technicalConsulting.title'),
      content: t('technicalConsulting.content'),
    },
  ];
};

export const StatsData = () => {
  const t = useTranslations('home');
  
  return {
    content: t('stats.description'),
    
    stats: [
      {
        title: '50',
        stat: t('stats.completedProjects'),
      },
      {
        title: '10',
        stat: t('stats.yearsExperience'),
      },
      {
        title: '95%',
        stat: t('stats.satisfiedClients'),
      },
      {
        title: '25',
        stat: t('stats.photovoltaicSystems'),
      },
    ],
  };
};

export const Doctors: any = {
  '1': {
    image: doctor1,
    name: 'Jacob Jones',
    occupation: 'Physiotherapist',
  },
  '2': {
    image: doctor2,
    name: 'Jerome Bell',
    occupation: 'Cardiologist',
  },
  '3': {
    image: doctor3,
    name: 'Theresa Webb',
    occupation: 'Neurologist',
  },
  '4': {
    image: doctor4,
    name: 'Ronald Richards',
    occupation: 'Endocrinologist',
  },
  '5': {
    image: doctor5,
    name: 'Floyyd Miles',
    occupation: 'Hermatologist',
  },
  '6': {
    image: doctor6,
    name: 'Dernale Robertson',
    occupation: 'Gynacologist',
  },
};

export const ReviewData = () => {
  const t = useTranslations('reviews');
  
  return [
    {
      name: t('review1.name'),
      profile:
        'https://img.freepik.com/free-photo/young-male-posing-isolated-against-blank-studio-wall_273609-12356.jpg?size=626&ext=jpg&ga=GA1.2.1638277978.1690639805&semt=ais',
      occupation: t('review1.occupation'),
      review:
        `Abbiamo collaborato con ${process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - ${process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'} ${t('review1.review')}`,
    },
    {
      name: t('review2.name'),
      profile:
        'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-129412.jpg?size=626&ext=jpg&ga=GA1.1.1638277978.1690639805&semt=ais',
      occupation: t('review2.occupation'),
      review:
        `La collaborazione con il team di ${process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - ${process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'} ${t('review2.review')}`,
    },
    {
      name: t('review3.name'),
      profile:
        'https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?size=626&ext=jpg&ga=GA1.1.1638277978.1690639805&semt=ais',
      occupation: t('review3.occupation'),
      review: t('review3.review'),
    },
  ];
};

export const FAQData = () => {
  const t = useTranslations('faq');
  return t.raw('questions');
};

export const ProjectsData = () => {
  const t = useTranslations('projectsPage');
  return t.raw('projects');
};

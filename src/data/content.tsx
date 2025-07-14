import {useTranslations} from 'next-intl';
import phone from 'public/images/services/phone.png';
import prescription from 'public/images/services/prescription.png';
import records from 'public/images/services/records.png';
import remote from 'public/images/services/remote.png';
import booking from 'public/images/services/success.png';


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


export const ReviewData = () => {
  const t = useTranslations('reviews');
  
  return [
    {
      name: t('review1.name'),
      profile:
        '/images/testimonials/testimonial-1.jpg',
      occupation: t('review1.occupation'),
      review:
        `Abbiamo collaborato con ${process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - ${process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'} ${t('review1.review')}`,
    },
    {
      name: t('review2.name'),
      profile:
        '/images/testimonials/testimonial-2.jpg',
      occupation: t('review2.occupation'),
      review:
        `La collaborazione con il team di ${process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - ${process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'} ${t('review2.review')}`,
    },
    {
      name: t('review3.name'),
      profile:
        '/images/testimonials/testimonial-3.jpg',
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

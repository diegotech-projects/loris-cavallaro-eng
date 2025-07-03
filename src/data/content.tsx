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
      title: t('telemedicine.title'),
      content: t('telemedicine.content'),
    },
    {
      id: 2,
      icon: booking,
      title: t('onlineBooking.title'),
      content: t('onlineBooking.content'),
    },
    {
      id: 3,
      icon: records,
      title: t('healthRecords.title'),
      content: t('healthRecords.content'),
    },
    {
      id: 4,
      icon: remote,
      title: t('remoteTracking.title'),
      content: t('remoteTracking.content'),
    },
    {
      id: 5,
      icon: prescription,
      title: t('prescriptionRefill.title'),
      content: t('prescriptionRefill.content'),
    },
  ];
};


export const StatsData = {
  content:
    'Healing you, one step at a time, putting your health first.Compassionate care for all kinds of people! Healing you, one step at a time, putting your health first.Compassionate care for all kinds of people!',

  stats: [
    {
      title: '50',
      stat: 'Specialized Doctors',
    },
    {
      title: '2K',
      stat: 'Total Employees',
    },
    {
      title: '12K',
      stat: 'Happy Clients',
    },
  ],
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

export const ReviewData = [
  {
    name: 'Chris Martin',
    profile:
      'https://img.freepik.com/free-photo/young-male-posing-isolated-against-blank-studio-wall_273609-12356.jpg?size=626&ext=jpg&ga=GA1.2.1638277978.1690639805&semt=ais',
    occupation: 'Uber Driver',
    review:
      'This exceptional hospital impressed me with its caring and compassionate staff, impeccably clean facilities, and overall positive experience. I highly recommend it for anyone seeking reliable medical care, offering a comforting environment for healing and peace of mind.',
  },
  {
    name: 'Rebecca Alison',
    profile:
      'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-129412.jpg?size=626&ext=jpg&ga=GA1.1.1638277978.1690639805&semt=ais',
    occupation: 'Chef',
    review:
      'This exceptional hospital impressed me with its caring and compassionate staff, impeccably clean facilities, and overall positive experience. I highly recommend it for anyone seeking reliable medical care, offering a comforting environment for healing and peace of mind.',
  },
  {
    name: 'James Harden',
    profile:
      'https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?size=626&ext=jpg&ga=GA1.1.1638277978.1690639805&semt=ais',
    occupation: 'SalesMan',
    review:
      'This exceptional hospital impressed me with its caring and compassionate staff, impeccably clean facilities, and overall positive experience. I highly recommend it for anyone seeking reliable medical care, offering a comforting environment for healing and peace of mind.',
  },
];

export const FAQData = [
  {
    question: 'What service does your medical clinic offer?',
    answer:
      'Our clinic offers a wide range of medical services, including primary care, pedriatrics, gynaecology and geriatrics',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Our clinic offers a wide range of medical services, including primary care, pedriatrics, gynaecology and geriatrics',
  },
  {
    question: 'Do you have after hours or emergency services?',
    answer:
      'Our clinic offers a wide range of medical services, including primary care, pedriatrics, gynaecology and geriatrics',
  },
  {
    question: 'Can I schedule an appointment online?',
    answer:
      'Our clinic offers a wide range of medical services, including primary care, pedriatrics, gynaecology and geriatrics',
  },
  {
    question: 'How do I request a prescription refill?',
    answer:
      'Our clinic offers a wide range of medical services, including primary care, pedriatrics, gynaecology and geriatrics',
  },
];

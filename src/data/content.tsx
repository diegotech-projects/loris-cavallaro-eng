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


export const StatsData = {
  content:
    'Eccellenza nell\'ingegneria civile e ambientale. Costruiamo il futuro con competenza, sostenibilità e innovazione tecnica per ogni progetto.',

  stats: [
    {
      title: '50+',
      stat: 'Progetti Completati',
    },
    {
      title: '10+',
      stat: 'Anni di Esperienza',
    },
    {
      title: '95%',
      stat: 'Clienti Soddisfatti',
    },
    {
      title: '25+',
      stat: 'Impianti Fotovoltaici',
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
    name: 'Marco Rossi',
    profile:
      'https://img.freepik.com/free-photo/young-male-posing-isolated-against-blank-studio-wall_273609-12356.jpg?size=626&ext=jpg&ga=GA1.2.1638277978.1690639805&semt=ais',
    occupation: 'Imprenditore Edile',
    review:
      `Abbiamo collaborato con ${process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - ${process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'} per la progettazione di un complesso residenziale. La loro competenza tecnica e l'attenzione ai dettagli hanno superato le nostre aspettative. Progetto completato nei tempi previsti e con risultati eccellenti.`,
  },
  {
    name: 'Laura Bianchi',
    profile:
      'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-129412.jpg?size=626&ext=jpg&ga=GA1.1.1638277978.1690639805&semt=ais',
    occupation: 'Architetto',
    review:
      `La collaborazione con il team di ${process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - ${process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'} è stata fantastica. Hanno gestito tutti i calcoli strutturali per il nostro progetto architettonico con professionalità e precisione. Consigliatissimi per progetti complessi.`,
  },
  {
    name: 'Giuseppe Verdi',
    profile:
      'https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?size=626&ext=jpg&ga=GA1.1.1638277978.1690639805&semt=ais',
    occupation: 'Proprietario Villa',
    review:
      'Per la ristrutturazione della nostra villa hanno curato ogni aspetto: dalla progettazione alle pratiche burocratiche, fino alla certificazione energetica. Servizio completo e risultato finale straordinario. Villa ora in classe A+!',
  },
];

export const FAQData = [
  {
    question: 'Che tipo di servizi di ingegneria offrite?',
    answer:
      'Offriamo servizi completi di ingegneria civile e ambientale: progettazione strutturale, direzione lavori, pratiche urbanistiche, diagnosi energetiche, certificazioni APE, progettazione impianti fotovoltaici e consulenza tecnica per bandi di gara.',
  },
  {
    question: 'Quanto tempo richiede la progettazione di un edificio?',
    answer:
      'I tempi dipendono dalla complessità del progetto. Una progettazione residenziale standard richiede 4-8 settimane, mentre progetti commerciali più complessi possono richiedere 2-4 mesi. Forniamo sempre una stima precisa durante la consulenza iniziale.',
  },
  {
    question: 'Lavorate su tutto il territorio nazionale?',
    answer:
      'Sì, pur avendo sede in Sicilia, offriamo i nostri servizi su tutto il territorio nazionale. Per progetti fuori regione organizziamo sopralluoghi e coordinamento tramite partnership locali qualificate.',
  },
  {
    question: 'Quanto costa una consulenza o un preventivo?',
    answer:
      'La prima consulenza è gratuita e include una valutazione preliminare del progetto. I preventivi vengono forniti gratuitamente entro 48 ore dal sopralluogo. I costi variano in base alla tipologia e complessità del progetto.',
  },
  {
    question: 'Gestite anche le pratiche burocratiche?',
    answer:
      'Assolutamente sì. Ci occupiamo di tutte le pratiche urbanistiche, permessi di costruire, autorizzazioni edilizie e rapporti con gli enti pubblici. Il nostro servizio include il supporto completo dall\'ideazione alla realizzazione.',
  },
  {
    question: 'Offrite servizi di efficienza energetica?',
    answer:
      'Sì, siamo specializzati in diagnosi energetiche secondo Legge 10, certificazioni APE (Attestato di Prestazione Energetica) e progettazione di impianti fotovoltaici. Aiutiamo i clienti a ottenere le migliori classi energetiche e accedere agli incentivi statali.',
  },
];

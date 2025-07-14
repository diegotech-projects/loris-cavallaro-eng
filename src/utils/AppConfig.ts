export const AppConfig = {
  site_name: `${process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - ${process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'}`,
  title: `${process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - ${process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'} - Ingegneria Civile e Ambientale`,
  description:
    'Studio di ingegneria civile e ambientale specializzato in progettazione edile, sostenibilità e sicurezza. Servizi professionali di progettazione, bandi di gara e consulenza tecnica.',
  locale: 'it', // Default to Italian as requested
};

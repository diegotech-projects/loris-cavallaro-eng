export const AppConfig = {
  site_name: `${process.env.NEXT_PUBLIC_NOME_COGNOME || 'Loris Cavallaro'} - ${process.env.NEXT_PUBLIC_SIGLA || 'Ingegneria & Costruzioni'}`,
  title:
    'Cavallaro Ingegneria e Costruzioni | Fotovoltaico, case prefabbricate e ristrutturazioni chiavi in mano a Messina',
  description:
    'Studio di ingegneria e impresa a Messina: impianti fotovoltaici, case prefabbricate e ristrutturazioni chiavi in mano in Sicilia e in tutta Italia. Un unico referente, prezzi trasparenti, preventivo gratuito.',
  locale: 'it', // Default to Italian as requested
};

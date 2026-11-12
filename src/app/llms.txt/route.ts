import { getTranslations } from 'next-intl/server';

import { commercialLines, formatPrice } from '@/data/lines';
import { practices, PRACTICES_SLUG } from '@/data/practices';
import { BUSINESS, localizedUrl } from '@/utils/seo';

// llms.txt (https://llmstxt.org): a plain-text fact sheet that AI answer
// engines can read and quote. Built from the same data as the site, so prices
// and services never drift.
export async function GET() {
  const locale = 'it';
  const tLines = await getTranslations({ locale, namespace: 'lines' });
  const tPages = await getTranslations({ locale, namespace: 'seo.pages' });
  const tAreas = await getTranslations({ locale, namespace: 'landing.areas' });
  const tWhy = await getTranslations({ locale, namespace: 'landing.why' });
  const tAbout = await getTranslations({ locale, namespace: 'about' });
  const tPractices = await getTranslations({ locale, namespace: 'practices' });

  const practiceLines = practices
    .map(
      (p) =>
        `- ${tPractices(`items.${p.key}.name`)} (${tPractices(`items.${p.key}.full`)}): da ${formatPrice(p.price, locale)}. ${tPractices(`items.${p.key}.description`)}`,
    )
    .join('\n');

  const priceLine = (key: (typeof commercialLines)[number]['key']) => {
    const line = commercialLines.find((item) => item.key === key)!;
    return line.tiers
      .map((tier) => {
        const name = tLines(`${key}.tiers.${tier.key}.name`);
        if (tier.price === null) return `${name}: prezzo su misura`;
        const unit = tier.unit === 'sqm' ? '/m²' : '';
        return `${name}: a partire da ${formatPrice(tier.price, locale)}${unit}`;
      })
      .join('; ');
  };

  const lines = commercialLines
    .map((line) => {
      const solutions = Array.from(
        { length: line.solutionCount },
        (_, i) => `  - ${tLines(`${line.key}.solutions.s${i + 1}`)}`,
      ).join('\n');
      return [
        `### ${tLines(`${line.key}.title`)} chiavi in mano`,
        `${tLines(`${line.key}.lead`)} ${tLines(`${line.key}.summary`)}`,
        `- Prezzi: ${priceLine(line.key)}`,
        `- Pagina: ${localizedUrl(locale, `/${line.slug}`)}`,
        `- Include:`,
        solutions,
      ].join('\n');
    })
    .join('\n\n');

  const reasons = [
    'engineering',
    'tailored',
    'singleContact',
    'quality',
    'transparency',
    'integration',
  ]
    .map((key) => `- ${tWhy(`items.${key}`)}`)
    .join('\n');

  const body = `# ${BUSINESS.name}

> ${tPages('home.description')}

Studio di ingegneria e impresa di costruzioni guidato dall'Ing. ${BUSINESS.founder}, ${tAbout('team.director.role').toLowerCase()}. Sede a ${BUSINESS.city} (${BUSINESS.region}, Italia). ${tAreas('text')}

## Linee di servizio

${lines}

## Listino pratiche tecniche

${practiceLines}

${tPractices('note')}
Pagina: ${localizedUrl(locale, `/${PRACTICES_SLUG}`)}

## Altri servizi di ingegneria

- Progettazione strutturale, calcoli e verifiche sismiche
- Direzione lavori e coordinamento di cantiere
- Pratiche edilizie e urbanistiche
- Diagnosi energetiche (Legge 10) e certificazioni APE
- Consulenza tecnica, bandi di gara e appalti pubblici

## Perché scegliere lo studio

${reasons}

## Zone servite

${(tAreas.raw('items') as string[]).join(', ')}.

## Contatti

- Email: ${BUSINESS.email}
${BUSINESS.phone ? `- Telefono: +39 ${BUSINESS.phone}\n` : ''}- Preventivo gratuito: ${localizedUrl(locale, '/contact')}
- LinkedIn: ${BUSINESS.sameAs[0]}

## Pagine principali

- [Home](${localizedUrl(locale)})
- [Impianti fotovoltaici chiavi in mano](${localizedUrl(locale, '/fotovoltaico')})
- [Case prefabbricate chiavi in mano](${localizedUrl(locale, '/case-prefabbricate')})
- [Ristrutturazioni chiavi in mano](${localizedUrl(locale, '/ristrutturazioni')})
- [Listino pratiche tecniche](${localizedUrl(locale, `/${PRACTICES_SLUG}`)})
- [Servizi](${localizedUrl(locale, '/services')})
- [Progetti realizzati](${localizedUrl(locale, '/projects')})
- [Chi siamo](${localizedUrl(locale, '/about')})
- [Domande frequenti](${localizedUrl(locale, '/faq')})
- [English version](${localizedUrl('en')})
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

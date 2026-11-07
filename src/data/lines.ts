// The three commercial lines. Texts live in messages/*.json under `lines.<key>`;
// everything here is language-independent (images, prices, colours, ordering).

export type LineKey = 'solar' | 'prefab' | 'renovation';

export type LineTier = {
  key: string;
  // Starting price in euro; null means "price on request"
  price: number | null;
  unit?: 'sqm';
  highlighted?: boolean;
};

export type CommercialLine = {
  key: LineKey;
  slug: string;
  number: string;
  // Hex used for inline styles (gradients, glows) and full class names so
  // Tailwind keeps them in the build
  accent: string;
  accentText: string;
  accentBg: string;
  cover: string;
  gallery: string[];
  solutionCount: number;
  tiers: LineTier[];
};

// TODO: confirm every price with Loris before going live.
// The brief and the flyer disagree (e.g. solar 3.999 vs 6.900, prefab
// standard 4.980 vs 89.000, luxury 1.350 vs 1.200 €/m²).
export const commercialLines: CommercialLine[] = [
  {
    key: 'solar',
    slug: 'fotovoltaico',
    number: '01',
    accent: '#4f7cff',
    accentText: 'text-cobalt',
    accentBg: 'bg-cobalt',
    cover: '/images/lines/solar-hero.jpg',
    gallery: [
      '/images/lines/solar-pergola.jpg',
      '/images/lines/solar-storage.jpg',
      '/images/lines/solar-sea.jpg',
      '/images/lines/solar-vineyard.jpg',
    ],
    solutionCount: 6,
    tiers: [{ key: 'from', price: 3999, highlighted: true }],
  },
  {
    key: 'prefab',
    slug: 'case-prefabbricate',
    number: '02',
    accent: '#a9c7e8',
    accentText: 'text-ice',
    accentBg: 'bg-ice',
    cover: '/images/lines/prefab-hero.jpg',
    gallery: [
      '/images/lines/prefab-cube.jpg',
      '/images/lines/prefab-day-night.jpg',
      '/images/lines/prefab-terraces.jpg',
      '/images/lines/prefab-hillside.jpg',
    ],
    solutionCount: 7,
    tiers: [
      { key: 'standard', price: 89000 },
      { key: 'custom', price: null, highlighted: true },
    ],
  },
  {
    key: 'renovation',
    slug: 'ristrutturazioni',
    number: '03',
    accent: '#d0603f',
    accentText: 'text-brick',
    accentBg: 'bg-brick',
    cover: '/images/lines/reno-hero.jpg',
    gallery: [
      '/images/lines/reno-kitchen.jpg',
      '/images/lines/reno-bath.jpg',
      '/images/lines/reno-bedroom.jpg',
      '/images/lines/reno-living.jpg',
    ],
    solutionCount: 8,
    tiers: [
      { key: 'economy', price: 450, unit: 'sqm' },
      { key: 'luxury', price: 1350, unit: 'sqm', highlighted: true },
    ],
  },
];

export const lowestTier = (line: CommercialLine) =>
  line.tiers
    .filter((tier) => tier.price !== null)
    .sort((a, b) => a.price! - b.price!)[0];

// "€ 3.999" in Italian, "€3,999" in English (it-IT Intl drops the separator
// on 4-digit numbers, which looks inconsistent next to "€ 89.000")
export const formatPrice = (price: number, locale: string) => {
  const separator = locale === 'it' ? '.' : ',';
  const digits = Math.round(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return locale === 'it' ? `€ ${digits}` : `€${digits}`;
};

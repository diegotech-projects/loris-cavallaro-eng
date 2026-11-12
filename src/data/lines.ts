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
  // Text colour that stays readable on top of the accent
  onAccent: string;
  accentText: string;
  accentBg: string;
  cover: string;
  gallery: string[];
  solutionCount: number;
  tiers: LineTier[];
};

// Prices follow Loris's written brief (not the older flyer). Some were still
// marked as placeholders there, so double-check them before going live.
export const commercialLines: CommercialLine[] = [
  {
    key: 'solar',
    slug: 'fotovoltaico',
    number: '01',
    accent: '#c8643c',
    onAccent: '#0e0d0c',
    accentText: 'text-terracotta',
    accentBg: 'bg-terracotta',
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
    accent: '#d8b49a',
    onAccent: '#0e0d0c',
    accentText: 'text-plaster',
    accentBg: 'bg-plaster',
    cover: '/images/lines/prefab-render-gabled.jpg',
    gallery: [
      '/images/lines/prefab-render-modern.jpg',
      '/images/lines/prefab-render-build.jpg',
      '/images/lines/prefab-hero.jpg',
      '/images/lines/prefab-cube.jpg',
    ],
    solutionCount: 7,
    tiers: [
      { key: 'standard', price: 4980 },
      { key: 'custom', price: null, highlighted: true },
    ],
  },
  {
    key: 'renovation',
    slug: 'ristrutturazioni',
    number: '03',
    accent: '#b4452b',
    onAccent: '#eee9e0',
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

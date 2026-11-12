// Technical/engineering practices price list. Texts live in messages/*.json
// under `practices.items.<key>`; prices are starting prices in euro.
// TODO: Loris marked the SCIA price with an asterisk; confirm what it refers to.

export type PracticeKey = 'ape' | 'docfa' | 'cila' | 'scia' | 'permit';

export type Practice = {
  key: PracticeKey;
  code: string;
  price: number;
};

export const practices: Practice[] = [
  { key: 'ape', code: 'APE', price: 149 },
  { key: 'docfa', code: 'DOCFA', price: 349 },
  { key: 'cila', code: 'CILA', price: 599 },
  { key: 'scia', code: 'SCIA', price: 1399 },
  { key: 'permit', code: 'PdC', price: 3000 },
];

export const PRACTICES_SLUG = 'pratiche-tecniche';

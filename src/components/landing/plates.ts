// Geometry of the per-line technical plates (viewBox 0 0 1000 560).
// Each callout marks where a solution lives on the drawing, in the same
// order as `lines.<key>.solutions` in messages/*.json.

import type { LineKey } from '@/data/lines';

export type PlateTone = 'line' | 'accent' | 'muted' | 'demolition' | 'new';

export type PlatePath = {
  d: string;
  tone?: PlateTone;
  width?: number;
};

export type PlateText = {
  x: number;
  y: number;
  // Literal text, or a key under `lines.<key>.plate.labels`
  text?: string;
  labelKey?: string;
  anchor?: 'start' | 'middle' | 'end';
  rotate?: number;
  tone?: PlateTone;
};

export type Plate = {
  paths: PlatePath[];
  texts: PlateText[];
  callouts: { x: number; y: number }[];
};

const rect = (x: number, y: number, w: number, h: number) =>
  `M${x} ${y} H${x + w} V${y + h} H${x} Z`;

const dimension = (x1: number, x2: number, y: number) =>
  `M${x1} ${y} H${x2} M${x1 - 6} ${y + 6} L${x1 + 6} ${y - 6} M${x2 - 6} ${y + 6} L${x2 + 6} ${y - 6}`;

const verticalDimension = (y1: number, y2: number, x: number) =>
  `M${x} ${y1} V${y2} M${x - 6} ${y1 + 6} L${x + 6} ${y1 - 6} M${x - 6} ${y2 + 6} L${x + 6} ${y2 - 6}`;

// ---- 01 · Single-line electrical diagram ----
const panels = Array.from({ length: 6 }, (_, i) => {
  const x = 60 + (i % 3) * 88;
  const y = 80 + Math.floor(i / 3) * 54;
  return `${rect(x, y, 80, 46)} M${x} ${y + 23} H${x + 80} M${x + 40} ${y} V${y + 46}`;
}).join(' ');

const solar: Plate = {
  paths: [
    { d: panels, width: 1.2 },
    { d: 'M324 130 H430', tone: 'accent', width: 2 },
    { d: `${rect(430, 90, 130, 90)} M430 180 L560 90`, width: 1.6 },
    {
      d: `${rect(450, 300, 90, 60)} M470 300 V288 M520 300 V288 M462 330 H482 M472 320 V340 M508 330 H528`,
      width: 1.4,
    },
    { d: 'M495 180 V288', tone: 'accent', width: 2 },
    { d: 'M560 135 H652 M708 135 H800', tone: 'accent', width: 2 },
    { d: 'M652 135 a28 28 0 1 0 56 0 a28 28 0 1 0 -56 0', width: 1.4 },
    {
      d: `${rect(640, 30, 80, 55)} M650 75 L668 60 L684 68 L700 48 L712 54 M680 85 V107`,
      tone: 'muted',
      width: 1.2,
    },
    {
      d: 'M800 220 V120 L860 70 L920 120 V220 Z M850 220 V180 H870 V220',
      width: 1.6,
    },
    { d: 'M760 135 V300', tone: 'accent', width: 2 },
    { d: `${rect(735, 300, 50, 80)} M760 380 V410 M748 325 H772`, width: 1.4 },
    {
      d: 'M690 470 L708 438 H812 L830 470 Z M712 470 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0 M782 470 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0',
      tone: 'muted',
      width: 1.2,
    },
    { d: 'M60 520 H940', tone: 'muted', width: 0.8 },
  ],
  texts: [
    { x: 340, y: 120, text: 'DC' },
    { x: 590, y: 125, text: 'AC 230 V' },
    { x: 680, y: 140, text: 'kWh', anchor: 'middle' },
    { x: 458, y: 125, text: '=' },
    { x: 530, y: 168, text: '~' },
    { x: 60, y: 545, labelKey: 'title', tone: 'line' },
  ],
  callouts: [
    { x: 192, y: 60 },
    { x: 560, y: 330 },
    { x: 575, y: 100 },
    { x: 740, y: 30 },
    { x: 940, y: 150 },
    { x: 800, y: 330 },
  ],
};

// ---- 02 · Ground-floor plan ----
const pvPergola = Array.from({ length: 8 }, (_, i) =>
  rect(800 + (i % 2) * 72, 120 + Math.floor(i / 2) * 60, 64, 52),
).join(' ');

const prefab: Plate = {
  paths: [
    { d: `${rect(120, 60, 640, 400)} ${rect(136, 76, 608, 368)}`, width: 2 },
    {
      d: 'M440 76 V250 M440 310 V444 M440 250 H560 M620 250 H744 M600 250 V330 M600 390 V444',
      width: 2.4,
    },
    {
      d: 'M440 310 H496 A56 56 0 0 0 440 254 M560 250 V306 A56 56 0 0 0 616 250 M240 444 V388 A56 56 0 0 1 296 444',
      tone: 'muted',
      width: 1,
    },
    {
      d: 'M200 60 V76 M330 60 V76 M200 68 H330 M560 60 V76 M690 60 V76 M560 68 H690 M744 320 H760 M744 410 H760 M752 320 V410',
      width: 1.2,
    },
    {
      d: `${rect(520, 110, 120, 90)} M520 132 H640 ${rect(180, 330, 180, 40)} M136 120 H176 V240 H136`,
      tone: 'muted',
      width: 1,
    },
    { d: pvPergola, tone: 'accent', width: 1.4 },
    { d: dimension(120, 760, 30), tone: 'new', width: 1 },
    { d: verticalDimension(60, 460, 84), tone: 'new', width: 1 },
    {
      d: 'M880 470 a28 28 0 1 0 0.1 0 M880 500 V444 L870 464 M880 444 L890 464',
      tone: 'muted',
      width: 1.2,
    },
  ],
  texts: [
    { x: 440, y: 22, text: '12.80', anchor: 'middle', tone: 'new' },
    { x: 72, y: 260, text: '8.00', anchor: 'middle', rotate: -90, tone: 'new' },
    { x: 280, y: 230, labelKey: 'living', anchor: 'middle', tone: 'line' },
    { x: 590, y: 225, labelKey: 'bedroom', anchor: 'middle', tone: 'line' },
    { x: 520, y: 360, labelKey: 'bath', anchor: 'middle', tone: 'line' },
    { x: 672, y: 340, labelKey: 'study', anchor: 'middle', tone: 'line' },
    { x: 880, y: 425, text: 'N', anchor: 'middle' },
    { x: 868, y: 108, text: 'PV', anchor: 'middle', tone: 'accent' },
    { x: 120, y: 545, labelKey: 'title', tone: 'line' },
  ],
  callouts: [
    { x: 300, y: 30 },
    { x: 280, y: 270 },
    { x: 580, y: 160 },
    { x: 672, y: 380 },
    { x: 940, y: 240 },
    { x: 930, y: 470 },
    { x: 268, y: 500 },
  ],
};

// ---- 03 · Renovation plan: demolitions vs new works ----
const demolitionCrosses = Array.from(
  { length: 10 },
  (_, i) =>
    `M392 ${80 + i * 38} L408 ${96 + i * 38} M408 ${80 + i * 38} L392 ${96 + i * 38}`,
).join(' ');
const tiles = [
  ...Array.from({ length: 13 }, (_, i) => `M${140 + i * 20} 380 V450`),
  ...Array.from({ length: 4 }, (_, i) => `M140 ${380 + i * 20} H380`),
].join(' ');
const insulation = Array.from(
  { length: 32 },
  (_, i) => `${i === 0 ? 'M' : 'L'}${120 + i * 20} ${i % 2 === 0 ? 52 : 40}`,
).join(' ');

const renovation: Plate = {
  paths: [
    { d: rect(120, 60, 640, 400), width: 3 },
    { d: insulation, tone: 'accent', width: 1 },
    {
      d: `M392 60 V460 M408 60 V460 ${demolitionCrosses}`,
      tone: 'demolition',
      width: 1.2,
    },
    { d: 'M560 260 H760 M560 260 V340 M560 400 V460', tone: 'new', width: 3 },
    {
      d: `${rect(660, 360, 100, 100)} M660 360 L760 460 M760 360 L660 460`,
      width: 1,
    },
    {
      d: 'M600 290 a18 18 0 1 0 0.1 0 M600 308 V330 H700 V360',
      tone: 'muted',
      width: 1,
    },
    { d: `${rect(200, 290, 160, 50)} M136 100 H176 V240 H136`, width: 1.2 },
    { d: tiles, tone: 'muted', width: 0.8 },
    {
      d: 'M250 76 a7 7 0 1 0 0.1 0 M250 83 V96 M520 76 a7 7 0 1 0 0.1 0 M520 83 V96 M740 180 a7 7 0 1 0 0.1 0',
      width: 1.2,
    },
    { d: dimension(120, 760, 22), tone: 'muted', width: 1 },
    // Legend swatches
    { d: 'M820 120 H880', tone: 'demolition', width: 2 },
    { d: 'M820 160 H880', tone: 'new', width: 3 },
    {
      d: 'M820 200 L835 192 L850 200 L865 192 L880 200',
      tone: 'accent',
      width: 1,
    },
  ],
  texts: [
    { x: 440, y: 14, text: '12.40', anchor: 'middle' },
    { x: 892, y: 125, labelKey: 'demolition', tone: 'line' },
    { x: 892, y: 165, labelKey: 'newWorks', tone: 'line' },
    { x: 892, y: 205, labelKey: 'insulation', tone: 'line' },
    { x: 280, y: 280, labelKey: 'kitchen', anchor: 'middle', tone: 'line' },
    { x: 710, y: 345, labelKey: 'bath', anchor: 'middle', tone: 'line' },
    { x: 120, y: 545, labelKey: 'title', tone: 'line' },
  ],
  callouts: [
    { x: 150, y: 90 },
    { x: 760, y: 410 },
    { x: 250, y: 120 },
    { x: 260, y: 470 },
    { x: 560, y: 300 },
    { x: 640, y: 40 },
    { x: 800, y: 120 },
    { x: 360, y: 315 },
  ],
};

export const plates: Record<LineKey, Plate> = { solar, prefab, renovation };

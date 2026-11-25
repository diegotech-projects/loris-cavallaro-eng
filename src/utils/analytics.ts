// Google Analytics 4 / Google Ads helpers. Events are only sent when the
// visitor has granted analytics or marketing consent.

import { readConsent } from './consent';

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-17610258605';
// Conversion label from Google Ads (Goals > Conversions), e.g. "AbCdEfGhIj"
export const GOOGLE_ADS_LEAD_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL || '';

type Gtag = (...args: unknown[]) => void;

export const getGtag = (): Gtag | undefined =>
  typeof window === 'undefined'
    ? undefined
    : (window as Window & { gtag?: Gtag }).gtag;

const canTrack = () => {
  const consent = typeof window === 'undefined' ? null : readConsent();
  return Boolean(consent && (consent.analytics || consent.marketing));
};

export const trackEvent = (
  name: string,
  params: Record<string, unknown> = {},
) => {
  const gtag = getGtag();
  if (!gtag || !canTrack()) return;
  gtag('event', name, params);
};

// Contact form submitted successfully: GA4 key event + Google Ads conversion
export const trackLead = (projectType: string) => {
  trackEvent('generate_lead', {
    form: 'contact',
    project_type: projectType || 'unspecified',
  });
  const consent = readConsent();
  const gtag = getGtag();
  if (gtag && consent?.marketing && GOOGLE_ADS_ID && GOOGLE_ADS_LEAD_LABEL) {
    gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}`,
    });
  }
};

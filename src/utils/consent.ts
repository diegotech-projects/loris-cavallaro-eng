// Cookie consent shared by the banner and the Google tags.
// Bumping CONSENT_VERSION asks everyone again (v2 added analytics/marketing).

export const CONSENT_KEY = 'cookieConsent';
export const CONSENT_VERSION = 2;

// Fired on window when the visitor saves a choice / asks to reopen settings
export const CONSENT_EVENT = 'cavallaro:consent';
export const OPEN_SETTINGS_EVENT = 'cavallaro:cookie-settings';

export type ConsentState = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: number;
};

export const readConsent = (): ConsentState | null => {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    return parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
};

export const saveConsent = (
  choice: Pick<ConsentState, 'preferences' | 'analytics' | 'marketing'>,
) => {
  const consent: ConsentState = {
    necessary: true,
    ...choice,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Storage blocked: the choice still applies to this page view
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
  return consent;
};

export const openCookieSettings = () =>
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));

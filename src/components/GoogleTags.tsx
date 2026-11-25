'use client';

import { useEffect } from 'react';

import {
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  trackEvent,
} from '@/utils/analytics';
import type { ConsentState } from '@/utils/consent';
import { CONSENT_EVENT, readConsent } from '@/utils/consent';

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

let scriptLoaded = false;

// Google Consent Mode v2, "basic" setup: everything defaults to denied and
// gtag.js is not even downloaded until the visitor grants analytics or
// marketing in the cookie banner. Withdrawing consent later switches the
// consent signals back to denied.
const GoogleTags = () => {
  useEffect(() => {
    const w = window as GtagWindow;
    w.dataLayer = w.dataLayer || [];
    if (!w.gtag) {
      w.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments);
      };
      w.gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'granted',
        security_storage: 'granted',
      });
    }

    const loadScript = () => {
      if (scriptLoaded) return;
      const firstId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;
      if (!firstId) return;
      scriptLoaded = true;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${firstId}`;
      document.head.appendChild(script);
      w.gtag!('js', new Date());
      if (GA_MEASUREMENT_ID) w.gtag!('config', GA_MEASUREMENT_ID);
      if (GOOGLE_ADS_ID) w.gtag!('config', GOOGLE_ADS_ID);
    };

    const apply = (consent: ConsentState | null) => {
      if (!consent) return;
      w.gtag!('consent', 'update', {
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied',
        ad_user_data: consent.marketing ? 'granted' : 'denied',
        ad_personalization: consent.marketing ? 'granted' : 'denied',
      });
      if (
        (consent.analytics && GA_MEASUREMENT_ID) ||
        (consent.marketing && GOOGLE_ADS_ID)
      ) {
        loadScript();
      }
    };

    apply(readConsent());
    const onConsent = (event: Event) =>
      apply((event as CustomEvent<ConsentState>).detail);
    window.addEventListener(CONSENT_EVENT, onConsent);

    // Contact intents anywhere on the site: phone, email, quote buttons
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a');
      const href = link?.getAttribute('href') ?? '';
      if (href.startsWith('tel:')) {
        trackEvent('contact_click', { method: 'phone' });
      } else if (href.startsWith('mailto:')) {
        trackEvent('contact_click', { method: 'email' });
      } else if (href.includes('/contact')) {
        const line = new URL(href, window.location.origin).searchParams.get(
          'linea',
        );
        trackEvent('quote_click', {
          line: line || 'general',
          page: window.location.pathname,
        });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsent);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
};

export default GoogleTags;

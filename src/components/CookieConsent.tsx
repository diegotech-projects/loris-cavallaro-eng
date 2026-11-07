'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import { Link as LocalizedLink } from '@/i18n/navigation';

interface CookieConsentInterface {
  necessary: boolean;
  preferences: boolean;
  timestamp: number;
}

const ease = [0.16, 1, 0.3, 1] as const;

const buttonBase =
  'flex-1 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap';

type SwitchProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
};

// Square on/off switch in the drawing-sheet style
const Switch = ({ checked, onChange, label }: SwitchProps) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    onClick={() => onChange(!checked)}
    className={`relative h-6 w-11 shrink-0 border transition-colors ${
      checked ? 'border-brick bg-brick' : 'border-bone/30 bg-transparent'
    }`}
  >
    <motion.span
      className="absolute top-[3px] size-4 bg-bone"
      animate={{ left: checked ? 23 : 3 }}
      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
    />
  </button>
);

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const t = useTranslations('cookies');

  useEffect(() => {
    try {
      if (!localStorage.getItem('cookieConsent')) setShowBanner(true);
    } catch {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (consent: CookieConsentInterface) => {
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
    } catch {
      // Storage blocked: the choice simply is not remembered
    }
    setShowBanner(false);
    setShowSettings(false);
  };

  const save = (withPreferences: boolean) =>
    saveConsent({
      necessary: true,
      preferences: withPreferences,
      timestamp: Date.now(),
    });

  return (
    <>
      {/* Banner: compact title-block card, reject as prominent as accept */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            role="dialog"
            aria-label={t('notice.title')}
            className="fixed inset-x-3 bottom-3 z-50 border border-bone/20 bg-ink/95 text-bone shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:left-6 sm:w-[420px] md:bottom-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
          >
            <div className="flex items-center justify-between border-b border-bone/15 px-5 py-3 font-display text-[10px] uppercase tracking-[0.25em] text-bone/50">
              <span className="flex items-center gap-2">
                <span className="inline-block size-1.5 rounded-full bg-brick" />
                {t('notice.title')}
              </span>
              <span>L.02</span>
            </div>
            <div className="px-5 py-4">
              <p className="text-sm leading-relaxed text-bone/70">
                {t('notice.message')}{' '}
                <LocalizedLink
                  href="/cookie-policy"
                  className="text-bone underline underline-offset-4 hover:text-brick"
                >
                  {t('notice.learnMore')}
                </LocalizedLink>
              </p>
            </div>
            <div className="flex border-t border-bone/15">
              <button
                type="button"
                onClick={() => save(false)}
                className={`${buttonBase} border-r border-bone/15 text-bone/80 hover:bg-bone/5 hover:text-bone`}
              >
                {t('notice.reject')}
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className={`${buttonBase} border-r border-bone/15 text-bone/80 hover:bg-bone/5 hover:text-bone`}
              >
                {t('notice.settings')}
              </button>
              <button
                type="button"
                onClick={() => save(true)}
                className={`${buttonBase} bg-bone text-ink hover:bg-brick hover:text-bone`}
              >
                {t('notice.accept')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings sheet */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setShowSettings(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={t('settings.title')}
              className="max-h-[90vh] w-full max-w-xl overflow-y-auto border border-bone/20 bg-ink text-bone"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="flex items-center justify-between border-b border-bone/15 px-6 py-4">
                <h2 className="font-display text-xl font-semibold tracking-[-0.02em]">
                  {t('settings.title')}
                </h2>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="flex size-9 items-center justify-center border border-bone/20 transition-colors hover:border-bone hover:bg-bone hover:text-ink"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>

              <p className="px-6 py-5 text-sm leading-relaxed text-bone/65">
                {t('settings.description')}
              </p>

              <div className="grid gap-px border-y border-bone/15 bg-bone/15">
                <div className="bg-ink px-6 py-5">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="font-display font-semibold">
                      {t('settings.necessary.title')}
                    </h3>
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-bone/50">
                      {t('settings.necessary.always')}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-bone/55">
                    {t('settings.necessary.description')}
                  </p>
                </div>
                <div className="bg-ink px-6 py-5">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="font-display font-semibold">
                      {t('settings.preferences.title')}
                    </h3>
                    <Switch
                      checked={preferences}
                      onChange={setPreferences}
                      label={t('settings.preferences.title')}
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-bone/55">
                    {t('settings.preferences.description')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row">
                <button
                  type="button"
                  onClick={() => save(false)}
                  className={`${buttonBase} border-b border-bone/15 text-bone/80 hover:bg-bone/5 hover:text-bone sm:border-b-0 sm:border-r`}
                >
                  {t('settings.rejectAll')}
                </button>
                <button
                  type="button"
                  onClick={() => save(preferences)}
                  className={`${buttonBase} border-b border-bone/15 text-bone/80 hover:bg-bone/5 hover:text-bone sm:border-b-0 sm:border-r`}
                >
                  {t('settings.save')}
                </button>
                <button
                  type="button"
                  onClick={() => save(true)}
                  className={`${buttonBase} bg-bone text-ink hover:bg-brick hover:text-bone`}
                >
                  {t('settings.acceptAll')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;

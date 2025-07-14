'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { MdClose, MdCookie, MdSettings } from 'react-icons/md';

interface CookieConsentInterface {
  necessary: boolean;
  preferences: boolean;
  timestamp: number;
}

interface CookieBannerProps {
  t: (key: string) => string;
  onShowSettings: () => void;
  onAccept: () => void;
}

interface CookieSettingsProps {
  t: (key: string) => string;
  onClose: () => void;
  onReject: () => void;
  onSavePreferences: () => void;
  onAccept: () => void;
  preferences: boolean;
  setPreferences: (value: boolean) => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({
  t,
  onShowSettings,
  onAccept,
}) => (
  <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-themeSecondary bg-themeSurface p-4 shadow-lg lg:p-6">
    <div className="container-custom">
      <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-start gap-3">
          <MdCookie className="mt-1 shrink-0 text-2xl text-themeSecondary" />
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold text-themeTextPrimary">
              {t('notice.title')}
            </h3>
            <p className="text-sm text-themeTextSecondary lg:text-base">
              {t('notice.message')}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
          <button
            type="button"
            onClick={onShowSettings}
            className="flex items-center gap-2 rounded-lg border border-themeSecondary px-4 py-2 text-themeTextPrimary transition-colors hover:bg-themeSurfaceLight"
          >
            <MdSettings className="text-lg" />
            {t('notice.settings')}
          </button>
          <button
            type="button"
            onClick={onAccept}
            className="rounded-lg bg-themeSecondary px-6 py-2 font-medium text-themeSurface transition-colors hover:bg-themeAccent"
          >
            {t('notice.accept')}
          </button>
        </div>
      </div>
    </div>
  </div>
);

const CookieSettings: React.FC<CookieSettingsProps> = ({
  t,
  onClose,
  onReject,
  onSavePreferences,
  onAccept,
  preferences,
  setPreferences,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-themeSurface">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-themeTextPrimary">
            {t('settings.title')}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-themeTextSecondary hover:text-themeTextPrimary"
          >
            <MdClose className="text-xl" />
          </button>
        </div>

        <p className="mb-6 text-themeTextSecondary">
          {t('settings.description')}
        </p>

        <div className="space-y-6">
          {/* Essential Cookies */}
          <div className="rounded-lg border border-themeSurfaceLight p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-themeTextPrimary">
                {t('settings.necessary.title')}
              </h3>
              <span className="rounded bg-themeSurfaceLight px-2 py-1 text-sm text-themeTextSecondary">
                {t('settings.necessary.always')}
              </span>
            </div>
            <p className="text-sm text-themeTextSecondary">
              {t('settings.necessary.description')}
            </p>
          </div>

          {/* Preference Cookies */}
          <div className="rounded-lg border border-themeSurfaceLight p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-themeTextPrimary">
                {t('settings.preferences.title')}
              </h3>
              <label
                className="relative inline-flex cursor-pointer items-center"
                htmlFor="preferences-toggle"
              >
                <input
                  id="preferences-toggle"
                  type="checkbox"
                  className="sr-only"
                  checked={preferences}
                  onChange={(e) => setPreferences(e.target.checked)}
                />
                <div
                  className={`h-6 w-11 rounded-full transition-colors ${
                    preferences ? 'bg-themeSecondary' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`size-5 rounded-full bg-white shadow transition-transform ${
                      preferences ? 'translate-x-5' : 'translate-x-0'
                    } ml-0.5 mt-0.5`}
                  />
                </div>
              </label>
            </div>
            <p className="text-sm text-themeTextSecondary">
              {t('settings.preferences.description')}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onReject}
            className="rounded-lg border border-themeSecondary px-4 py-2 text-themeTextPrimary transition-colors hover:bg-themeSurfaceLight"
          >
            {t('settings.rejectAll')}
          </button>
          <button
            type="button"
            onClick={onSavePreferences}
            className="rounded-lg bg-themeSecondary px-4 py-2 font-medium text-themeSurface transition-colors hover:bg-themeAccent"
          >
            {t('settings.save')}
          </button>
          <button
            type="button"
            onClick={onAccept}
            className="rounded-lg bg-themeAccent px-4 py-2 font-medium text-themeSurface transition-colors hover:bg-themeAccent/80"
          >
            {t('settings.acceptAll')}
          </button>
        </div>
      </div>
    </div>
  </div>
);

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(true);
  const t = useTranslations('cookies');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (consent: CookieConsentInterface) => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAccept = () => {
    saveConsent({
      necessary: true,
      preferences: true,
      timestamp: Date.now(),
    });
  };

  const handleReject = () => {
    saveConsent({
      necessary: true,
      preferences: false,
      timestamp: Date.now(),
    });
  };

  const handleSavePreferences = () => {
    saveConsent({
      necessary: true,
      preferences,
      timestamp: Date.now(),
    });
  };

  return (
    <>
      {showBanner && (
        <CookieBanner
          t={t}
          onShowSettings={() => setShowSettings(true)}
          onAccept={handleAccept}
        />
      )}
      {showSettings && (
        <CookieSettings
          t={t}
          onClose={() => setShowSettings(false)}
          onReject={handleReject}
          onSavePreferences={handleSavePreferences}
          onAccept={handleAccept}
          preferences={preferences}
          setPreferences={setPreferences}
        />
      )}
    </>
  );
};

export default CookieConsent;

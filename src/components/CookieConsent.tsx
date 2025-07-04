'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { MdClose, MdCookie, MdSettings } from 'react-icons/md';

interface CookieConsent {
  necessary: boolean;
  preferences: boolean;
  timestamp: number;
}

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

  const saveConsent = (consent: CookieConsent) => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAccept = () => {
    saveConsent({
      necessary: true,
      preferences: true,
      timestamp: Date.now()
    });
  };

  const handleReject = () => {
    saveConsent({
      necessary: true,
      preferences: false,
      timestamp: Date.now()
    });
  };

  const handleSavePreferences = () => {
    saveConsent({
      necessary: true,
      preferences: preferences,
      timestamp: Date.now()
    });
  };

  const CookieBanner = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-themeSurface border-t-2 border-themeSecondary shadow-lg z-50 p-4 lg:p-6">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <MdCookie className="text-themeSecondary text-2xl mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-themeTextPrimary text-lg mb-2">
                {t('notice.title')}
              </h3>
              <p className="text-themeTextSecondary text-sm lg:text-base">
                {t('notice.message')}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <button
              onClick={() => setShowSettings(true)}
              className="flex items-center gap-2 px-4 py-2 text-themeTextPrimary border border-themeSecondary rounded-lg hover:bg-themeSurfaceLight transition-colors"
            >
              <MdSettings className="text-lg" />
              {t('notice.settings')}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-themeSecondary text-themeSurface rounded-lg hover:bg-themeAccent transition-colors font-medium"
            >
              {t('notice.accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CookieSettings = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-themeSurface rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-themeTextPrimary">
              {t('settings.title')}
            </h2>
            <button
              onClick={() => setShowSettings(false)}
              className="text-themeTextSecondary hover:text-themeTextPrimary"
            >
              <MdClose className="text-xl" />
            </button>
          </div>
          
          <p className="text-themeTextSecondary mb-6">
            {t('settings.description')}
          </p>

          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="border border-themeSurfaceLight rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-themeTextPrimary">
                  {t('settings.necessary.title')}
                </h3>
                <span className="text-sm text-themeTextSecondary bg-themeSurfaceLight px-2 py-1 rounded">
                  {t('settings.necessary.always')}
                </span>
              </div>
              <p className="text-sm text-themeTextSecondary">
                {t('settings.necessary.description')}
              </p>
            </div>

            {/* Preference Cookies */}
            <div className="border border-themeSurfaceLight rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-themeTextPrimary">
                  {t('settings.preferences.title')}
                </h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={preferences}
                    onChange={(e) => setPreferences(e.target.checked)}
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${
                    preferences ? 'bg-themeSecondary' : 'bg-gray-300'
                  }`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      preferences ? 'translate-x-5' : 'translate-x-0'
                    } mt-0.5 ml-0.5`}></div>
                  </div>
                </label>
              </div>
              <p className="text-sm text-themeTextSecondary">
                {t('settings.preferences.description')}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-themeTextPrimary border border-themeSecondary rounded-lg hover:bg-themeSurfaceLight transition-colors"
            >
              {t('settings.rejectAll')}
            </button>
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 bg-themeSecondary text-themeSurface rounded-lg hover:bg-themeAccent transition-colors font-medium"
            >
              {t('settings.save')}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-themeAccent text-themeSurface rounded-lg hover:bg-themeAccent/80 transition-colors font-medium"
            >
              {t('settings.acceptAll')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showBanner && <CookieBanner />}
      {showSettings && <CookieSettings />}
    </>
  );
};

export default CookieConsent;
'use client';

import React, { useEffect, useState } from 'react';

type Theme = 'default' | 'professional' | 'professional-dark';

const RuntimeThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('professional');

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-theme-surface p-4 shadow-lg border border-theme-surface-light">
      <h3 className="text-sm font-semibold text-theme-text-primary mb-2">Live Theme Switcher</h3>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => handleThemeChange('default')}
          className={`rounded px-3 py-1 text-xs transition-colors ${
            currentTheme === 'default' 
              ? 'bg-theme-accent text-theme-surface' 
              : 'bg-theme-secondary text-theme-surface hover:bg-theme-accent'
          }`}
        >
          Default Theme
        </button>
        <button
          onClick={() => handleThemeChange('professional')}
          className={`rounded px-3 py-1 text-xs transition-colors ${
            currentTheme === 'professional' 
              ? 'bg-theme-accent text-theme-surface' 
              : 'bg-theme-secondary text-theme-surface hover:bg-theme-accent'
          }`}
        >
          Professional Theme
        </button>
        <button
          onClick={() => handleThemeChange('professional-dark')}
          className={`rounded px-3 py-1 text-xs transition-colors ${
            currentTheme === 'professional-dark' 
              ? 'bg-theme-accent text-theme-surface' 
              : 'bg-theme-secondary text-theme-surface hover:bg-theme-accent'
          }`}
        >
          Professional Dark
        </button>
      </div>
      <p className="text-xs text-theme-text-secondary mt-2">
        Switches instantly!
      </p>
    </div>
  );
};

export default RuntimeThemeSwitcher;

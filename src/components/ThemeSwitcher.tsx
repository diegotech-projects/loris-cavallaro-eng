'use client';

import React from 'react';

const ThemeSwitcher = () => {
  const handleThemeChange = (themeName: string) => {
    // Note: This requires a build-time change to tailwind.config.js
    // For runtime switching, you'd need to implement CSS custom properties
    // or use a more advanced theming solution like next-themes
    alert(`To switch to ${themeName} theme, update the activeTheme in tailwind.config.js and rebuild the project.`);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-themeSurface p-4 shadow-lg border border-themeSurfaceLight">
      <h3 className="text-sm font-semibold text-themeTextPrimary mb-2">Theme Switcher</h3>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => handleThemeChange('default')}
          className="rounded px-3 py-1 text-xs bg-themeSecondary text-themeSurface hover:bg-themeAccent transition-colors"
        >
          Default Theme
        </button>
        <button
          onClick={() => handleThemeChange('professional')}
          className="rounded px-3 py-1 text-xs bg-themeSecondary text-themeSurface hover:bg-themeAccent transition-colors"
        >
          Professional Theme
        </button>
        <button
          onClick={() => handleThemeChange('professionalDark')}
          className="rounded px-3 py-1 text-xs bg-themeSecondary text-themeSurface hover:bg-themeAccent transition-colors"
        >
          Professional Dark
        </button>
      </div>
      <p className="text-xs text-themeTextSecondary mt-2">
        Currently requires rebuild to switch
      </p>
    </div>
  );
};

export default ThemeSwitcher;

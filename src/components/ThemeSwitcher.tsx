'use client';

import React from 'react';

const ThemeSwitcher = () => {
  const handleThemeChange = (themeName: string) => {
    // Note: This requires a build-time change to tailwind.config.js
    // For runtime switching, you'd need to implement CSS custom properties
    // or use a more advanced theming solution like next-themes
    alert(
      `To switch to ${themeName} theme, update the activeTheme in tailwind.config.js and rebuild the project.`,
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg border border-themeSurfaceLight bg-themeSurface p-4 shadow-lg">
      <h3 className="mb-2 text-sm font-semibold text-themeTextPrimary">
        Theme Switcher
      </h3>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => handleThemeChange('default')}
          className="rounded bg-themeSecondary px-3 py-1 text-xs text-themeSurface transition-colors hover:bg-themeAccent"
        >
          Default Theme
        </button>
        <button
          onClick={() => handleThemeChange('professional')}
          className="rounded bg-themeSecondary px-3 py-1 text-xs text-themeSurface transition-colors hover:bg-themeAccent"
        >
          Professional Theme
        </button>
        <button
          onClick={() => handleThemeChange('professionalDark')}
          className="rounded bg-themeSecondary px-3 py-1 text-xs text-themeSurface transition-colors hover:bg-themeAccent"
        >
          Professional Dark
        </button>
      </div>
      <p className="mt-2 text-xs text-themeTextSecondary">
        Currently requires rebuild to switch
      </p>
    </div>
  );
};

export default ThemeSwitcher;

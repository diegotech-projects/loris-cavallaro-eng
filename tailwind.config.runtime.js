/** @type {import('tailwindcss').Config} */

// Enhanced version with CSS custom properties for runtime theme switching
// To use this, you'll need to add CSS custom properties to your global.css

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        // CSS Custom Property based theme colors (for runtime switching)
        'theme-primary': 'var(--color-primary)',
        'theme-secondary': 'var(--color-secondary)',
        'theme-accent': 'var(--color-accent)',
        'theme-background': 'var(--color-background)',
        'theme-surface': 'var(--color-surface)',
        'theme-surface-light': 'var(--color-surface-light)',
        'theme-text-primary': 'var(--color-text-primary)',
        'theme-text-secondary': 'var(--color-text-secondary)',
        
        // Static theme colors from your current setup
        themeBackground: '#f1f5f9',
        themeSurface: '#ffffff',
        themeSurfaceLight: '#e2e8f0',
        themePrimary: '#0f172a',
        themeSecondary: '#1e3a8a',
        themeAccent: '#d97706',
        themeTextPrimary: '#0f172a',
        themeTextSecondary: '#475569',
        
        // Legacy colors (keep for backward compatibility)
        primary: '#111111',
        whiteOne: '#ffffff',
        customRed: '#e63b32',
        whiteTwo: '#f4f6fa',
        customBlue: '#287fff',
        customWhite: '#fafafa',
        customBlack: '#454545',
        
        // Elite Professional Palette (static - for specific use)
        eliteNavy: '#1e3a8a',
        eliteSlate: '#475569',
        eliteGold: '#d97706',
        eliteLight: '#f8fafc',
        eliteDark: '#0f172a',
        eliteGray: '#64748b',
        eliteAccent: '#fbbf24',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')], // eslint-disable-line
};

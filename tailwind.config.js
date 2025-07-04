/** @type {import('tailwindcss').Config} */

// Define your theme palettes
const themes = {
  default: {
    primary: '#111111',
    secondary: '#287fff',
    accent: '#e63b32',
    background: '#fafafa',
    surface: '#ffffff',
    surfaceLight: '#f4f6fa',
    textPrimary: '#111111',
    textSecondary: '#454545',
  },
  professional: {
    primary: '#0f172a',      // Deep slate for primary text/elements
    secondary: '#1e3a8a',    // Professional navy for buttons/links
    accent: '#d97706',       // Gold accent for highlights
    background: '#f1f5f9',   // Slightly darker than white for sophistication
    surface: '#ffffff',      // Pure white for cards/surfaces
    surfaceLight: '#b3aa94', // Light slate for subtle backgrounds
    textPrimary: '#0f172a',  // Dark slate for main text
    textSecondary: '#475569', // Medium slate for secondary text
  },
  professionalDark: {
    primary: '#0f172a',      // Deep slate primary
    secondary: '#1e40af',    // Darker navy blue
    accent: '#f59e0b',       // Warmer gold accent
    background: '#435f8c',   // Darker background (slate-200)
    surface: '#f8fafc',      // Light surface (slate-50)
    surfaceLight: '#cbd5e1', // Darker light surface (slate-300)
    textPrimary: '#0f172a',  // Very dark text
    textSecondary: '#374151', // Darker secondary text
  }
};

// Choose your active theme here
const activeTheme = themes.professional; // Change to themes.default to switch back

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
        // Theme-based semantic colors (changes based on activeTheme)
        themeBackground: activeTheme.background,
        themeSurface: activeTheme.surface,
        themeSurfaceLight: activeTheme.surfaceLight,
        themePrimary: activeTheme.primary,
        themeSecondary: activeTheme.secondary,
        themeAccent: activeTheme.accent,
        themeTextPrimary: activeTheme.textPrimary,
        themeTextSecondary: activeTheme.textSecondary,
        
        // Legacy colors (now theme-based for backward compatibility)
        primary: activeTheme.textPrimary,
        whiteOne: activeTheme.surface,
        customRed: activeTheme.accent,
        whiteTwo: activeTheme.surfaceLight,
        customBlue: activeTheme.secondary,
        customWhite: activeTheme.background,
        customBlack: activeTheme.textSecondary,
        
        // Elite Professional Palette (now theme-based)
        eliteNavy: activeTheme.secondary,
        eliteSlate: activeTheme.textSecondary,
        eliteGold: activeTheme.accent,
        eliteLight: activeTheme.surfaceLight,
        eliteDark: activeTheme.primary,
        eliteGray: activeTheme.textSecondary,
        eliteAccent: activeTheme.accent,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')], // eslint-disable-line
};

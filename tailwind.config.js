/** @type {import('tailwindcss').Config} */
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
        primary: '#111111',
        whiteOne: '#ffffff',
        customRed: '#e63b32',
        whiteTwo: '#f4f6fa',
        customBlue: '#287fff',
        customWhite: '#fafafa',
        customBlack: '#454545',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')], // eslint-disable-line
};

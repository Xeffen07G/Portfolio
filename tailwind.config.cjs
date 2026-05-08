// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c3aed', // purple-600
          light: '#c4b5fd', // purple-200
          dark: '#8b5cf6', // purple-500
        },
        accent: {
          DEFAULT: '#3b82f6', // blue-500
          light: '#bfdbfe', // blue-200
          dark: '#60a5fa', // blue-400
        },
        glass: 'rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003B31',
        secondary: '#D7A02A',
        accent: '#F3C76B',
        surface: '#F5F5F2',
        ink: '#0F172A',
        muted: '#5F6F78',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        display: ['Libre Baskerville', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 59, 49, 0.12)',
      },
      backgroundImage: {
        hero: 'linear-gradient(180deg, rgba(0, 59, 49, 0.28), rgba(0, 59, 49, 0.62))',
      },
    },
  },
  plugins: [],
};

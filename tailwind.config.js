/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'index-bg': "url('./bg-index.jpeg')",
      },
    },
  },
  plugins: [],
};

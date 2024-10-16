/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '400': '400px',
      },
    },
  },
  variants: {},
  plugins: [],
};
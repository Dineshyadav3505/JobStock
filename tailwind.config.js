/** @type {import('tailwindcss').Config} */
import Jost from './public/Fonts/Jost-VariableFont_wght.ttf';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Jost': ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
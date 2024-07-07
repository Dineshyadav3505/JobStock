import chach from './public/Fonts/Jost-VariableFont_wght.ttf'

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bitter': ['Bitter', 'serif'],
        'Jost': ['Fustat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
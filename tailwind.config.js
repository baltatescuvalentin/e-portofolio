/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'xl': {'max': '1278px'},
      '2xl': {'max': '1680px'},
    },
    extend: {
    },
  },
  plugins: [],
}
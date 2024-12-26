/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hwhite: '#E9EAEB',
        borderCol: '#D5D7DA',
        ash: '#414651',
        main: '#181D27',
        blue: '#1570EF',

      },
      boxShadow: {
        boxShad: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
      },
      screens: {
        xs: '360px', 
        xm: '460px', 
      },
    },
    fontFamily: {
      satosh: ['SatoshiLight', 'sans-serif'],
    },
  },
  plugins: [],
};

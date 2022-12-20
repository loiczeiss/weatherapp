/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      m: '1.333rem',
      lg: '1.777rem',
      xl : '4.209rem',
      
    },
    fontFamily : { 
display : ['Roboto', 'sans-serif']
    },
    extend: {
     
    },
  },
  plugins: [],
}
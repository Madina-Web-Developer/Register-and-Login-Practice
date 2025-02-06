/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'Inter': ["Inter", 'serif']
        
      },
  
  
      container: {
  
        center: true,
  
        padding: {
          DEFAULT: '18px',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
  
      },
    },
  },
  plugins: [],
}
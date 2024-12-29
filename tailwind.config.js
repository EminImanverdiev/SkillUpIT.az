/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{
      center: true,
      screens: {
        'xl': '1200px',  
        'lg': '992px',   
        'md': '768px',   
        'sm': '576px',   
        'custom': '1400px',
      },
      maxWidth: {
        '1324': '1324px',  
        '1225': '1225px',  
        '1140': '1140px', 
        '960': '960px',   
        '720': '720px',    
        '540': '540px',  
      }
    },
    extend: {},
  },
  plugins: [],
};

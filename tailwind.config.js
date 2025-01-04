/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bt-blue':'#5169F1',
        'grey-cl':'#9FA0A3',
        'eightbg':'#f7f3f2',
        'heading-primary': '#1a73e8',
        'theme-primary': '#0056b3',
        'common-white': '#ffffff',
      },
      width:{
        'w-24f':'24%',
        'w-58f':'58%'
      }
    },
  },
  plugins: [],
}
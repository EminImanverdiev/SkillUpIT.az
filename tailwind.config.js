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
        'grey-cl':'#9FA0A3'
      }
    },
  },
  plugins: [],
}
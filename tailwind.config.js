/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
        custom: "1400px",
      },
      maxWidth: {
        1324: "1324px",
        1225: "1225px",
        1140: "1140px",
        960: "960px",
        720: "720px",
        540: "540px",
      },
    },
    extend: {
      colors: {
        'bt-blue': '#5169F1',
        'grey-cl': '#9FA0A3',
        primary: "#5956E9",
      },
      animation: {
        slowPing: "slowPing 1.5s infinite",
        "move-left-right": "moveLeftRight 5s ease-in-out infinite",
        "move-up-down": "moveUpDown 7s ease-in-out infinite",
      },
      keyframes: {
        slowPing: {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "50%": { transform: "scale(1.2)", opacity: "0.5" },
          "100%": { transform: "scale(1.6)", opacity: "0.5" },
        },
        moveLeftRight: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(40px)",
          },
        },
        moveUpDown: {
          "0%, 100%": {
            transform: "translateY(0)", 
          },
          "50%": {
            transform: "translateY(70px)", 
          },
        },
      },
    },
  },
  plugins: [],
};

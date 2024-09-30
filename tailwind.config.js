/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        main: "#0F1622",
        medium: "#626262",
        ligth: "#E0E2E5",
        "bg-light": "#F4F5F7",
        "bg-dark": "#E0E2E5",
        "btn-hover-bg": "#F9FAFC",
        "btn-hover-stroke": "#626262",
      },
      dropShadow: {
        "3xl": "2px 1px 3px #A1A1A1",
        "4xl": "inset -7px -7px 15px -8px #000",
      },
      animation: {
        blink: "blink 1.5s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};

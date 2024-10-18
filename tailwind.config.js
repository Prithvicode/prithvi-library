import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        p1: "#F1B637",
        s1: "#ffb660",
        a1: "#924e00",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],

        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-50% - 20px)) " },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 50s linear infinite",
      },
      boxShadow: {
        "shadow-og": "4px 4px 15px rgba(255, 165, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

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
    },
  },
  plugins: [],
};

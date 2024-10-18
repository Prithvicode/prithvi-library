/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        p1: "#2B71BC",
        s1: "#ff7e69",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],

        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

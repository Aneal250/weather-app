/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#273EB5",
      },
      container: {
        padding: "6rem",
        center: true,
      },
    },
  },
  plugins: [],
};

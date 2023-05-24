/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#36A15B",
        futprints: "#007b2c",
        primaryGray: "#F1F1F2",
        backgroundGray: "#FAFAFA",
      },
    },
  },
  plugins: [],
};

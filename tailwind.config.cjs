/** @type {import('tailwindcss').Config} */
module.exports = {
  important: "#root",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-xdark": "#131a30",
        "blue-dark": "#1d2746",
        "blue-medium": "#293354",
        "blue-light": "#3d486d",
        "blue-xlight": "#7988b8",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [require('@tailwindcss/forms'),],
}

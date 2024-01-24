/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brightcolor: "#FFB400",
        backgroundcolor: "#F0F0F6"

      }
    },
  },
  plugins: [],
}
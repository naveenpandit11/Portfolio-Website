/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        raleway:['Raleway','sans-serif'],
        roboto:['Roboto','sans-serif'],
      },
    },
  },
  plugins: [],
}


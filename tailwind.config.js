/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marrom-cafe': '#4B3832',
        'creme':'#9B8F77',
        'azul-escuro': '#2B3A67',
        'laranja':'#E95F28',
        'cinza-escuro': '#4A4A4A'
      }
    },
  },
  plugins: [],
}
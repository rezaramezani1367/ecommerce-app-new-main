/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '150':'500px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
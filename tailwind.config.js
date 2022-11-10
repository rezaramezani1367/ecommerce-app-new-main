/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'new4': '116px,repeat(4, 1fr)'
        }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
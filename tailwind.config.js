/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');
module.exports = konstaConfig({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
/**@type{import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx', './node_modules/flowbite/**/*.js'],
  extend: {},
  plugins: [require('flowbite/plugin')]
}

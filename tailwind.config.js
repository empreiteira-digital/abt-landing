/**@type{import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx', './node_modules/flowbite/**/*.js'],
  extend: {},
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url(/bg-header.png)',
        about: 'url(/bg-about.png)',
        footer: 'url(/bg-footer.png)',
        first: 'url(/bg-1.png)',
        why: 'url(/fundo.png)',
        version: 'url(/version.png)'
      },
      colors: {
        violeta: '#523d7f',
        limao: '#c1dc56'
      }
    }
  }
}

/**@type{import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx', './node_modules/flowbite/**/*.js'],
  extend: {},
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url(/images/bg-header.png)',
        about: 'url(/images/bg-about.png)',
        footer: 'url(/images/bg-footer.png)',
        first: 'url(/images/bg-1.png)',
        why: 'url(/images/fundo.png)',
        version: 'url(/images/version.png)'
      },
      colors: {
        violeta: '#523d7f',
        limao: '#c1dc56'
      }
    }
  }
}

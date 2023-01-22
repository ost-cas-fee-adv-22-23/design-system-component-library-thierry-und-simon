/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const thierrySimonMumbelConfig = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  safelist: ['text-2xl'],
  presets: [require('./mumble-presets.js')],
  plugins: [
    require('@headlessui/tailwindcss'),
    plugin(function ({ addBase, theme }) {
      addBase({
        // html: { fontSize: '10px' },
        h1: {
          fontSize: theme('fontSize.4xl'),
          lineHeight: theme('fontSize.4xl.1'),
          fontWeight: '700'
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('fontSize.3xl.1'),
          fontWeight: '700'
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('fontSize.2xl.1'),
          fontWeight: '600'
        },
        h4: {
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('fontSize.xl.1'),
          fontWeight: '600'
        },
        p: {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('fontSize.base.1')
        }
      })
    })
  ]
}

module.exports = thierrySimonMumbelConfig

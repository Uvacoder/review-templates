const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comic Sans MS', 'Comic Sans', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

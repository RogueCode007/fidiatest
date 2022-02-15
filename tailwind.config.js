const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'gray' : {
        100: '#F2F4F7',
        200: '#EAECF0',
        500: '#667085',
        700: '#344054',
        900: '#101828',
      },
      'green': {
        100: '#ECFDF3',
        500: '#027A48'
      },
      'purple': {
        100: '#F9F5FF',
        600: '#7F56D9',
        700: '#6941C6'
      },
      'red': {
        700: '#B42318'
      },
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
  },
  plugins: [],
}

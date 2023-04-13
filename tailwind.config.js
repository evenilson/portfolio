/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        black: {
          400: '#07242B',
          600: '#031B20',
          700: '#021418',
          800: '#011013',
        },
        white: {
          400: '#D0E4E9',
          600: '#CADDE1',
          700: '#B6D0D6',
          800: '#A1BDC3'
        },
        blue: {
          400: '#54D6F2',
          600: '#3ABBD8',
          700: '#2995AD',
          800: '#19778B'
        },
        orange: {
          400: '#FBDAA3',
          600: '#F0C378',
          700: '#ECB254',
          800: '#FCA311'
        }

      },

      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  extend: {
    fontFamily: {
      cursive: 'Comfortaa, cursive'
    }
  },
  plugins: [],
}
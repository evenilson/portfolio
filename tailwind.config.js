/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  darkMode: "class",
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
          400: '#F0F5F6',
          600: '#E0ECEE',
          700: '#D2DDDF',
          800: '#C4CED0'
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
      keyframes: {
        slideDownAndFade: {
          from: {
            opacity: 0,
            transform: 'translateY(-2px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        slideLeftAndFade: {
          from: {
            opacity: 0,
            transform: 'translateX(2px)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)'
          },
        },
        slideUpAndFade: {
          from: {
            opacity: 0,
            transform: 'translateY(2px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
        downSize: {
          from: {
            // opacity: 0,
            width: '0%',
          },
          to: {
            // opacity: 1,
            width: '50%',
          },
        },

      },
      animation: {
        slideDownAndFade: 'slideDownAndFade .4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade .4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade .4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade .4s cubic-bezier(0.16, 1, 0.3, 1)',
        downSize: 'downSize .2s linear'
      },
      transitionProperty: {
        width: "width"
      }
    },
    fontFamily: {
      sans: ['"Comfortaa"', 'cursive'],
      mono: ['"Fira Code"', 'monospace']
    }
  },
  plugins: [],
}
import { Gradient } from 'phosphor-react';

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.tsx',
  './index.html'
];
export const darkMode = "class";
export const theme = {
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
        100: '#d9f0f5',
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
      pulseFull: {
        '50%': {
          opacity: 0,
        },
      },
    },

    animation: {
      slideDownAndFade: 'slideDownAndFade .4s cubic-bezier(0.16, 1, 0.3, 1)',
      slideLeftAndFade: 'slideLeftAndFade .4s cubic-bezier(0.16, 1, 0.3, 1)',
      slideUpAndFade: 'slideUpAndFade .4s cubic-bezier(0.16, 1, 0.3, 1)',
      slideRightAndFade: 'slideRightAndFade .4s cubic-bezier(0.16, 1, 0.3, 1)',
      downSize: 'downSize .2s linear',
      pulseFull: 'pulseFull 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    transitionProperty: {
      width: 'width',
      scale: ['scale', 'opacity']
    }
  },
  fontFamily: {
    sans: ['"Comfortaa"', 'cursive'],
    mono: ['"Caveat"', 'mono']
  }
};
export const safelist = [
  // Cores bg
  'bg-red-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-white-400',
  'bg-black-400',
  'bg-gray-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-orange-500',

  // Opacidade de fundo
  'bg-opacity-25',

  // Cores border
  'border-red-500',
  'border-green-500',
  'border-blue-500',
  'border-yellow-500',
  'border-white-400',
  'border-black-400',
  'border-gray-500',
  'border-purple-500',
  'border-pink-500',
  'border-orange-500',

  // Opacidade de borda
  'border-opacity-75',

  // Cores de texto
  'text-red-500',
  'text-green-500',
  'text-blue-500',
  'text-yellow-500',
  'text-white-400',
  'text-black-400',
  'text-gray-500',
  'text-purple-500',
  'text-pink-500',
  'text-orange-500',

  // Opacidade de texto
  'text-opacity-75',
];
export const plugins = [];
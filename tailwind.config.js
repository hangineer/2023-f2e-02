/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '48px',
    },
    fontSize: {
      sm: ['14px', '16px'],
      base: ['16px', '19px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['32px', '39px'],
    },
    screens: {
      'lg': '1344px',
    },
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#262E49',
        },
        'gray': {
          DEFAULT: '#F5F5F5',
          light: '#E6E6E6',
        },
      },
      fontFamily: {
        notoSans: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
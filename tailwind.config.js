/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', ...defaultTheme.fontFamily.sans],
        'dm-sans': ['var(--font-dm-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#333',
        white: '#fff',
        gray1: '#efefef',
        gray2: '#b5b5b5',
        blue1: '#f0f3ff',
        blue2: '#87a1ef',
        blue3: '#577cff',
        green1: '#e5ffd9',
        green2: '#24c73e',
        textGray: '#bababa',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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

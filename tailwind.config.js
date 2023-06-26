/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          25: '#E4D6D9',
          50: '#D2BAC0',
          100: '#BC97A0',
          200: '#A67580',
          300: '#8F5361',
          400: '#793041',
          500: '#652836',
          600: '#51202B',
          700: '#3D1821',
          800: '#281016',
          900: '#180A0D',
        },
        secondary: {
          25: '#CED2D9',
          50: '#ADB4BF',
          100: '#838F9F',
          200: '#5A6A7F',
          300: '#31445F',
          400: '#081F3F',
          500: '#071A35',
          600: '#05152A',
          700: '#041020',
          800: '#030A15',
          900: '#02060D',
        },
        warning: {
          25: '#F5EDDD',
          50: '#EEE1C6',
          100: '#E5D2A9',
          200: '#DDC48C',
          300: '#D4B570',
          400: '#CCA653',
          500: '#AA8A45',
          600: '#886F37',
          700: '#66532A',
          800: '#44371C',
          900: '#292111',
        },
        button: {
          primary: '#6E2C3B',
        },
        LoginBg: '#F2EAEC',
      },
      fontFamily: {
        kanitFont: ['var(--font-kanit)'],
        lexendFont: ['var(--font-lexend)'],
      },
    },
  },
  plugins: [],
};

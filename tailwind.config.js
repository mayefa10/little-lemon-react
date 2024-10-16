/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Markazi Text'],
        content: ['karla'],
      },
      colors: {
        gray: {
          60: '#495E57',
          70: '#333333',
        },
        yellow: {
          20: '#F4CE14',
        },
        orange: {
          40: '#EE9972',
          20: '#FBDABB',
        },
        white: {
          20: '#EDEFEE',
        },
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      backgroundImage: {
        login: "url('./src/assets/restaurant.jpg')",
        reservations: "url('./src/assets/restauranfood.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,vue}"],

  theme: {
    container:{
      center: true,
      padding: '15px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        secondary:'#6b7280',
      },
      screens: {
        '2xl' : '1320px'
      },
      rotate: {
      '38': '38deg',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily:{
          byekan:['BYekan'],
        },
        colors:{
          'theme' : '#DF1050',
          'dark' : '#0E2338',
          'border' : '#F5F5F9',
        },
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily:{
        'croissant': ['Croissant'],
        'oswald': ['Oswald'],
        'roboto': ['Roboto']
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

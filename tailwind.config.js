/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
        title: [
          'Lexend',
          'sans-serif' // Make sure to include fallback font
        ],
        body: [
          'Poppins',
          'sans-serif', // Replace 'Inter' with 'Poppins' and add fallback
        ]
      },
    },
  },
  plugins: [],
}


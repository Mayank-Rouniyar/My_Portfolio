/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
        'black-to-blue': 'radial-gradient(circle at center, #0d1b2a 0%, #000000 100%)',
    },
  },
  plugins: [],
}
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'celeste': {
          DEFAULT: '#0096c7',
          dark: '#0077b6',
          light: '#00b4d8',
        },
      },
    },
  },
  plugins: [],
}

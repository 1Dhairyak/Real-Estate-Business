/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F6F1E7',
          soft: '#FBF8F2',
          deep: '#EDE5D4',
        },
        charcoal: {
          DEFAULT: '#2B2622',
          soft: '#4A433C',
        },
        gold: {
          DEFAULT: '#C89B3C',
          dark: '#A87F2C',
          light: '#DDB45E',
        },
        pine: {
          DEFAULT: '#3F4A3D',
          light: '#5C6B57',
        },
        sand: '#E3DACB',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
}


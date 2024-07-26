/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '884px', // Custom sm breakpoint starting at 884px
        'md': '1024px', // Example: you can keep or adjust other breakpoints
        'lg': '1280px',
        'xl': '1536px',
      },
    },
  },
  plugins: [],
}
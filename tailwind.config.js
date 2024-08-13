/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '884px', // Custom sm breakpoint starting at 884px
        'md': '1024px', // Example: you can keep or adjust other breakpoints
        'lg': '1280px',
        'xl': '1536px',
      },
      boxShadow: {
        'harvard-light': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'harvard-medium': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'harvard-dark': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
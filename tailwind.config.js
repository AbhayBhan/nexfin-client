/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'titillium': ['Titillium Web', 'sans-serif'],
      },
      colors: {
        primary : "rgba(var(--primary))",
        foreground : "rgba(var(--foreground))",
        background : "rgba(var(--background))",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a365d',
        'brand-blue': '#3b82f6',
        'brand-light': '#f7f7f9',
        'brand-yellow': '#fbbf24',
      },
    },
  },
  plugins: [],
}

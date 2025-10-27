/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Tailwind CSS 4 uses @theme in CSS instead of theme config
  // Colors and other theme values are now defined in src/index.css
}


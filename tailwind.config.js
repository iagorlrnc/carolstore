/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fa8072', // Salmon
          hover: '#ef4444',   // Vermelho suave
        },
        dark: '#0f172a',    // Slate 900
        light: '#f8fafc',   // Slate 50
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

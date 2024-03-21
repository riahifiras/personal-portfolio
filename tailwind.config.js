/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'half-screen': '80vh',
      },
      keyframes: {
        drop: {
          '0%': { transform: 'opacity-100 translate-y-0' },
          '100%': { transform: 'opacity-0 translate-y-full' },
        }
      },
      animation: {
        drop: 'drop 1s ease-in-out'
      }
    },
  },
  plugins: [],
};

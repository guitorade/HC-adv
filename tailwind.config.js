/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        'navy-light': '#152238',
        gold: '#C9A96E',
        'off-white': '#F5F5F0',
        graphite: '#3A3A3A',
        'gray-light': '#6B7280',
        black: '#111111',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        whatsappPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'whatsapp-pulse': 'whatsappPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

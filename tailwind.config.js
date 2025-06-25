/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thasadith: ['thasadith', 'sans-serif'],
        space: ['space', 'arial'],
        thabold: ['tha-bold', 'sans-serif'],
      },
      colors: {
        night: '#0e0e11',
        neonGreen: '#00f292',
        mocha: '#5e4638',
        sunset: '#fdb27b',
        cobalt: '#3a4ca0',
        twilight: '#161c2d',
        mustard: '#d8a44c',
        glass: '#d9d6cf',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-in-delay-1': 'fade-in 0.7s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fade-in 0.7s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fade-in 0.7s ease-out 0.6s forwards',
        'fade-in-delay-4': 'fade-in 0.7s ease-out 0.8s forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

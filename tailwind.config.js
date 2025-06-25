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
        meteor: 'meteor 5s linear infinite',
        noise: 'noise 1s steps(10) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        meteor: {
          '0%': { transform: 'translate(0, 0)', opacity: 1 },
          '100%': { transform: 'translate(100px, 100px)', opacity: 0 },
        },
        noise: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      backgroundImage: {
        noise: "url('/noise.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052FF',
          50: '#F0F5FF',
          100: '#E0EBFF',
          200: '#C2D6FF',
          300: '#A3C2FF',
          400: '#6699FF',
          500: '#2970FF',
          600: '#0052FF',
          700: '#0042CC',
          800: '#003199',
          900: '#002166',
        },
        navy: {
          DEFAULT: '#0A0F1C',
          50: '#E6E9EF',
          100: '#CDD2DF',
          200: '#9AA7BF',
          300: '#687B9F',
          400: '#3D527B',
          500: '#263655',
          600: '#1C2840',
          700: '#141D2E',
          800: '#0D1420',
          900: '#0A0F1C',
        },
        neutral: {
          850: '#1f2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 82, 255, 0.4)',
        'glow-primary-lg': '0 0 40px rgba(0, 82, 255, 0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        'glass-inset': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-light': 'radial-gradient(at 40% 20%, hsla(228,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(228,100%,20%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(228,100%,10%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(228,100%,5%,1) 0px, transparent 50%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'blob': 'blob 7s infinite',
        'aurora': 'aurora 60s linear infinite',
        'spin-around': 'spin-around calc(var(--speed, 3s) * 2) infinite linear',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
        'spin-around': {
          '0%': { transform: 'translateZ(0) rotate(0)' },
          '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
          '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
          '100%': { transform: 'translateZ(0) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

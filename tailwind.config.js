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
          DEFAULT: '#B02626', // Oriental Red
          50: '#FDF2F2',
          100: '#FBE6E6',
          200: '#F5C6C6',
          300: '#EFA6A6',
          400: '#E46767',
          500: '#B02626',
          600: '#9E2222',
          700: '#841D1D',
          800: '#6A1717',
          900: '#561313',
        },
        secondary: {
          DEFAULT: '#5A2C1E', // Dark Brown Text
          50: '#F8F5F4',
          100: '#F1EBE9',
          200: '#DED1CD',
          300: '#CAB7B1',
          400: '#A48279',
          500: '#5A2C1E',
          600: '#51281B',
          700: '#442117',
          800: '#361A12',
          900: '#2C150F',
        },
        cream: {
          DEFAULT: '#FCF6EE', // Background Cream
          light: '#FFFDF9',
          dark: '#E8DEC4',
        },
        accent: {
          DEFAULT: '#E11D48',
          light: '#FFE4E6',
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Nunito', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow-primary': '0 0 25px rgba(176, 38, 38, 0.4)',
      },
    },
  },
  plugins: [],
}

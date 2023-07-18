/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*',
    './components/**/*'
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-content': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}


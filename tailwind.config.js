/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        command: {
          950: '#050913',
          900: '#0b1324',
          800: '#102039',
        },
        accent: {
          500: '#00d9ff',
          600: '#00b8e6',
        },
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(56, 189, 248, 0.15), 0 10px 25px rgba(2, 8, 23, 0.55)',
      },
    },
  },
  plugins: [],
}

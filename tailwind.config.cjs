module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',
        secondary: '#06b6d4',
        accent: '#fbbf24'
      }
      ,
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial'],
        heading: ['Poppins', 'Inter', 'ui-sans-serif']
      }
    },
  },
  plugins: [],
}

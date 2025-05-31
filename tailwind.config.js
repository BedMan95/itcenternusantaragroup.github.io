module.exports = {
  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx,vue}', './src/styles/**/*.{css,scss}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
      },
      spacing: {
        '128': '32rem', // Example custom spacing
        '144': '36rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
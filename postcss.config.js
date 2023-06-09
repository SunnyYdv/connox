module.exports = {
  /* Postcss plugins should come first */
  plugins: [require('postcss-import'), require('postcss-nested'), require('autoprefixer'), require('tailwindcss')]
}

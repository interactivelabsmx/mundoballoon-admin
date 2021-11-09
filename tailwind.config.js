module.exports = {
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/forms'),
  ],
};

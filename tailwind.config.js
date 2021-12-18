module.exports = {
  content: [
    './components/**/*.tsx',
    './containers/**/*.tsx',
    './layouts/**/*.tsx',
    './pages/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

module.exports = {
    purge: {
      enabled: true,
      content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.html',
      './*.md'
    ]},
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
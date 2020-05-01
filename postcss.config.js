const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project 
  content: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  // whitelist
  whitelist: ['cc-invisible']
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : [],
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [require('cssnano')] : [],
  ]
}

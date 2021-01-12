const html = require('rollup-plugin-generate-html-template')
const livereload = require('rollup-plugin-livereload')
const serve = require('rollup-plugin-serve')

module.exports = () => [
  html({ template: 'src/template.html', target: 'index.html', attrs: ['async', 'defer'] }),
  serve('dist'),
  livereload('dist'),
]

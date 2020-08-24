import html from 'rollup-plugin-generate-html-template'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

export default () => [
  html({ template: 'src/template.html', target: 'index.html', attrs: ['async', 'defer'] }),
  serve('dist'),
  livereload('dist'),
]

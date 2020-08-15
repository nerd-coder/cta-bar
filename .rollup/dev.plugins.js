import html from '@rollup/plugin-html'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import clear from 'rollup-plugin-clear'

export default [
  html({ template: htmlTemplate }),
  serve('dist'),
  livereload('dist'),
  clear({ targets: ['dist'] }),
]

async function htmlTemplate({ files, publicPath }) {
  const ensureArray = a => (Array.isArray(a) ? a : [])
  const genName = ({ fileName }) => `${publicPath}${fileName}`
  const scripts = ensureArray(files.js)
    .map(genName)
    .map(f => `<script src=${f} async></script>`)
    .join('\n')

  const links = ensureArray(files.css)
    .map(genName)
    .map(f => `<link href=${f} rel=stylesheet>`)
    .join('\n')

  return `
<!doctype html>
<html lang=en>
  <head>
    <title>CTA Bar</title>
    <meta charset=UTF-8>
    <style>
      html,
      body {
        text-size-adjust: 100%;
        scroll-behavior: smooth;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        padding: 0;
        margin: 0;
      } 
    </style>
    ${links}
    ${scripts}
  </head>
  <body>
    <cta-bar></cta-bar>
  </body>
</html>`
}

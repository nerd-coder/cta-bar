import html from '@rollup/plugin-html'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

export default () => [html({ template: htmlTemplate }), serve('dist'), livereload('dist')]

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
    <meta name=viewport content="width=device-width, initial-scale=1, shrink-to-fit=no">
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
      .block {
        height: 300px;
        border: 1px solid darkblue;
      }
      .block:nth-child(2n) {
        background: green;
      }
    </style>
    ${links}
    ${scripts}
  </head>
  <body>
    <div class=block></div>
    <div class=block></div>
    <div class=block></div>
    <div class=block></div>
    <div class=block></div>
    
    <cta-bar></cta-bar>
  </body>
</html>`
}

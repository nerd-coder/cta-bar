import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import { terser } from 'rollup-plugin-terser'
import preprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import svg from 'rollup-plugin-svg'
import autoprefixer from 'autoprefixer'
import html from '@rollup/plugin-html'

const IS_PROD = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.ts',
  output: { format: 'iife', dir: 'dist', sourcemap: !IS_PROD },
  plugins: [
    svelte({
      dev: !IS_PROD,
      customElement: true,
      // css: css => css.write('public/build/bundle.css', !IS_PROD),
      // @ts-ignore
      preprocess: preprocess({ postcss: { plugins: [autoprefixer({ grid: 'autoplace' })] } }),
    }),
    resolve({ browser: true, dedupe: ['svelte'] }),
    commonjs(),
    svg({ base64: true }),
    typescript({ sourceMap: !IS_PROD }),
    html({ template: htmlTemplate }),
    !IS_PROD && serve('dist'),
    !IS_PROD && livereload('dist'),
    IS_PROD && terser(),
  ],
  watch: { clearScreen: false },
}

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

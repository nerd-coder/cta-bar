const svelte = require('rollup-plugin-svelte')
const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const svelteSVG = require('rollup-plugin-svelte-svg')
const typescript = require('@rollup/plugin-typescript')

const devPlugins = require('./.rollup/dev.plugins')
const prodPlugins = require('./.rollup/prod.plugins')

const IS_PROD = !process.env.ROLLUP_WATCH

IS_PROD && console.log('Making bundle for Production...')

module.exports = {
  input: 'src/main.ts',
  output: { format: 'iife', dir: 'dist', sourcemap: !IS_PROD },
  plugins: [
    svelte(require('./svelte.config')),
    svelteSVG(),
    commonjs(),
    nodeResolve({ browser: true, preferBuiltins: false }),
    typescript(),
    ...(IS_PROD ? prodPlugins() : devPlugins()),
  ],
}

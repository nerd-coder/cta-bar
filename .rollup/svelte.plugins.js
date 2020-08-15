import autoprefixer from 'autoprefixer'
import commonjs from '@rollup/plugin-commonjs'
import sveltePre from 'svelte-preprocess'
import nodeResolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import svelteSVG from 'rollup-plugin-svelte-svg'
import typescript from '@rollup/plugin-typescript'

const IS_PROD = !process.env.ROLLUP_WATCH

const preprocess = sveltePre({ postcss: { plugins: [autoprefixer({ grid: 'autoplace' })] } })

export default [
  // @ts-ignore
  svelte({ dev: !IS_PROD, customElement: true, preprocess }),
  svelteSVG(),
  commonjs(),
  nodeResolve({ browser: true, dedupe: ['svelte'] }),
  typescript({ sourceMap: !IS_PROD }),
]

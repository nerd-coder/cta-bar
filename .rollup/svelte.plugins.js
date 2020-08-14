import autoprefixer from 'autoprefixer'
import commonjs from '@rollup/plugin-commonjs'
import sveltePreprocess from 'svelte-preprocess'
import nodeResolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import svelteSVG from 'rollup-plugin-svelte-svg'
import typescript from '@rollup/plugin-typescript'

const IS_PROD = !process.env.ROLLUP_WATCH

const preprocess = sveltePreprocess({ postcss: { plugins: [autoprefixer({ grid: 'autoplace' })] } })

export default [
  commonjs(),
  nodeResolve({ browser: true, dedupe: ['svelte'] }),
  // @ts-ignore
  svelte({ dev: !IS_PROD, customElement: true, preprocess }),
  svelteSVG(),
  typescript({ sourceMap: !IS_PROD }),
]

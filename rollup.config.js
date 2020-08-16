import sveltePlugins from './.rollup/svelte.plugins'
import devPlugins from './.rollup/dev.plugins'
import prodPlugins from './.rollup/prod.plugins'

const IS_PROD = !process.env.ROLLUP_WATCH

IS_PROD && console.log('Making bundle for Production...')

export default {
  input: 'src/main.ts',
  output: { format: 'iife', dir: 'dist', sourcemap: !IS_PROD },
  plugins: [...sveltePlugins(), ...(IS_PROD ? prodPlugins() : devPlugins())],
}

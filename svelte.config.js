const sveltePreprocess = require('svelte-preprocess')

const IS_PROD = !process.env.ROLLUP_WATCH

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [
      ...(IS_PROD ? [require('cssnano')()] : []),
      require('autoprefixer')({ grid: 'autoplace' }),
    ],
  },
})

module.exports = {
  preprocess,
  compilerOptions: { customElement: true, dev: !IS_PROD },
}

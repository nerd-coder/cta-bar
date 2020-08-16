import { terser } from 'rollup-plugin-terser'
import cleaner from 'rollup-plugin-cleaner'

export default () => [cleaner({ targets: ['./dist'] }), terser()]

import { terser } from 'rollup-plugin-terser'
import cleaner from 'rollup-plugin-cleaner'
import analyze from 'rollup-plugin-analyzer'

export default () => [cleaner({ targets: ['./dist'] }), terser(), analyze()]

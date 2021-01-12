const { terser } = require('rollup-plugin-terser')
const cleaner = require('rollup-plugin-cleaner')
const analyze = require('rollup-plugin-analyzer')

module.exports = () => [cleaner({ targets: ['./dist'] }), terser(), analyze()]

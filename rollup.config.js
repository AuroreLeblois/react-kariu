import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
// import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import pkg from './package.json'

export default {
	input: 'src/index.js',
	output:[
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true
		},
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true
		}
	],
	plugins: [
		external(),
		postcss({
			modules: true,
			extract: true,
			extract: 'reset.css'
		}),
		// scss(),
		url(),
		svgr(),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'runtime',
			skipPreflightCheck: true,
			plugins: ['@babel/plugin-transform-runtime'],
			extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.vue', '.css']
		}),
		resolve(),
		commonjs()
	]
}

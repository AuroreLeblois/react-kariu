import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'
// import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve'
// import typescript from "rollup-plugin-typescript2";
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
		}],
	plugins: [
    terser(),
		external([
			'prop-types',
			'react',
			'react-dom',
			'storybook',
			'@emotion/css',
			'leaflet'
		]),
		postcss({
			modules: true,
			extract: true,
			extract: 'reset.css',
			extensions: ['.css']
		}),
		// scss(),
		url(),
		svgr(),
		babel({
			exclude: [
				'node_modules/**',
				'.storybook/**',
				'./src/stories'
			],
			babelHelpers: 'runtime',
			skipPreflightCheck: true,
			plugins: ['@babel/plugin-transform-runtime'],
			extensions: ['.js', '.es6', '.es', '.png']
		}),
		resolve({
  			mainFields: ['module', 'browser', 'main']}),
		commonjs(),
		// typescript({ useTsconfigDeclarationDir: true })
	]
}

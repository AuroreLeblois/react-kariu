import babel from '@rollup/plugin-babel'
// import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
// import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve'
// import typescript from "rollup-plugin-typescript2";
// import url from '@rollup/plugin-url'
// import fs from 'fs';
// if (fs.existsSync('dist')) {
// 	fs.unlinkSync('dist');
//   }

export default {
	input: 'src/index.ts',
	output: [
		{
			file: "dist/index.ts",
			format: 'cjs',
			sourcemap: true
		}
		// {
		// 	file: "dist/index.fr.js",
		// 	format: 'es',
		// 	sourcemap: true,
		// 	plugins: [terser()]
		// }
	],
	plugins: [
    // terser(),
		external([
			'prop-types',
			'react',
			'react-dom',
			'storybook',
			'chromatic',
			'vite'
		]),
		postcss({
			modules: true,
			extract: true,
			extract: 'reset.css',
			extensions: ['.css']
		}),
		// scss(),
		// url(),
		// svgr(),
		babel({
			exclude: [
				'node_modules/**',
				'.storybook/**',
				'./src/stories'
			],
			babelHelpers: 'runtime',
			skipPreflightCheck: true,
			plugins: ['@babel/plugin-transform-typescript', '@babel/plugin-transform-runtime'],
			extensions: ['.ts', 'tsx', '.es6', '.es', '.png']
		}),
		resolve({
  		mainFields: ['module', 'browser', 'main']}),
		// commonjs()
	]
}

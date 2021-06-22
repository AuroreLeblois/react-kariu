import { create } from '@storybook/theming'

export default create({
	base: 'light',
	brandTitle: 'React-Kariu',
	brandUrl: 'https://www.aexae.fr/',

	// Typography
	fontBase: '-apple-system, BlinkMacSystemFont, sans-serif',
	fontCode: 'monospace',


	// DARK THEME
	// colorPrimary: 'hotpink',
	// colorSecondary: '#3A3F4B', // side nav components icons color
	//
	// // UI
	// appBg: '#21242B', // sidenav background
	// appContentBg: '#272C33', // viewport (root) background
	// appBorderColor: '#181A1F', // border and skeleton background
	// appBorderRadius: 4,
	//
	//
	// // Text colors
	// textColor: '#D6D9DF', // side nav text color
	// textInverseColor: 'rgba(255,255,255,0.9)',
	//
	// // Toolbar default and active colors
	// barTextColor: '#D6D9DF', // toolbar icons color
	// barSelectedColor: '#73C88F', // toolbar selected tabs text color
	// barBg: '#333637',
	//
	// // Form colors
	// inputBg: 'white',
	// inputBorder: 'silver',
	// inputTextColor: 'black',
	// inputBorderRadius: 4
})

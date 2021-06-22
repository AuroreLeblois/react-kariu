import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import themeKariu from './themeKariu'

addons.setConfig({
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: 'right',
	sidebarAnimations: true,
	enableShortcuts: true,
	isToolshown: true,
	theme: themeKariu, //themes.dark
	selectedPanel: undefined,
	initialActive: 'sidebar',
	sidebar: {
		showRoots: true
	}
})

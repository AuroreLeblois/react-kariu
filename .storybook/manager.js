import { addons } from '@storybook/manager-api'
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

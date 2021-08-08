import React from 'react';

import { SideBar } from './../index.js';

export default {
  title: 'React-Kariu/Molecule/SideBar',
  component: SideBar,
  argTypes: {
	backgroundColor: { name: 'backgroundColor', control: 'color' },
	textColor: { name: 'textColor', control : 'color' },
	btnCollapse: {description: "Will set if you want a button to toggle the sideBar"},
	tooltipMessageShow: {description: "Will show a tooltip on the Button element when the sideBar is hidden"},
	tooltipMessageHide: {description: "Will show a tooltip on the Button element when the sideBar is visible"}
  },
}

const Template = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	options : [
		{ href: '#', label: 'Section'},
		{ href: '#', label: 'Promo'},
		{ href: '#', label: 'Icon'},
		{ href: '#', label: 'Home' }
	]

}

import React from 'react';

import { SideBar } from './../index.js';

export default {
  title: 'React-Kariu/Molecule/SideBar',
  component: SideBar,
  argTypes: {
	backgroundColor: { name: 'backgroundColor', control: 'color' },
	textColor: { name: 'textColor', control : 'color' }
  },
}

const Template = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	options : [
		{ href: '#', label: 'section'},
		{ href: '#', label: 'promo'},
		{ href: '#', label: 'icon'},
		{ href: '#', label: 'home' }
	]

}

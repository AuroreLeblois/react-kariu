import React from 'react';

import { SideBar } from './../index.js';

export default {
  title: 'React-Kariu/Organism/SideBar',
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
		{ href: '#section', label: 'section'},
		{ href: '#prom', label: 'promo'},
		{ href: '#section', label: 'icon'},
		{ href: '#home', label: 'home' }
	]

}

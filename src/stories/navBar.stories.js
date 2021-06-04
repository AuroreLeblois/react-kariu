import React from 'react';

import { SideBar } from './../index.js';

export default {
  title: 'React-Kariu/Organism/SideBar',
  component: SideBar,
  argTypes: {
	  label : {
  		name: 'label',
  		type: {name: 'string', required: false},
  		description: 'Provides a text to your button',
  		dafaultValue: 'Aurore Leblois',
  		control: {type : 'text'}
  	},
	backgroundColor: { name: 'backgroundColor', control: 'color' },
	textColor: { name: 'textColor', control : 'color' },
	tabIndex : {
	  name: 'tabIndex',
	  type: {name: 'number', required: false},
	  description: 'Important for your application and navigation with keyboard, but optionnal',
	  dafaultValue: 'Aurore Leblois',
	  control: {type : 'text'}
  },
	tooltip: {description: 'Provides a tooltip to your button: Optionnal'}
  },
}

const Template = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	options : [
		{ href: '#section', label: 'section'},
		{ href: '#prom', label: 'promo'},
		{ href: '#section', label: 'section'},
		{ href: '#home', label: 'home' }
	]

}

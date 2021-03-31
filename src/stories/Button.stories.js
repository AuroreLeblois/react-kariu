import React from 'react';

import { Button } from './../index.js';

export default {
  title: 'React-Kariu/Atoms/Button',
  component: Button,
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

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  tooltip: 'This is a simple button'
}
export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Button',
  shape: 'rounded',
  tooltip: 'This is a rounded button'
}

export const Large = Template.bind({});
Large.args = {
	backgroundColor: 'tomato',
	size: 'large',
	label: 'Button',
}

export const Small = Template.bind({});
Small.args = {
	backgroundColor: 'tomato',
	size: 'small',
	label: 'Button',
}

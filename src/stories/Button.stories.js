import React from 'react';

import { Button } from './../index.js';

export default {
  title: 'React-Kariu/Atoms/Button',
  component: Button,
  argTypes: {
	  label : {
  		name: 'label',
  		type: { name: 'string', required: false},
  		description: 'Provides a text to your button',
  		control: { type : 'text' }
  	},
	backgroundColor: {
		name: 'backgroundColor',
		control: 'color',
		description: 'Control the color of your button',
 	},
	textColor: {
		name: 'textColor',
		control : 'color',
		description: 'Control the color of the text',
	},
	tabIndex : {
	  name: 'tabIndex',
	  type: {name: 'number', required: false},
	  description: 'Important for your application and navigation with keyboard, but optionnal',
	  control: {type : 'text'}
  },
	tooltip: {description: 'Provides a tooltip to your button: Optionnal'}
  },
}

const Template = (args) => <Button {...args} ></Button>;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  tooltip: 'This is a simple button'
}
export const Children = (args) => {
	return <Button{...args}>
		<a href='#'>#</a>
	</Button>
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

export const Icon = Template.bind({});
Icon.args = {
	backgroundColor: 'tomato',
	size: 'medium',
	label: null,
	shape: 'round',
	icon: 'soundOn'
}

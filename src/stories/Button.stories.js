import React from 'react';

import { Button } from './../index.js';

export default {
  title: 'Components/Molecules/Button',
  component: Button,
  argTypes: {
	backgroundColor: { control: 'color' },
	colorLabel: { control : 'color' }
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  title: 'This is a simple button',
  backgroundColor: 'tomato',
  colorLabel: 'white'
};

export const Large = Template.bind({});
Large.args = {
	backgroundColor: 'tomato',
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	backgroundColor: 'tomato',
	size: 'small',
	label: 'Button',
};

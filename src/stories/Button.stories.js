import React from 'react';

import { Button } from './../index.js';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
	backgroundColor: { control: 'color' },
	colorLabel: { control : 'color' }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
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

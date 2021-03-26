import React from 'react';

import { Avatar } from './../index.js'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
	backgroundColor: { control: 'color' },
	textColor: { control : 'color' }
  },
}

const Template = (args) => <Avatar {...args} />;

export const Default = (args) => <Avatar {...args}/>
Default.args = {
	name: 'Aurore Leblois',
	size: 'medium',
	backgroundColor: 'tomato',
	textColor: 'white'
}

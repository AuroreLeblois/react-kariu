import React from 'react';

import { Avatar } from './../index.js'

export default {
  title: 'Components/Atoms/Avatar',
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
	size: 'big',
	backgroundColor: 'tomato',
	textColor: 'white'
}

export const SquareAvatar = (args) => <Avatar {...args}/>
SquareAvatar.args = {
	name: 'Aurore Leblois',
	size: 'big',
	backgroundColor: 'tomato',
	textColor: 'white',
	shape: 'square'
}

export const NoImageAvatar = (args) => <Avatar {...args}/>
NoImageAvatar.args = {
	name: 'Aurore Leblois',
	size: 'big',
	backgroundColor: 'tomato',
	url: null,
	textColor: 'white',
	shape: 'round'
}

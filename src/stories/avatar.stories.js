import React from 'react';

import { Avatar } from './../index.js'

export default {
  title: 'Components/Avatar',
  component: Avatar

}

const Template = (args) => <Avatar {...args} />;

export const Default = (args) => <Avatar {...args}/>
Default.args = {
	name: 'Aurore Leblois',
	size: 'medium',
	color: 'tomato'
}

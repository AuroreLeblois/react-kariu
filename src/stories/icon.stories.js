import React from 'react';

import { Icon } from './../index.js'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
		icon: {
			control: {
				type: 'select',
				options: [
					'eye',
					// 'plugi',
					// 'rep',
					'soundOff',
					'soundOn',
				]
			}
		},
		color: { control: 'color' },
	}
}

const Template = (args) => <Icon {...args} />;

export const Default = (args) => <Icon {...args}/>
Default.args = { icon: 'eye' }

export const Custom = (args) => <Icon {...args}/>
Custom.args = {
	icon: 'soundOff',
	height: '20rem',
	width: '20rem',
	color: 'tomato'
}

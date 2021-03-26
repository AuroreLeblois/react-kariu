import React from 'react';

import { Icon } from './../index.js'

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  argTypes: {
		icon: {
			control: {
				type: 'select',
				options: [
					'eyeOpen',
					'eyeSlashed',
					'soundOff',
					'soundOn',
					'hamburgerMenu'
				]
			}
		},
		color: { control: 'color' }
	}
}

const Template = (args) => <Icon {...args} />;

export const Default = (args) => <Icon {...args}/>
Default.args = {
	icon: 'eyeOpen',
	height: '20rem',
	width: '20rem',
	color: 'tomato'
}

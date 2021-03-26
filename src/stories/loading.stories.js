import React from 'react';

import { Loading } from './../index.js'

export default {
  title: 'Components/Atoms/Loading',
  component: Loading,
  argTypes: {
		icon: {
			control: {
				type: 'select',
				options: [
					'loadingDefault',
				]
			}
		},
		color: { control: 'color' },
	}
}

const Template = (args) => <Icon {...args} />;

export const Default = (args) => <Loading {...args}/>
Default.args = {
	icon: 'loadingDefault',
	height: '20rem',
	width: '20rem',
	color: 'tomato'
}

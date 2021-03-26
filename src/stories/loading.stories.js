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
					// 'LoadingDots'
				]
			}
		},
		color: { control: 'color' },
	}
}

const Template = (args) => <Loading {...args} />;

export const Default = (args) => <Loading {...args}/>
Default.args = {
	icon: 'loadingDefault',
	height: '20rem',
	width: '20rem',
	color: 'tomato'
}

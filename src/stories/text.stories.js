import React from 'react'
import { Text } from './../index.js'

export default {
	title: 'React-Kariu/Atoms/Text',
	component: Text,
	argTypes: {
		text: {
			description: 'value of the text',
			control: { type: 'text' }
		},
		textColor:{
			description: 'Control the color of your title',
			control: { type: 'color' }
		},
		align: {
			description: 'align the text',
			control: { type: 'select' },
			options: ['left','center','right']
		}
	}
}

export const Default = (args) => <Text {...args}/>
Default.args = {
	text: 'This is a default text',
	align:'center'
}

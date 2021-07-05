import React from 'react'
import { Button, Checkbox, Icon, Tooltip } from './../index.js';
import { css } from '@emotion/css'
// import tokens from './../../tokens/javascript/tokens.js'

export default {
	title: 'React-Kariu/Atoms/Tooltip',
	component: Tooltip,
	argTypes: {
		text: {
			description: 'Text in Tooltip',
			control: { type: 'text' }
		},
		direction: {
			description: 'Direction of the tooltip',
			control: { type: 'select' },
			options: [ 'top', 'right', 'bottom', 'left' ]
		},
		backgroundColor: { name: 'backgroundColor', control: 'color' },
		textColor: { name: 'textColor', control : 'color' },
	}
}

export const Default = (args) => (
	<Tooltip {...args}>
		<Icon
			icon='eyeSlashed'
			color={'tomato'}
		/>
	</Tooltip>
)

export const ShortText = (args) => (
	<Tooltip {...args}
		text="I'm a medium text with a minWidth props, so be careful if you want to use me"
		minWidth='34vw'
	>
		<Button
			color={'tomato'}
			label='Tooltip right'
		/>
	</Tooltip>
)

export const LongText = (args) => (
	<Tooltip {...args}
		text='Brownie lemon drops jelly-o croissant.
			Toffee cake dessert dessert chupa chups cookie cake halvah.
			Ice cream dragée danish chupa chups tart apple pie chocolate bar sweet roll macaroon.
			Jelly-o icing candy sugar plum cookie. Marshmallow fruitcake chocolate.
			Candy canes bonbon pudding'
		minWidth='55vw'
	>
		<Button
			icon='eyeOpen'
			color={'blue'}
			text='Button'
		/>
	</Tooltip>
)

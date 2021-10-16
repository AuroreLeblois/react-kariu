import React from 'react'
import { Card, Text, Title } from './../index.js'

export default {
	title: 'react-kariu/Organism/Card',
	component: Card,
	argTypes: {
  	backgroundColor: {
  		name: 'backgroundColor',
  		control: 'color',
  		description: 'Control the color of your card background',
   	},
  	textColor: {
  		name: 'textColor',
  		control : 'color',
  		description: 'Control the color of the text',
  	},
    },
}

const Template = (args) => <Card {...args}/>

export const Default = (args) => {
	const ml = { marginLeft: '.625rem' }

	return (
		<Card {...args} >
			<Text textColor='blue' align='left' text='In the card if you give me a color i will not change'/>
			<Text fontFamily='inherit' textColor='inherit' text='
			Icing lemon drops chupa chups cupcake marzipan gingerbread donut.
			 Bear claw I love oat cake fruitcake cotton candy.
			Dragée fruitcake I love sweet oat cake jelly liquorice powder.
			I love danish topping tart jujubes. Muffin toffee gingerbread donut wafer jujubes marshmallow I love.
			Oat cake jujubes topping candy canes wafer I love cookie. Pie croissant chocolate cake danish bonbon jelly-o.'
			/>
		</Card>
	)
}
Default.args={title: 'Default Title'}


export const CustomContent = (args) => {
	const ml = { marginLeft: '.625rem' }

	return (
		<Card {...args}>
			<Title fontFamily='inherit' textColor='inherit' text='Custom title' priority={5}/>
			<Title fontFamily='inherit' textColor='inherit' text='Secondary text' priority={5}/>
		</Card>
	)
}

export const Accordion = (args) => {
	return (
		<Card {...args} title='Accordion' variant='accordion'>
		<Text
			fontFamily='inherit'
			text='
				Icing lemon drops chupa chups cupcake marzipan gingerbread donut.
				Bear claw I love oat cake fruitcake cotton candy.
				Dragée fruitcake I love sweet oat cake jelly liquorice powder.
				I love danish topping tart jujubes. Muffin toffee gingerbread donut wafer jujubes marshmallow I love.
				Oat cake jujubes topping candy canes wafer I love cookie. Pie croissant chocolate cake danish bonbon jelly-o.'
		/>
		</Card>
	)
}
Accordion.args = {title: 'Accordion'}

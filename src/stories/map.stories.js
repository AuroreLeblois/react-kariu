import React from 'react'
import { Map } from './../index.js'

export default {
	title: 'react-kariu/Molecule/Map',
	component: Map
}

const Template = (args) => <Map {...args}/>
export const Default = Template.bind({})

Default.args = {
	height: '300px',
	width: '300px',
	markers: [
		{latitude: 50, longitude: 45, popupContent: 'Je suis un point'},
		{latitude: 70, longitude: 80, popupContent: 'Je suis à un autre point'},
		{latitude: 51.508, longitude: -0.11, popupContent: 'Je suis une zone', areaRadius: 500}
	],
	zoom: 2
}

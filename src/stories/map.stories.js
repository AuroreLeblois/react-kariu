import React from 'react'
import { Map } from './../index.js'

export default {
	title: 'React-Kariu/Molecule/Map',
	component: Map,
	argTypes: {
		height : {
    		name: 'height',
    		type: { name: 'string', required: true},
    		description: 'REQUIRED for rendering on the page',
    		control: { type : 'text' }
    	},
		width : {
    		name: 'width',
    		type: { name: 'string', required: true},
    		description: 'REQUIRED for rendering on the page',
    		control: { type : 'text' }
    	}
	}
}

const Template = (args) => <Map {...args}/>
export const Default = Template.bind({})

Default.args = {
	height: '300px',
	width: '300px',
	markers: [
		{latitude: 50, longitude: 45, popupContent: 'Je suis un point'},
		{latitude: 70, longitude: 80, popupContent: 'Je suis à un autre point'},
		{latitude: 51.508, longitude: -0.11, popupContent: 'Je suis une zone', areaRadius: 500, areaColor: 'blue', areaFill: 'tomato'}
	],
	zoom: 2,
	tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
	attribution: '&copy; <a href="https://github.com/AuroreLeblois">AuroreLeblois</a> AuroreLeblois'
}

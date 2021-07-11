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
    	},
		markers : {
    		description: 'REQUIRED for rendering on the page your markers, for update it only take one marker'
    	},
		tileLayer : {
    		description: 'You can define a tile model for your map'
    	},
		attribution : {
    		description: 'Customize the attribution'
    	},
		zoom : {
    		description: 'Customize the zoom for the first render of the map'
    	}
	}
}

const Template = (args) => <Map {...args}/>
export const Default = Template.bind({})

Default.args = {
	height: '300px',
	width: '100%',
	markers: [
		{latitude: 50, longitude: 45, popupContent: "I am a point"},
		{latitude: 70, longitude: 80, popupContent: 'I am an other point'},
		{latitude: 51.508, longitude: -0.11, popupContent: "i'm a area", areaRadius: 500, areaColor: 'blue', areaFill: 'tomato'}
	],
	zoom: 2,
	tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
	attribution: '&copy; <a href="https://github.com/AuroreLeblois">AuroreLeblois</a> AuroreLeblois'
}

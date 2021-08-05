import React from 'react'
import { Map, Text, Title } from './../index.js'

export default {
	title: 'React-Kariu/Organism/Map',
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
    		description: `REQUIRED for rendering on the page your markers`
    	},
		tileLayer : {
    		description: 'You can define a tile model for your map'
    	},
		attribution : {
    		description: 'Customize the attribution'
    	},
		zoom : {
    		description: 'Customize the zoom for the first rendering of the map',
			control: { type: 'range', min: 1, max: 20 }
    	},
		iconUrl : {
    		description: `If you wish a custom Icon as a marker, upload your own and give the map the path.
				If absent, the custom icon will be the same as the demo
				Method of import: import {icon} from 'yourPath'
				props: iconUrl={icon}`
    	},
		markerWidth : {
    		description: 'Give your custom Icon a width'
    	},
		markerHeight : {
    		description: 'Give your custom Icon a height'
    	},
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
		{latitude: 51.508, longitude: -0.11, popupContent: "i'm an area", areaRadius: 5000, areaColor: 'blue', areaFill: 'tomato'}
	],
	zoom: 2,
	tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
	attribution: '&copy; <a href="https://github.com/AuroreLeblois">AuroreLeblois</a> AuroreLeblois'
}

export const Warning = () => (
	<div>
		<Title text='Warning' />
		<Text variant='danger' text={`This component won't replace leaflet!`}/>
		<Text variant='danger' text={`You will still need to install leaflet and import leaflet css!`}/>
		<Text varaint='danger' text={'To prevent bugs please follow the next instructions'}/>
		<Text variant='danger' text={`If you wish to use either the default markers or the 'default' custom markers:`}/>

		<Text variant='danger' text={`import 'leaflet/dist/leaflet.css';`}/>
		<Text variant='danger' text={`import 'leaflet/dist/images/marker-shadow.png'`}/>
		<Text variant='danger' text={`import 'leaflet/dist/images/marker-icon-2x.png'`}/>
		<Text variant='danger' text={`import  icon from 'react-kariu/src/elements/Map/marker.png'`}/>
	</div>
)

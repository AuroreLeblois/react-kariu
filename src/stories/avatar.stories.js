import React from 'react';

import { Avatar } from './../index.js'

export default {
  title: 'Components/Molecules/Avatar',
  component: Avatar,
  argTypes: {
	name : {
		name: 'name',
		type: {name: 'string', required: true},
		description: 'Take string and convert it into an array: this only works with 1 space or 0 space into the string',
		dafaultValue: 'Aurore Leblois',
		control: {type : 'text'}
	},
	url: {
		description: "Optionnal prop",
		type: {name: 'string', required: false},
	},
	backgroundColor: {
		description: "Only required if you don't provide an url or an icon to the component",
		control: 'color' },
	textColor: {
		description: "Only required if you don't provide an url or an icon to the component",
		control: 'color' },
	size: {
		description: "Only knows:" },
	shape: {
		description: "Only knows:" },
	customIcon: {
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
	}
  },
}

const Template = (args) => <Avatar {...args} />;

export const Default = (args) => <Avatar {...args}/>
Default.args = {
	name: 'Aurore Leblois',
	size: 'big',
	backgroundColor: 'tomato',
	textColor: 'white',
	url: 'https://media-exp1.licdn.com/dms/image/C4E03AQHZB-8fKQrkpw/profile-displayphoto-shrink_200_200/0/1517549970272?e=1620864000&v=beta&t=Ni4cCb8UuerLrEMB9plHd7g3GMYxJowbvnE9LHqbGOE'
}

export const SquareAvatar = (args) => <Avatar {...args}/>
SquareAvatar.args = {
	name: 'Aurore Leblois',
	size: 'big',
	url: 'https://media-exp1.licdn.com/dms/image/C4E03AQHZB-8fKQrkpw/profile-displayphoto-shrink_200_200/0/1517549970272?e=1620864000&v=beta&t=Ni4cCb8UuerLrEMB9plHd7g3GMYxJowbvnE9LHqbGOE',
	backgroundColor: 'tomato',
	textColor: 'white',
	shape: 'square',
}

export const NoImageAvatar = (args) => <Avatar {...args}/>
NoImageAvatar.args = {
	name: 'Aurore Leblois',
	size: 'big',
	backgroundColor: 'tomato',
	textColor: 'white',
	shape: 'round'
}

export const SvgAvatar = (args) => <Avatar {...args}/>
SvgAvatar.args = {
	name: 'Aurore Leblois',
	size: 'big',
	customIcon: 'eyeOpen',
	backgroundColor: 'tomato',
	textColor: 'white',
	shape: 'round'
}

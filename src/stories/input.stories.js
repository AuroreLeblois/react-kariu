import React from 'react';

import { Input } from './../index.js'

export default {
  title: 'React-Kariu/Atoms/Input/Input',
  component: Input,
  argTypes: {
	  backgroundColor: { control: 'color' },
	  textColor: { control: 'color' },
	  borderColor: { control: 'color' },
	  label : {
 	   name: 'label',
 	   type: {name: 'string', required: false},
 	   description: 'Provides a label to your input',
 	   defaultValue: 'Label',
 	   control: {type : 'text'}
    },
  }
}

const Template = (args) => <Input {...args} />;


export const Default = (args) => <Input {...args}/>
Default.args = {
	name: 'Default'
}
export const Password = (args) => <Input {...args}/>
Password.args = {
  label: 'Password',
  name: 'Password',
  type: 'password'
}


// export const SquareAvatar = (args) => <Avatar {...args}/>
// SquareAvatar.args = {
// 	name: 'Aurore Leblois',
// 	size: 'big',
// 	url: 'https://media-exp1.licdn.com/dms/image/C4E03AQHZB-8fKQrkpw/profile-displayphoto-shrink_200_200/0/1517549970272?e=1620864000&v=beta&t=Ni4cCb8UuerLrEMB9plHd7g3GMYxJowbvnE9LHqbGOE',
// 	backgroundColor: 'tomato',
// 	textColor: 'white',
// 	shape: 'square',
// }
//
// export const NoImageAvatar = (args) => <Avatar {...args}/>
// NoImageAvatar.args = {
// 	name: 'Aurore Leblois',
// 	size: 'big',
// 	backgroundColor: 'tomato',
// 	textColor: 'white',
// 	shape: 'round'
// }
//
// export const SvgAvatar = (args) => <Avatar {...args}/>
// SvgAvatar.args = {
// 	name: 'Aurore Leblois',
// 	size: 'big',
// 	customIcon: 'eyeOpen',
// 	backgroundColor: 'tomato',
// 	textColor: 'white',
// 	shape: 'round'
// }

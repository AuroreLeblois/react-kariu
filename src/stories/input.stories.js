import React from 'react';

import { Input, InputItem } from './../index.js'

export default {
  title: 'Components/Atoms/Input',
  component: InputItem,
  argTypes: {
	  backgroundColor: { control: 'color' },
	  textColor: { control: 'color' }
  }
}

const Template = (args) => <InputItem {...args} />;

export const InputItemObject = (args) => <InputItem {...args}/>
InputItemObject.args = {

}

export const InputDefault = (args) => <Input {...args}/>
InputDefault.args = {

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

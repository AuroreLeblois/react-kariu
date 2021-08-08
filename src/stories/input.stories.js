import React from 'react';

import { Input } from './../index.js'

export default {
  title: 'React-Kariu/Molecule/Input',
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
	type : {
	 description: 'Provides a type to your input but must be one of:',
  },
  name : {
   description: 'Provides a name to your input for form',
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

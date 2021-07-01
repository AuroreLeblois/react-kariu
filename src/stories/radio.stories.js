import React from 'react';

import { Radio } from './../index.js'

export default {
  title: 'React-Kariu/Atoms/Input/Radio',
  component: Radio,
  argTypes: {
	  textColor: { control: 'color' },
	  backgroundColor : { control: 'color' },
	   backgroundColorChecked : { control: 'color' },
		id : {
 		name: 'id',
 		type: {name: 'string', required: true},
 		description: 'Provides a label and id to your checkbox. The component WILL NOT RENDER without it',
 		dafaultValue: 'nope'
    },
  }
}

const Template = (args) => <Radio {...args} />;

export const Default = (args) => <Radio {...args}/>
Default.args = {
	id: 'form'
}

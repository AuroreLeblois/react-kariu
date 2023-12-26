import React from 'react';

import { DocUploader } from './../index.js'

export default {
  title: 'React-Kariu/Molecule/DocUploader',
  component: DocUploader,
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

const Template = (args) => <DocUploader {...args} />;

export const Default = (args) => <DocUploader {...args}/>
Default.args = {
	name: 'Default'
}

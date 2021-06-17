import React from 'react';

import { DatePicker } from './../index.js'

export default {
  title: 'React-Kariu/Molecule/DatePicker',
  component: DatePicker
}

const Template = (args) => <DatePicker {...args} />;

export const Default = (args) => <DatePicker {...args}/>
Default.args = {
	id: 'default',
	label: 'Label',
	name: 'name'
}

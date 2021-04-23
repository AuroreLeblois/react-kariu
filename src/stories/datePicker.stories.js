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
	label: 'label',
	name: 'name',
	value: '01/01/1922'
}

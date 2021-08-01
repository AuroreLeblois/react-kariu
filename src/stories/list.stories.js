import React from 'react';

import { List } from './../index.js'

export default {
  title: 'React-Kariu/Organism/List',
  component: List,
  argTypes: {
	backgroundColor: { control: 'color' },
	backgroundColorSelected: { control: 'color' },
	backgroundColorChecked: { control: 'color' },
	textColor: { control: 'color' },
	}
}
const Template = (args) => <List {...args} />
export const Default = (args) => <List {...args}/>
Default.args = {
	show: true,
	options: [{description: 'Please choose wisely'}, {value: '1', text: 'Option 1'}, {value: '2', text: 'Option 2'}]
}
export const NoData = (args) => <List {...args}/>
NoData.args = {
	show: true,
	options: null,
	textNoData: 'No data available'
}

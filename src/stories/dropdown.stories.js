import React from 'react';

import { List } from './../index.js'

export default {
  title: 'React-Kariu/Molecule/List',
  component: List,
  argTypes: {
	backgroundColor: { control: 'color' },
	backgroundColorSelected: { control: 'color' },
	textColor: { control: 'color' },
	}
}
const Template = (args) => <List {...args} />
export const Default = (args) => <List {...args}/>
Default.args = {
	value: 'Default',
	text: 'Default text for select',
	label:'Label for default select: ',
	idSelect: 'Default',
	name: 'Default name',
	options: [{value: '', text: 'Please select one'}, {value: '1', text: 'Option 1'}, {value: '2', text: 'Option 2'}]
}
export const NoData = (args) => <List {...args}/>
NoData.args = {
	value: 'Default',
	text: 'Default text for select',
	label:'Label for default select: ',
	idSelect: 'Default',
	name: 'Default name',
	options: [],
	noDataText: 'No data available'
}

export const Loading = (args) => <List {...args}/>
Loading.args = {
	value: 'Default',
	text: 'Default text for select',
	idSelect: 'Default',
	name: 'Default name',
	loading: true,
	options: [{value: '', text: 'Please select one'}, {value: '1', text: 'Option 1'}, {value: '2', text: 'Option 2'}],
	label:'Label for default select: ',
	textLoadingLabel: 'Please wait while loading',
	textLoading: 'i am loading...'
}

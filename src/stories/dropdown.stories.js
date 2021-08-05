import React from 'react';

import { Dropdown } from './../index.js'

export default {
  title: 'React-Kariu/Organism/Dropdown',
  component: Dropdown,
  argTypes: {
	backgroundColor: { control: 'color' },
	backgroundColorBtn: { control: 'color' , description: 'Be aware that the color you determine for the button will be applied to the checked Checkbox'},
	textColor: { control: 'color' },
	textColorBtn: { control: 'color', description: 'So the button and the text can be read the 2 colors are applied with different props'},
	}
}
const Template = (args) => <Dropdown {...args} />
export const Default = (args) => <Dropdown {...args}/>
Default.args = {
	show: true,
	checkbox: true,
	label: 'Dropdown',
	options: [{description: 'Please choose wisely'}, {value: '1', text: 'Option 1'}, {value: '2', text: 'Option 2'}]
}
export const NoData = (args) => <Dropdown {...args}/>
NoData.args = {
	show: true,
	options: null,
	label: 'Dropdown with no data',
	textNoData: 'No data available'
}

export const Navigation = (args) => <Dropdown {...args}/>
Navigation.args = {
	show: true,
	options: null,
	label: '',
	shape: 'round',
	options: [{navigation: 'https://www.linkedin.com/in/aurore-leblois', isExternal: true, text: 'Check my linkedin'}]
}

// export const Search = (args) => <Dropdown {...args}/>
// Search.args = {
// 	show: true,
// 	label: 'Search dropdown',
// 	variant: 'search',
// 	options:  [{value: '1', text: 'Option 1'}, {value: '2', text: 'Option 2'},{value: 'test', text: 'random option'}],
// 	headCols:{ value: "value", text: "text"}
// }

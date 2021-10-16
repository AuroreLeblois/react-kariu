import React from 'react'
// import { ArgsTable } from '@storybook/addon-docs/blocks';
import { Calendar } from './../index.js'
import { css } from '@emotion/css'

export default {
	title: 'react-kariu/Organism/Calendar',
	component: Calendar,
	argTypes: {
		infos: {
			description: 'data that will be displayed in the calendar',
			control: { type: 'text' }
		},
		vhead: {
			description: 'data to display in the vertical header, aka cells of the first column',
			defaultValue: null,
			control: { type: 'text' }
		},
		fontFamily: {
			control: { type: 'text' }
		},
		monthSelected: {
			description: 'Month of the schedule',
			defaultValue: 12,
		},
		yearSelected: {
			description: 'Year of the schedule',
			defaultValue: 2021
		},
		showAvatar: {
			description: 'Avatar that can be displayed next to a username',
			defaultValue: false,
			control: { type: 'boolean' }
		},
		language: {
			description: 'language of the headcols',
			defaultValue: 'en',
			control: 'radio',
			options: ['fr','en']
		},
		noNameText: {
			description: 'Text if no data to show in the first collumn of cells',
			defaultValue: 'no name provided',
			control: { type: 'text' }
		},
		onClickItem: { action: () => console.log('item clicked') },
		onClickName: { action: () => console.log('username clicked') },
		onChange: { action: (data) => console.log(data) }
	}
}


const styleTable = {
	display: 'flex',
	minWidth: '40vw',
	maxWidth: '96vw',
	overflowX: 'auto'
}


const Template = (args, { parameters }) => (
	<div className={css(styleTable)}>
		<Calendar {...args} showAvatar={false}/>
	</div>
)


export const Default = Template.bind({})
Default.args = {
	monthSelected: 10,
	yearSelected: 2021,
	infos: [
		{ date_start : "2021-10-04",
			time_start: "08:00",
			time_end: '17:00',
			site_name: 'Work',
			activity_code: 'Money',
			special: true,
			marked: true
		},
		{ date_start : "2021-10-05", time_start: "08:00", time_end: '17:00', site_name: 'Work', activity_code: 'Money' },
		{ date_start : "2021-10-07", time_start: "20:00", time_end: '07:00', site_name: 'Work', activity_code: 'Money', special: true },
		{ unavailability_code : 'RDV', name: 'Doctor', unavailability_date_start: "2021-10-03", unavailability_time_start:'09:00', unavailability_time_end:'10:00', marked: true}
	],
	vhead: [
		{ name: "Work", id: 5 },
		{ name: 'Doctor', id:42 },
		{ name: null , id: 36 }
	],
	holidays:[{month_day: '10-16'}],
	showAvatar: true,
	onClickItem: (data) => console.log(data),
	onDateChange: (data) => console.log(data)
}

export const Loading = Template.bind({})
Loading.args = {
	loading: true
}


export const Empty = (args, { parameters }) => (
	<div className={css(styleTable)}>
		<Calendar {...args}
			monthSelected={9}
			yearSelected={2021}
		/>
	</div>
)

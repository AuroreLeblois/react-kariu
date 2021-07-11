import React from 'react'
import { Search } from './../index.js'

export default {
	title: 'React-Kariu/Molecule/Search',
	component: Search,
	argTypes: {
		}
	}

const headCols = {
	pict: { type: 'avatar', name: 'name' },
	name: 'Nom prénom',
	username: 'Identifiant',
	email: 'E-mail'
}

export const Default = (args, { parameters }) => <Search
	{...args}
	onChange={(data)=>console.log(data)}
	headCols={headCols}
	data={parameters.users}
/>
Default.args = {
	label: 'Search in log',
	description: 'Look in the logs for results',
	name: 'search',
	placeholder: 'Search...',
	animatedWidth: true
}

import React from 'react';

import { NavBar, NavItem, Icon, Title } from './../index.js';

export default {
  title: 'React-Kariu/Molecule/NavBar',
  component: NavBar,
  argTypes: {
	backgroundColor: { name: 'backgroundColor', control: 'color' },
	textColor: { name: 'textColor', control : 'color' }
  }
}

const Template = (args) => <NavBar {...args} />;

export const Default = (args) => (
	<NavBar {...args}>
		<div onClick={()=>console.log('click')}>
			<Title cursor='pointer' priority={3} text='AppName' textColor='inherit' />
		</div>
		<NavItem  onClick={()=>console.log('helloooo world')} option={ {href: '#', label: 'A link'} }/>
		<NavItem  option={ {href: '#', label: 'Another link'} }/>
	</NavBar>
)

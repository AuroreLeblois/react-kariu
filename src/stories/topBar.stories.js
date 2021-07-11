import React from 'react';

import { TopBar,NavItem, Icon, Title } from './../index.js';

export default {
  title: 'React-Kariu/Molecule/TopBar',
  component: TopBar,
  argTypes: {
	backgroundColor: { name: 'backgroundColor', control: 'color' },
	textColor: { name: 'textColor', control : 'color' }
  },
}

const Template = (args) => <TopBar {...args} />;

export const Default = (args) => (
	<TopBar {...args}>
		<Title priority={3} text='AppName'/>
		<NavItem option={ {href: '#', label: 'a link'} }/>
		<NavItem option={ {href: '#', label: 'Another link but disabled', disabled: true} }/>
	</TopBar>
)

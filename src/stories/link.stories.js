import React from 'react';

import { Link } from './../index.js'

export default {
  title: 'React-Kariu/Atoms/Link',
  component: Link,
  argTypes: {
	textColor: {control: 'color'}
}
}

const Template = (args) => <Link {...args} />;

export const Default = (args) => <Link {...args}/>
Default.args = {
	href: "#",
	text: "I do nothing"
}
export const ExternalLink = (args) => <Link {...args}/>
ExternalLink.args = {
	href: "https://www.linkedin.com/in/aurore-leblois/",
	text: "I am an external link",
	isExternal: true
}

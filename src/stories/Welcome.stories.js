import React from 'react'
import { css } from '@emotion/css'
import { Title } from '../index.js'
import './../../.storybook/faviconKariu.png'

export default {
	title: 'Introduction'
}

export const Introduction = () => (
	<div>
		<div>
		</div>
			<Title text='React-Kariu: A simple library with customisable elements' priority={1} textColor='#501537'/>

			<Title text='Customizable for devs' priority={2} textColor='#922D50' align='left'/>
			<p> For devs who don't have a minute to waste: this library can adapt to your needs</p>

		<div>
			<Title text='Props textColor/BackgroundColor' priority={4} textColor='#922D50' align='left'/>
			<p> Most components will take textColor and BackgroundColor in their props, except for Icon,
				which only take color as prop, and Map, which doesn't need color.</p>
			<Title text='Props className' priority={4} textColor='#922D50' align='left'/>
			<p> Once again, the prop className is accepted in most of the components. This will allow you to customize even more</p>
		</div>
	</div>
)

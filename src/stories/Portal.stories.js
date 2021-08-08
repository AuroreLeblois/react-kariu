import React from 'react'
import { Title, Text, Portal } from '../index.js'

export default {
	title: 'React-Kariu/Atoms/Portal',
		component: Portal,
		argTypes: {
			portalNodeId: {control: 'text', description: `REQUIRED for rendering`}
		   },
}

export const Default = () => (
	<div>
	<Text text='To render any element anywhere, just aim for it with the props portalNodeId'/>
	<Text text={`I look like this in the code`}/>
	<Portal portalNodeId='root'>
		<Title text={`I am a title but I am out of the current flow`}/>
		<Text text={'Me too: look at the dom structure!'}/>
	</Portal>
	</div>
)

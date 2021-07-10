import React from 'react'
import { Modal, ModalItem, ModalFooter } from './../index.js'

export default {
	title: 'React-Kariu/Organism/Modal',
	component: Modal,
	argTypes: {
		portalNodeId: {
    		description: 'REQUIRED for rendering on the page, aim for an existing element in the DOM'
		},
		backgroundColor: {
			description: "Only required if you don't provide an url or an icon to the component",
			control: 'color' },
		textColor: {
			description: "Only required if you don't provide an url or an icon to the component",
			control: 'color' },
    	}
}

const Template = (args) => <Modal {...args}/>

export const Default = (args) => {
	const ml = { marginLeft: '.625rem' }

	return (
		<Modal {...args} title='Title Modal' priority={4}>
			<ModalItem>
				<p>This is an example modal with portal</p>
			</ModalItem>
			<ModalFooter><p>I'm a footer for your modal</p></ModalFooter>

		</Modal>
	)
}
Default.args = { show: true, portalNodeId:'root' }

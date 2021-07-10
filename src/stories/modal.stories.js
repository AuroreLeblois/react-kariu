import React from 'react'
import { Modal, ModalItem } from './../index.js'

export default {
	title: 'React-Kariu/Organism/Modal',
	component: Modal,
	argTypes: {
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

		</Modal>
	)
}
Default.args = { show: true }

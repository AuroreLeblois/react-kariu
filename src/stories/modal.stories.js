import React from 'react'
import { Modal, ModalItem, ModalFooter, Button, Text } from './../index.js'

export default {
	title: 'React-Kariu/Organism/Modal',
	component: Modal,
	argTypes: {
		portalNodeId: {
    		description: 'REQUIRED for rendering on the page, aim for an existing element in the DOM'
		},
		backgroundColor: { control: 'color' },
		textColor: { control: 'color' },
    	}
}

const Template = (args) => <Modal {...args}/>

export const Default = (args) => {
	const ml = { marginLeft: '.625rem' }

	return (
		<Modal {...args} title='Title Modal' priority={4}>
			<ModalItem>
				<Text text='This is an example modal with portal'/>
				<Text text='I will disapear from the DOM if my state show is at false'/>
			</ModalItem>
			<ModalFooter>
				<Button backgroundColor={'purple'} label='click on me (log)' onClick={()=>console.log('hello')}/>
			</ModalFooter>

		</Modal>
	)
}
Default.args = { show: true, portalNodeId:'root' }

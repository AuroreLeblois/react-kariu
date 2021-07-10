import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Button, Icon, ModalItem, ModalHeader, Portal } from '../../index.js'
import './../reset.css'
import './modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props)
	this.state = {
		show: (props.show ? props.show : false)
	}
    }

	componentDidUpdate(prevProps) {
		if (this.props.show !== prevProps.show) {
			this.setState({ show: this.props.show })
		}
	}

	render() {
		if (!this.state.show) return null

		let styleModal = {
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			color: this.props.textColor ? this.props.textColor : 'tomato'
		}

		return (
			<Portal portalNodeId={this.props.portalNodeId}>
				<div className={'modal-kariu '+css(styleModal)}>
					{this.renderHeader()}
					{this.props.children}
				</div>
			</Portal>
		)
	}

	renderHeader() {
		if (!this.props.title.length) return null

		return (
			<ModalHeader
				onClick={this.handleCloseModal.bind()}
				textColor={this.props.textColor}
				title={this.props.title}
				priority={this.props.priority}
			/>
		)
	}

	handleCloseModal = () => {
		this.setState({show: false}, this.props.onClose && this.props.onClose())
	}
}

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	portalNodeId: PropTypes.string,
	textColor: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string,
	variant: PropTypes.string
}

Modal.defaultProps = {
	portalNodeId: 'root',
	show: false,
	textColor: 'tomato',
	title: '',
	variant: ''
}

export default Modal

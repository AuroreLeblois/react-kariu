import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Button, Icon, ModalItem, ModalHeader, Portal } from '../../index.js'

class Modal extends React.Component {
  constructor(props) {
    super(props)
	this.state = {
		show: (props.show ? props.show : false)
	}
	this.refModal =  React.createRef()
    }

	componentDidMount() {
		document.addEventListener("click", this.handleOutsideClick, false)
	}

	componentDidUpdate(prevProps) {
		if (this.props.show !== prevProps.show) {
			this.setState({ show: this.props.show })
		}
	}
	componentWillUnmount() {
		document.removeEventListener("click", this.handleOutsideClick, false)
	}

	render() {
		if (!this.state.show) return null

		let styleModal = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			display: 'flex',
			flexDirection: 'column',
			padding: '0.85em',
			minWidth: '15rem',
			maxWidth: '90%',
			borderRadius: '1em',
			zIndex: '10000',
			transform: 'translate(-50%, -50%)',
			outline: 'transparent',
			webkitBoxShadow: '2px 1px 3px 1px #C7C7C7',
			boxShadow: '2px 1px 3px 1px #C7C7C7',
			backgroundColor: (this.props.backgroundColor ? this.props.backgroundColor : 'white'),
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'Arial',
			color: (this.props.textColor ? this.props.textColor : 'tomato')
		}

		const overlay = {
			  position: 'fixed',
			  zIndex: 100,
			  top: 0,
			  right: 0,
			  bottom: 0,
			  left: 0,
			  backgroundColor: 'rgba(0,0,0,0.16)',
		}

		return (
			<>
			<div className={css(overlay)+' Overlay'}>
			</div>
			<Portal portalNodeId={this.props.portalNodeId}>
				<div onClick={(event) => {
					this.handleOutsideClick(event)
						}}
					ref={this.refModal} className={'modal-kariu '+css(styleModal)}>
					{this.renderHeader()}
					{this.props.children}
				</div>
			</Portal>
			</>
		)
	}

	renderHeader() {
		if (!this.props.title.length) return null

		return (
			<ModalHeader
				fontFamily='inherit'
				onClick={this.handleCloseModal.bind()}
				textColor={this.props.textColor}
				title={this.props.title}
				priority={this.props.priority}
			/>
		)
	}

	handleCloseModal = () => {
		this.setState({show: false})
	}

	handleOutsideClick = e => {
		if (!this.refModal.current.contains(e.target)) this.handleCloseModal();
  };
}

Modal.propTypes = {
	fontFamily: PropTypes.string,
	show: PropTypes.bool.isRequired,
	portalNodeId: PropTypes.string,
	textColor: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string
}

Modal.defaultProps = {
	fontFamily: 'inherit',
	portalNodeId: 'root',
	show: false,
	textColor: 'tomato',
	title: ''
}

export default Modal

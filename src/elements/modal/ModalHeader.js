import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Button ,Title } from '../../index.js'

class ModalHeader extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		this._isMounted = false
	}

	componentDidMount() { this._isMounted = true }

	componentWillUnmount() { this._isMounted = false }


	// Renderers ----------------------------------------------------------------
	render() {
		const paddingX = '0.125rem'

		const styleHeader = {
			paddingTop: '0.25rem',
			paddingBottom: '0.25rem',
			borderBottom: '1px solid  #C7C7C7',
			marginLeft: paddingX,
			paddingRight: paddingX,
			flexDirection: 'row',
			flexWrap: 'nowrap',
			alignItems: 'center',
			justifyContent: 'space-between'
		}

		return (
			<div className={'modal-kariu--header '+css(styleHeader)+' '+(this.props.className ? this.props.className : '')}>
				{this.renderTitle()}
				{[this.props.children]}
			</div>
		)
	}

	renderTitle() {
		if (!this.props.title) return null

		const styleTitle = {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between'
		}

		return (
			<div className={'modal-kariu--header-title '+css(styleTitle)}>
				<Title
					textColor={this.props.textColor ? this.props.textColor : 'inherit'}
					text={this.props.title}
					priority={this.props.priority}
				/>
				{this.renderCloseBtn()}
			</div>
		)
	}
	renderCloseBtn () {
		return (
			<div>
				<Button
					size='small'
					shape='round'
					icon='cross'
					onClick={this.props.onClick}
					backgroundColor={'inherit'}
					textColor={this.props.textColor? this.props.textColor: 'inherit'}
				/>
			</div>
		)
	}
}

ModalHeader.propTypes = {
	title: PropTypes.string
}

ModalHeader.defaultProps = {
	title: null
}

export default ModalHeader

import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'

class ModalItem extends React.Component {
	// Renderers ----------------------------------------------------------------
	render() {
		const styleItem = {
			display: 'flex',
			padding: '0.75rem '+'0.5rem',
			lineHeight: '1.5rem',
			justifyContent: this.props.justify,
			flexWrap: this.props.wrap,
			flexGrow: this.props.grow,
			flexDirection: this.props.direction,
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit',
		}

		return (
			<div className={'modalItem-kariu '+css(styleItem)}>
				{[this.props.children]}
			</div>
		)
	}
}

ModalItem.propTypes = {
	fontFamily: PropTypes.string,
	direction: PropTypes.string,
	grow: PropTypes.number,
	wrap: PropTypes.string,
	align: PropTypes.string,
	justify: PropTypes.string
}

ModalItem.defaultProps = {
	direction: 'column',
	grow: 0,
	wrap: 'nowrap',
	align: 'stretch',
	justify: 'center'
}

export default ModalItem

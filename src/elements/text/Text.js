import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'

// const Title = (props) => {
const Text = (props) => {
	// Renderers ----------------------------------------------------------------
		let style = {
			color: (props.textColor ? props.textColor : 'tomato'),
			fontFamily: (props.fontFamily ? props.fontFamily : 'inherit'),
			wordBreak: 'break-word',
			fontWeight: 'regular',
			textAlign: props.align ? props.align : 'center',
			letterSpacing: '-0.025rem',
			wordBreak: 'break-word',
			whiteSpace: 'pre-wrap',
			marginBottom: '0.55rem',
			marginTop: '0.25rem',
			cursor: props.cursor
		}
		switch (props.variant) {
			case 'label':
				style.color = 'grey'
				style.fontSize = '1rem'
				style.lineHeight = '1rem'
				style.textTransform = 'uppercase'
			break;
			case 'description':
				style.color = 'darkgrey'
				style.fontSize = '0.85rem'
				style.lineHeight = '1.25rem'
			break;
			case 'disabled':
				style.color = 'grey'
			break;
			case 'italic':
				style.fontStyle = 'italic'
			break;
			case 'danger':
				style.color = 'rgb(236, 39, 39)'
			break;
			default: // Normal text
				style
			break;
		}
			return (
				<p className={css(style)+' '+props.className}>
					{props.text}
				</p>
			)

}

Text.propTypes = {
	text: PropTypes.string.isRequired,
	variant: PropTypes.oneOf([
		'default',
		'label',
		'description',
		'disabled',
		'danger',
		'italic'
	]),
	align: PropTypes.string,
	textColor: PropTypes.string,
	fontFamily: PropTypes.string,
	cursor: PropTypes.string
}

Text.defaultProps = {
	fontFamily: 'inherit',
	variant: 'default',
	align: 'center',
	cursor : 'text',
	textColor: 'tomato',
}

export default Text

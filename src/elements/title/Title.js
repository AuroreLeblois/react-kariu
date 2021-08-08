import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'

// const Title = (props) => {
class Title extends React.Component {
	// Renderers ----------------------------------------------------------------
	render() {
		let style = {
			display: 'block',
			color: (this.props.textColor ? this.props.textColor : 'tomato'),
			fontFamily: (this.props.fontFamily ? this.props.fontFamily : 'inherit'),
			wordBreak: 'break-word',
			fontWeight: 'regular',
			textAlign: this.props.align,
			letterSpacing: '-0.025rem',
			wordBreak: 'break-word',
			whiteSpace: 'pre-wrap',
			marginBottom: '0.55rem',
			marginTop: '0.25rem',
			cursor: this.props.cursor
		}

		switch (this.props.priority) {
			case 1:
				style.fontSize = '2.75rem'
				style.lineHeight = '3.5rem'
				return (
					<h1 className={css(style)+' '+this.props.className}>
						{this.props.text}
					</h1>
				)
			case 2:
				style.fontSize = '2rem'
				style.lineHeight = '2.75rem'
				return (
					<h2 className={css(style)+' '+this.props.className}>
						{this.props.text}
					</h2>
				)
			case 3:
				style.fontSize = '1.75rem'
				style.lineHeight = '2.5rem'
				return (
					<h3 className={css(style)+' '+this.props.className}>
						{this.props.text}
					</h3>
				)
			case 4:
				style.fontSize = '1.5rem'
				style.lineHeight = '2rem'
				style.fontWeight = 'semibold'
				return (
					<h4 className={css(style)+' '+this.props.className}>
						{this.props.text}
					</h4>
				)
			case 5:
				style.fontSize = '1.25rem'
				style.lineHeight = '1.95rem'
				style.fontWeight ='bold'
				return (
					<h5 className={css(style)+' '+this.props.className}>
						{this.props.text}
					</h5>
				)
			case 6:
				style.fontSize = '1.15rem'
				style.lineHeight = '1.95rem'
				style.fontWeight = 'bold'
				style.letterSpacing = 'normal'
				return (
					<h6 className={css(style)+' '+this.props.className}>
						{this.props.text}
					</h6>
				)
			default: // m
			style.fontSize = '3.75rem'
			style.lineHeight = '4.5rem'
			return (
				<h1 className={css(style)+' '+this.props.className}>
					{this.props.text}
				</h1>
			)
		}


	}
}

Title.propTypes = {
	text: PropTypes.string.isRequired,
	priority: PropTypes.number,
	align: PropTypes.string,
	textColor: PropTypes.string,
	fontFamily: PropTypes.string,
	cursor: PropTypes.string
}

Title.defaultProps = {
	fontFamily: 'inherit',
	priority: 1,
	align: 'center',
	cursor : 'text',
	textColor: 'tomato',
}

export default Title

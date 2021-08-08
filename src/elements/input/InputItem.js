import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './../../index.js'
import { css } from '@emotion/css'

class InputItem extends React.Component {
		constructor(props) {
		super(props)

		this.state = {
			value: (props.value ? props.value : "")
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value !== this.props.value) {
			this.setState({value: this.props.value})
		}
	}

	handleDelete() {
		this.setState({value: ''}, this.props.onDelete)
	}

	render() {
		if(!this.state.value) return null

		let backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'lightblue'
		let textColor = this.props.textColor ? this.props.textColor : 'black'

		let inputItemKariu = {
			maxWidth :'fit-content',
			display: 'flex',
			flexFlow: 'row nowrap',
			alignItems: 'center',
			justifyContent: 'center',
			bordeRadius: '15%',
			borderRadius: '0.25rem',
			backgroundColor: backgroundColor
		}

		let inputItemKariuParagraph = {
			color: textColor,
			fontWeight: 'normal',
			fontSize: '0.85rem',
			lineHeight: '1rem',
			padding: '0.25rem',
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit',
		}

		let inputItemKariuButtonDelete = {
			outline: 'none',
			border: 0,
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding :'0.5rem',
			borderTopRightRadius:'0.25rem',
			borderBottomRightRadius: '0.25rem',
			backgroundColor: backgroundColor,
			color: textColor,
			cursor: 'pointer',
			':hover': { filter: 'brightness(95%)' }
		}

		return (
			<div className={css(inputItemKariu) +' '+ this.props.className}>
				<p className={css(inputItemKariuParagraph)}>{this.state.value}</p>
				<button className={css(inputItemKariuButtonDelete)}
					onClick={this.handleDelete.bind(this)}>
					<Icon icon='cross'
						height='.6rem'
						width='.6rem'
						color={textColor}/>
				</button>
			</div>
		)
	}
}

InputItem.propTypes = {
	fontFamily: PropTypes.string,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	value: PropTypes.string
}

InputItem.defaultProps = {
	fontFamily: 'inherit',
	backgroundColor: 'lightblue',
	textColor: 'blue-grey',
	value: 'Example',

}

export default InputItem

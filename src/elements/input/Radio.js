import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './../../index.js'
import { css } from '@emotion/css'

class Radio extends React.Component {
		constructor(props) {
		super(props)

		this.state = {
			checked: (props.checked ? props.checked : false)
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.checked !== this.props.checked) {
			this.setState({ checked: this.props.checked })
		}
	}

	handleClick() {
		this.setState({ checked: true })
	}

	render() {
		if (!this.props.id) return null

		let textColor = {
			color: this.props.textColor ? this.props.textColor : 'blue navy',
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit'
		}

		const wrapper = {
				display: 'flex',
				lineHeight: 'normal',
		}

		let styleRadio = {
			verticalAlign: 'text-bottom',
			borderRadius: '4px',
			height: '1rem',
			width: '1rem',
			marginRight: '.25rem',
			backgroundColor : this.props.backgroundColor ? this.props.backgroundColor : 'white',
			'&:checked': {
				backgroundColor : this.props.backgroundColorChecked ? this.props.backgroundColorChecked : 'tomato',
			}
		}

		return (
			<div className={'radio-kariu--wrapper '+css(wrapper)+' '+this.props.className}>
				<input
					type="radio"
					required={this.props.required}
					className={'radio-kariu '+css(styleRadio)}
					id={this.props.id}
					name={this.props.name}
					onChange={ ()=> {this.handleClick() && this.props.onChange}}
					checked= {this.state.checked}
					/>
				<label className={css(textColor)} htmlFor={this.props.id}>{this.props.id}</label>
			</div>
		)
	}
}

Radio.propTypes = {
	id: PropTypes.string.isRequired,
	fontFamily: PropTypes.string,
	textColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	backgroundColorChecked: PropTypes.string,
	required: PropTypes.bool
}

export default Radio

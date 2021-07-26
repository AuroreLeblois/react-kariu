import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './../../index.js'
import './../reset.css'
import { css } from '@emotion/css'

class Checkbox extends React.Component {
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
		this.setState({ checked: !this.state.checked })
	}

	render() {
		if (!this.props.id) return null

		const wrapper = {
				display: 'flex',
				lineHeight: 'normal',
		}


		let textColor = {
			color: this.props.textColor ? this.props.textColor : '#43464B',
			textAlign: 'end'
		}

		let styleCheckbox = {
			'-webkit-appearance': 'none',
			'-moz-appearance': 'none',
			'-ms-appearance': 'none',
			verticalAlign: 'text-bottom',
			borderRadius: '4px',
			height: '1rem',
			width: '1rem',
			marginRight: '.25rem',
			background: '#fff',
			border: '1px solid #ccc',
			backgroundColor : this.props.backgroundColor ? this.props.backgroundColor : 'white',
			'&:checked': {
				backgroundColor : this.props.backgroundColorChecked ? this.props.backgroundColorChecked : 'tomato',
			}
		}

		return (
			<div className={'checkbox-kariu--wrapper '+css(wrapper)+' '+this.props.className}>
				<input
					type='checkbox'
					required={this.props.required}
					className={'checkbox-kariu '+css(styleCheckbox)}
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

Checkbox.propTypes = {
	id: PropTypes.string.isRequired,
	textColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	backgroundColorChecked: PropTypes.string,
	required: PropTypes.bool
}

export default Checkbox

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
			cursor: 'pointer'
		}


		let textColor = {
			color: this.props.textColor ? this.props.textColor : '#43464B',
			textAlign: 'end',
			cursor: 'pointer'
		}

		let styleCheckbox = {
			WebkitAppearance: 'none',
			MozAppearance: 'none',
			msAppearance: 'none',
			verticalAlign: 'text-bottom',
			cursor: 'pointer',
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
			<div onClick={this.handleClick.bind(this)} className={'checkbox-kariu--wrapper '+css(wrapper)+' '+this.props.className}>
				<label className={css(textColor)} htmlFor={this.props.id}>
				<input
					type="checkbox"
					required={this.props.required}
					className={'checkbox-kariu '+css(styleCheckbox)}
					value={this.props.id}
					name={this.props.name}
					checked= {this.state.checked}
					onChange={this.handleClick.bind(this) && this.props.onChange}
					/>
				{this.props.id}
				</label>
			</div>
		)
	}
}

Checkbox.propTypes = {
	id: PropTypes.string,
	textColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	backgroundColorChecked: PropTypes.string,
	required: PropTypes.bool
}

export default Checkbox

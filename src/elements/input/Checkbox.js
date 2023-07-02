import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './../../index.js'
import { css } from '@emotion/css'

const Checkbox = (props) => {

		if (!props.id) return null

		const wrapper = {
			display: 'flex',
			lineHeight: 'normal',
			cursor: 'pointer',
			alignItems: 'baseline'
		}


		let textColor = {
			fontFamily: props.fontFamily ? props.fontFamily : 'inherit',
			color: props.textColor ? props.textColor : '#43464B',
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
			backgroundColor : props.backgroundColor ? props.backgroundColor : 'white',
			'&:checked': {
				backgroundColor : props.backgroundColorChecked ? props.backgroundColorChecked : 'tomato',
			}
		}

		return (
			<div onClick={this.handleClick.bind(this)} className={'checkbox-kariu--wrapper '+css(wrapper)+' '+props.className}>
				<label className={css(textColor)} htmlFor={props.id}>
				<input
					type="checkbox"
					required={props.required}
					className={'checkbox-kariu '+css(styleCheckbox)}
					value={props.id}
					name={props.name}
					checked= {this.state.checked}
					onChange={this.handleClick.bind(this) && props.onChange}
					/>
				{props.id}
				</label>
			</div>
		)
	}


Checkbox.propTypes = {
	id: PropTypes.string,
	fontFamily: PropTypes.string,
	textColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	backgroundColorChecked: PropTypes.string,
	required: PropTypes.bool
}
Checkbox.defaultProps = {
	fontFamily: 'inherit'
}

export default Checkbox

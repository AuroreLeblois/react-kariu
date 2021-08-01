import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from './../../index.js'
import { css } from '@emotion/css'
import './../reset.css'

class Input extends React.Component {
	// Constructor -------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			label: (props.label ? props.label : 'Label'),
			value: (props.value ? props.value : ''),
			type: (props.type ? props.type : 'text'),
			isPassword: (props.type === 'password'),
			isSearch: (props.type === 'search')
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value !== this.props.value ||
			prevProps.label !== this.props.label ||
			prevProps.description !== this.props.description ||
			prevProps.type !== this.props.type) {
				this.setState({
					value: this.props.value,
					label: this.props.label,
					type: this.props.type,
					isPassword: (this.props.type === 'password'),
					isSearch: (this.props.type === 'search')
				})
		}
	}

	// Renderers ----------------------------------------------------------------
	render() {
		let colorText = (this.props.textColor ? this.props.textColor : '#43464B')

		let wrapper = {
			display: 'flex',
			position: 'relative',
			width: '100%',
			lineHeight: '1rem',
			flexDirection: 'column',
			flexFlow: 'column nowrap',
			cursor: 'default'
		}

		let styleInput = {
			display: 'flex',
			width: 'auto',
			margin: (this.state.type !== 'range' ? '5px 0px': 0),
			height: '2.25rem',
			border: '1.25px solid #ccc',
			borderRadius: '4px',
			boxSizing: 'border-box',
			paddingLeft: (this.state.type !== 'range' ? '0.85rem': 0),
			color: colorText,
			borderColor: (this.props.borderColor ? this.props.borderColor : '#bfbfbf'),
			backgroundColor: (this.props.backgroundColor ? this.props.backgroundColor : '#eeeeee'),
			'&:focus': {
				borderColor: '#309bc2',
				borderWidth: 'medium'
			},
			'[type=number]::-webkit-inner-spin-button': {
				opacity: 1
			},
			'[type=range]::-webkit-slider-runnable-track': {
				width: '100%',
				height: '15px',
				cursor: 'pointer',
				/* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
				background:  this.props.backgroundColor ? this.props.backgroundColor : '#3071a9',
				borderRadius: '1.3px',
				border: '0.2px solid #010101'
			},
			'[type=search]': {
				width: 'auto',
				display: 'flex'
			}
		}

		return (
			<div className={'input-kariu--wrapper '+css(wrapper)}>
				{this.renderLabel(colorText)}
				<input className={'input-kariu '+css(styleInput)}
					type={this.state.type}
					autocomplete={this.props.autocomplete}
					name={this.props.name}
					value={this.state.value}
					onChange={this.handleChange.bind(this)}
					placeholder={this.props.placeholder}
					required={this.props.required}
					disabled={this.props.disabled}
					/>
					{this.renderBtnShowPwd(colorText)}
					{this.renderDescription(colorText)}
			</div>
		)
	}

	renderLabel(colorText) {
		if (!this.props.label) return null

		let color = { color: colorText }
		return (
			<label htmlFor={this.props.name} className={'input-kariu--label '+css(color)}>{this.props.label}</label>
		)
	}

	renderBtnShowPwd(colorText) {
		if (this.state.isPassword) {
			let btnEye = {
				flex: '0 1 auto',
				display:  'inline-flex',
				position: 'absolute',
				right:0,
				top:'35%',
				height:'2.25rem',
				alignItems: 'center',
				justifyContent: 'center',
				marginRight: '0.5rem',
				padding:' 0',
				'&:focus': { outline: 'none'},
				'&:required': { borderColor: '#ed4637' },
				'&:disabled': { borderColor: 'grey', backgroundColor:'lightgrey'}
			}
			if (this.state.type === 'password') {
				return (
					<Button
						icon='eyeOpen'
						size='small'
						shape='round'
						backgroundColor='transparent'
						textColor={colorText}
						className={'button-eye-kariu '+css(btnEye)}
						onClick={this.toggleShow.bind(this)}/>
				)
			} else {
				return (
					<Button
						icon='eyeSlashed'
						size='small'
						backgroundColor='transparent'
						textColor={colorText}
						shape='round'
						className={'button-eye-kariu '+css(btnEye)}
						onClick={this.toggleShow.bind(this)}/>
				)
			}
		} else return null
	}

	renderDescription(colorText) {
		let styleDescription = { color: colorText, fontSize: 'smaller', marginTop: 0 }

		if (this.state.type === 'range') {
			return (<p className={'input-Kariu--description '+css(styleDescription)}>{`${this.props.description} ${this.state.value}`}</p>)
		} else if (this.props.required) {
			return (<p className={'input-Kariu--description '+css({color: 'red'})}>{this.props.description ? this.props.description : 'Required'}</p>)
		} else {
			return (<p className={'input-Kariu--description '+css(styleDescription)}>{this.props.description}</p>)
		}
	}
	// Listeners ----------------------------------------------------------------
	toggleShow = () => {
		this.setState({ type: this.state.type === 'text' ? 'password' : 'text' })
	}

	handleDelete = () => {
		this.setState({ value: '' }, () => {
			this.props.onChange && this.props.onChange(this.state.value)
		})
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value }, () => {
			this.props.onChange && this.props.onChange(this.state.value)
		})
	}
}

// Définition des propTypes------------------------------------------------------
Input.propTypes = {
	backgroundColor: PropTypes.string,
	borderColor: PropTypes.string,
	value: PropTypes.string,
	autocomplete: PropTypes.oneOf(['on', 'off']),
	type: PropTypes.oneOf([
		'text',
		'tel',
		'password',
		'color',
		'email',
		'file',
		'hidden',
		'number',
		'range',
		'url',
		'date',
		'month',
		'search']),
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	description: PropTypes.string,
	placeholder: PropTypes.string,
	icon: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	textColor: PropTypes.string,
	onChange: PropTypes.func
}

Input.defaultProps = {
	autocomplete: 'off',
	type: 'text',
	description: null,
	size: 'medium',
	value: '',
	label: 'Label'
}

export default Input

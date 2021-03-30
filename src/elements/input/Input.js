import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from '../../index.js'
import './../reset.css'
import './input.css'

class Input extends React.Component {
	// Constructor -------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			label: (props.label ? props.label : 'label'),
			value: (props.value ? props.value : ''),
			type: (props.type ? props.type : 'text'),
			isPassword: (props.type === 'password')
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value !== this.props.value ||
		prevProps.label !== this.props.label) {
			this.setState({ value: this.props.value, label: this.props.label })
		}
	}

	// Renderers ----------------------------------------------------------------
	render() {
		return (
			<div className={'input-kariu--wrapper'}>
				{this.renderLabel()}
				<input className={'input-kariu'} style={{color: this.props.textColor, borderColor: this.props.borderColor,  backgroundColor: this.props.backgroundColor}}
					type={this.state.type}
					name={this.props.name}
					value={this.state.value}
					onChange={this.handleChange.bind(this)}
					placeholder={this.props.placeholder}
					required={this.props.required}
					disabled={this.props.disabled}
					>{this.renderBtnShowPwd()}</input>
			</div>
		)
	}

	renderLabel() {
		if (!this.props.label) return null
		return (
			<label for={this.props.name} className={'input-kariu--label'}>{this.props.label}</label>
		)
	}

	renderBtnShowPwd() {
		if (!this.state.value.length) return null
		
		if (this.state.isPassword) {
			if (this.state.type === 'password') {
				return (
					<button type='button' className={'button-eye-kariu'} onClick={this.toggleShow.bind(this)}>
						<Icon icon='eyeOpen'
							color={this.props.textColor}
							className={icon}/>
					</button>
				)
			} else {
				return (
					<button type='button' className={'button-eye-kariu'} onClick={this.toggleShow.bind(this)}>
						<Icon icon='eyeSlashed'
							color={this.props.textColor}
							className={icon}/>
					</button>
				)
			}
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
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	description: PropTypes.string,
	icon: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	textColor: PropTypes.string,
	onChange: PropTypes.func
}

Input.defaultProps = {
	type: 'text',
	size: 'medium',
	label: 'label'
}

export default Input

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from './../../index.js'
import { css } from '@emotion/css'
import './../reset.css'
import './input.css'


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
		let colors = {
			color: colorText,
			borderColor: (this.props.borderColor ? this.props.borderColor : '#bfbfbf'),
			backgroundColor: (this.props.backgroundColor ? this.props.backgroundColor : '#eeeeee')
		}

		return (
			<div className={'input-kariu--wrapper'}>
				{this.renderLabel(colorText)}
				<input className={'input-kariu '+css(colors)}
					type={this.state.type}
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
			if (this.state.type === 'password') {
				return (
					<Button
						icon='eyeOpen'
						size='small'
						shape='round'
						backgroundColor='transparent'
						textColor={colorText}
						className={'button-eye-kariu'}
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
						className={'button-eye-kariu'}
						onClick={this.toggleShow.bind(this)}/>
				)
			}
		} else return null
	}

	renderDescription(colorText) {
		let color = { color: colorText }
		if (this.state.type === 'range') {
			return (<p className={'input-Kariu--description '+css(color)}>{`${this.props.text} ${this.state.value}`}</p>)
		} else if (this.props.required) {
			return (<p className={'input-Kariu--description '+css({color: 'red'})}>{this.props.description ? this.props.description : 'Required'}</p>)
		} else {
			return (<p className={'input-Kariu--description '+css(color)}>{this.props.description}</p>)
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
	desciption: PropTypes.string,
	placeholder: PropTypes.string,
	icon: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	textColor: PropTypes.string,
	onChange: PropTypes.func
}

Input.defaultProps = {
	type: 'text',
	text:'Value:',
	size: 'medium',
	value: '',
	label: 'Label'
}

export default Input

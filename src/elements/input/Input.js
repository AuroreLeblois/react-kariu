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
		let colors = {
			color: this.props.textColor,
			borderColor: this.props.borderColor,
			backgroundColor: this.props.backgroundColor
		}

		return (
			<div className={'input-kariu--wrapper'}>
				{this.renderLabel()}
				<input className={'input-kariu '+css(colors)}
					type={this.state.type}
					name={this.props.name}
					value={this.state.value}
					onChange={this.handleChange.bind(this)}
					placeholder={this.props.placeholder}
					required={this.props.required}
					disabled={this.props.disabled}
					/>
					{this.renderBtnShowPwd()}
					{this.renderBtnSearch()}
					{this.renderDescription()}
			</div>
		)
	}

	renderLabel() {
		if (!this.props.label) return null

		let color = {color: this.props.textColor}
		return (
			<label htmlFor={this.props.name} className={'input-kariu--label '+css(color)}>{this.props.label}</label>
		)
	}

	renderBtnShowPwd() {
		if (this.state.isPassword) {
			if (this.state.type === 'password') {
				return (
					<Button
						icon='eyeOpen'
						size='small'
						shape='round'
						backgroundColor='transparent'
						textColor='inherit'
						className={'button-eye-kariu'}
						onClick={this.toggleShow.bind(this)}/>

				)
			} else {
				return (
					<Button
						icon='eyeSlashed'
						size='small'
						backgroundColor='transparent'
						textColor='inherit'
						shape='round'
						className={'button-eye-kariu'}
						onClick={this.toggleShow.bind(this)}/>
				)
			}
		} else return null
	}

	renderBtnSearch() {
		if (this.state.isSearch) {
			return (
				<Button
					icon='search'
					size='small'
					shape='round'
					backgroundColor='transparent'
					textColor='inherit'
					className={'button-eye-kariu'}
					onClick={this.props.onClick}/>

			)
		} else return null
	}

	renderDescription() {
		if (this.state.type === 'range') {
			return (<p className='input-Kariu--description'>{`${this.props.text} ${this.state.value}`}</p>)
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
	type: PropTypes.oneOf(['text',
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

import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../index.js'
import './../reset.css'
import './../input/input.css'

class DatePicker extends React.Component {
	// Constructor -------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			label: (props.label ? props.label : 'Label'),
			value: (props.value ? props.value : '')
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value !== this.props.value ||
			prevProps.label !== this.props.label) {
				this.setState({
					value: this.props.value,
					label: this.props.label
				})
		}
	}

	// Renderers ----------------------------------------------------------------
	render() {
		if (!this.state.value || !this.props.id) return null
		return (
			<div className='input-kariu--wrapper'>
			{this.renderLabel()}
				<input
					className={'input-kariu '+this.props.className}
					onChange={(value)=> this.handleChange(value)}
					type="date" id={this.props.id} name={this.props.name}
					value={this.state.value}
					min={this.props.minValue ? this.props.minValue : '01/01/0000'}
					max={this.props.maxValue ? this.props.maxValue : '12/12/3000'}/>
			</div>
		)
	}

	renderLabel() {
		if (!this.state.label || !this.props.id) return null
		return (
			<label className={'label'} for={this.props.id}>{this.state.label}</label>
		)
	}


	// Listeners ----------------------------------------------------------------
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
DatePicker.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	icon: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func
}

DatePicker.defaultProps = {
	id: 'default',
	label: 'Label',
	name: 'pickerName'
}

export default DatePicker

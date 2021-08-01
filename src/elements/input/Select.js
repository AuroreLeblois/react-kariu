import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'


class Option extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelected: props.selected ? props.selected : false
		}
	}

	render () {
		if (!this.props.text) return null
		let text = this.capitalize(this.props.text)

		let optionStyle = {
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			color: this.props.textColor ? this.props.textColor : 'tomato',
			minHeight:'2rem',
			fontFamily: 'inherit'
		}

		return (
			<option
				className={`select-kariu--option ${css(optionStyle)} ${this.props.className}`}
				value={this.props.value}>{text}
			</option>
		)
	}

	capitalize(s) {
		return s[0].toUpperCase() + s.slice(1)
	}
}

class Select extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			options: (props.options ? props.options : []),
			value: undefined,
			loading: (props.loading ? props.loading : false)
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.options !== this.props.options ||
		prevProps.value !== this.props.value) {
				this.setState({
					options: this.props.options,
					value: this.props.value
				})
		}
	}

	render () {
		if (!this.state.options) return null
		let color = this.props.backgroundColorSelected ? this.props.backgroundColorSelected : 'lightgrey'
		let styleSelect = {
			display: 'flex',
			flexDirection: 'column',
			borderRadius: '0.5rem',
			color: this.props.textColor ? this.props.textColor : 'tomato',
			'label':{
				marginBottom: '.5rem'
			},
			'select': {
				height: '2rem',
				borderRadius: '.5rem',
				maxWidth: '15rem',
				minWidth: '8rem',
				backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
				color: this.props.textColor ? this.props.textColor : 'tomato'
			},
			'&:focus':{
				borderRadius: '.5rem',
			}
		}
		let styleNoData = {
			height: '2rem',
			borderRadius: '.5rem',
			maxWidth: '15rem',
			minWidth: '8rem',
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			color: this.props.textColor ? this.props.textColor : 'tomato'
		}

		if (this.props.loading) return (
			<div className={`select-kariu--wrapper ${css(styleSelect)}`}>
				{this.renderLabel()}
				<select className={`select-kariu--noData ${css(styleNoData)}`} disabled={true} name={this.props.name} id={this.props.idSelect}>
					<Option
						backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'inherit'}
						textColor={this.props.textColor ? this.props.textColor : 'inherit'}
						value={''}
						text={this.props.textLoading ? this.props.textLoading : 'Loading...'}/>
				</select>
			</div>
		)

		if (!this.state.options.length) {
			return (
				<select className={`select-kariu--noData ${css(styleNoData)}`} disabled={true} name={this.props.name} id={this.props.idSelect}>
					<Option
						backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'inherit'}
						textColor={this.props.textColor ? this.props.textColor : 'inherit'}
						value={''}
						text={this.props.textNoData ? this.props.textNoData : 'No data'}/>
				</select>
			)
		}

		let options = []
		let index = 0
		for (let option of this.state.options) {
			let style= { backgroundColor: this.state.value === option.value ? color : 'inherit' }

			options.push(
				<Option
					onClick={this.handleChange}
					key={index}
					backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'inherit'}
					textColor={this.props.textColor ? this.props.textColor : 'inherit'}
					className={css(style)}
					value={option.value}
					text={option.text}
				/>
			)
			index++
		}

		return (
			<div className={`select-kariu--wrapper ${css(styleSelect)}`}>
			{this.renderLabel()}
			<select
				mutiple={this.props.multiple}
				value={this.state.value}
				name={this.props.name}
				onChange={this.handleChange}
				id={this.props.idSelect}>{options}</select>
			</div>
		)
	}

	renderLabel () {
		if (!this.props.label) return null
		let text = this.props.loading ? this.props.textLoadingLabel : this.props.label

		return <label className={`select-kariu--label`} htmlFor={this.props.idSelect}>{text}</label>
	}

	handleChange(event) {
		this.setState({value: event.target.value})
		this.props.onChange && this.props.onChange(this.state.value)
	}
}

Select.propTypes = {
	backgroundColor: PropTypes.string,
	backgroundColorSelected: PropTypes.string,
	name: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	idSelect: PropTypes.string.isRequired,
	textColor: PropTypes.string,
	options: PropTypes.array.isRequired,
	textNoData: PropTypes.string,
	textLoading: PropTypes.string,
	textLoadingLabel: PropTypes.string,
	multiple: PropTypes.bool
}

export default Select

import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import { ListItem, Text } from './../../index.js'


class List extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			options: (props.options ? props.options : []),
			value: undefined,
			loading: (props.loading ? props.loading : false),
			show: (props.show ? props.show : false)
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.options !== this.props.options ||
			prevProps.value !== this.props.value ||
			prevProps.show !== this.props.show) {
				this.setState({
					options: this.props.options,
					value: this.props.value,
					show: this.props.show
				})
		}
	}

	render () {
		if (!this.state.show || this.state.loading) return null
		let options = []
		let index = 0
		let listStyle = {
			borderRadius: '5px',
			webkitBoxShadow: '1px 1px 2px 1px #C7C7C7',
			boxShadow: '1px 1px 2px 1px #C7C7C7',
			width: 'fit-content',
			marginTop: '0.2rem',
			marginBottom: '0.2rem'
		}
		let color = this.props.backgroundColorSelected ? this.props.backgroundColorSelected : 'lightgrey'

		if (!this.state.options.length) {
			options.push(
				<ListItem
					key={index}
					variant='noData'
					backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'inherit'}
					backgroundColorSelected={this.props.backgroundColorSelected ? this.props.backgroundColorSelected : 'lightgrey'}
					textColor={this.props.textColor ? this.props.textColor : 'inherit'}
					textNoData={this.props.textNoData ? this.props.textNoData : 'No data'}
				/>
			)
		}
		if (this.state.options.length) {
			for (let option of this.state.options) {
				let style= { backgroundColor: this.state.value === option.value ? color : 'inherit' }

				options.push(
					<ListItem
						onClick={option.onClick}
						key={index}
						variant={option.description ? 'description' : 'default'}
						backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'inherit'}
						backgroundColorSelected={this.props.backgroundColorSelected ? this.props.backgroundColorSelected : 'lightgrey'}
						textColor={this.props.textColor ? this.props.textColor : 'inherit'}
						className={css(style)}
						text={option.text}
						description={option.description}
					/>
				)
				index++
			}
		}

		return (
			<ul className={`dropdown-kariu--wrapper ${css(listStyle)} ${this.props.className}`}
				onClick={this.handleChange}
				id={this.props.idSelect}>
				{options}
			</ul>
		)
	}

	handleChange(event) {
		this.setState({value: event.target.value})
		this.props.onChange && this.props.onChange(this.state.value)
	}
}

List.propTypes = {
	show: PropTypes.bool,
	backgroundColor: PropTypes.string,
	backgroundColorSelected: PropTypes.string,
	name: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	textNoData: PropTypes.string,
	idSelect: PropTypes.string.isRequired,
	textColor: PropTypes.string,
}
export default List

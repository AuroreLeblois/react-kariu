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
			optionsSelected: props.optionsSelected ? props.optionsSelected : [],
			loading: (props.loading ? props.loading : false),
			show: (props.show ? props.show : false)
		}
		this.handleChange = this.handleChange.bind(this);
		this.optionsSelected = [...this.state.optionsSelected]
	}

	componentDidUpdate(prevProps) {
		if (prevProps.options !== this.props.options ||
			prevProps.optionsSelected !== this.props.optionsSelected ||
			prevProps.show !== this.props.show) {
				this.setState({
					options: this.props.options,
					optionsSelected: this.props.optionsSelected,
					show: this.props.show
				}, ()=>this.optionsSelected = [...this.state.optionsSelected])

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
				let style= { backgroundColor: this.state.optionsSelected === option.text ? color : 'inherit' }

				options.push(
					<ListItem
						onClick={option.onClick}
						key={index}
						onSelect={(data)=>this.handleChange(data)}
						backgroundColorChecked={this.props.backgroundColorChecked ? this.props.backgroundColorChecked : 'tomato'}
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
			<ul className={`droplist-kariu--wrapper ${css(listStyle)} ${this.props.className}`}
				id={this.props.idSelect}
				onChange={this.props.onChange}>
				{options}
			</ul>
		)
	}

	handleChange(data) {
		if (this.optionsSelected.includes(data)) this.optionsSelected = this.optionsSelected.filter(e => e !== data) // will return [remains]
		else this.optionsSelected.push(data)
		if (data !== event.target) this.setState({optionsSelected: this.optionsSelected})
		this.props.onChange && this.props.onChange(this.state.optionsSelected)
	}
}

List.propTypes = {
	show: PropTypes.bool,
	optionsSelected: PropTypes.array,
	backgroundColor: PropTypes.string,
	backgroundColorSelected: PropTypes.string,
	backgroundColorChecked: PropTypes.string,
	textNoData: PropTypes.string,
	textColor: PropTypes.string,
}
export default List

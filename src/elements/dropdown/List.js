import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import { ListItem } from './../../index.js'


class List extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			optionsSelected: props.optionsSelected ? props.optionsSelected : [],
			loading: (props.loading ? props.loading : false),
			show: (props.show ? props.show : false),
			options: (props.options ? props.options : [])
		}
		this.handleChange = this.handleChange.bind(this);
		this.optionsSelected = []
	}

	componentDidMount() {
		this.optionsSelected = [...this.state.optionsSelected]
	}

	componentDidUpdate(prevProps) {
		if ( prevProps.optionsSelected !== this.props.optionsSelected ||
			prevProps.show !== this.props.show ||
			prevProps.options !== this.props.options) {
				this.setState({
					optionsSelected: this.props.optionsSelected,
					show: this.props.show,
					options: this.props.options
				})
				this.optionsSelected = []
		}
	}

	render () {
		if (!this.state && this.state.loading) return null

		let options = []
		let index = 0

		let listStyle = {
			display: 'flex',
			flexDirection: 'column',
			visibility: this.state.show ? 'visible' : 'hidden',
			flexFlow: 'column nowrap',
			borderRadius: '5px',
			webkitBoxShadow: '1px 1px 2px 1px #C7C7C7',
			boxShadow: '1px 1px 2px 1px #C7C7C7',
			width: 'fit-content',
			height: 'fit-content',
			overflowY: 'visible',
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			zIndex: 1000,
			minHeight: '1.8rem',
			marginTop: '0.2rem',
			marginBottom: '0.2rem'
		}


		if (!this.state.options || !this.state.options.length) {
			options.push(
				<ListItem
					key={index}
					backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'inherit'}
					textColor={this.props.textColor ? this.props.textColor : 'inherit'}
					textNoData={this.props.textNoData ? this.props.textNoData : 'No data'}
				/>
			)
		} else if (this.state.options && this.state.options.length) {
			for (let option of this.state.options) {
				let style = { backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white'}

				options.push(
					<ListItem
						onClick={option.onClick}
						key={index}
						isSelected={this.optionsSelected.includes(this.text)}
						onSelect={(data)=>this.handleChange(data)}
						checkbox={this.props.checkbox ? this.props.checkbox : false}
						id={option.text}
						backgroundColorChecked={this.props.backgroundColorChecked ? this.props.backgroundColorChecked : 'tomato'}
						option={option}
						backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'inherit'}
						textColor={this.props.textColor ? this.props.textColor : 'inherit'}
						className={css(style)+' '+this.props.className}
					/>
				)
				index++
			}
		}

		return (
			<ul className={`droplist-kariu--wrapper ${css(listStyle)} ${this.props.className}`}
				onChange={this.props.onChange}>
				{options}
			</ul>
		)
	}

	handleChange(data) {
		if (this.optionsSelected.includes(data)) this.optionsSelected = this.optionsSelected.filter(e => e !== data) // will return [remains]
		else this.optionsSelected.push(data)
		if (data !== event.target) this.setState({optionsSelected: this.optionsSelected}, () => {
			this.props.onChange && this.props.onChange(this.state.optionsSelected)
		})

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
	checkbox: PropTypes.bool
}
export default List

import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
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
		this.number = 0
		this.numberOfOptions = 0
	}

	componentDidMount() {
		this.optionsSelected = [...this.state.optionsSelected]
		for (let i=0; i < this.state.options.length; i++) {
			let data= this.state.options[i]
			if ((data.checked=== true || data.checked === false) && this.props.checkbox) this.numberOfOptions ++
			if (data.checked === true) this.number++
			else null
		}
	}

	componentDidUpdate(prevProps) {
		if ( prevProps.optionsSelected !== this.props.optionsSelected ||
			prevProps.show !== this.props.show ||
			prevProps.options !== this.props.options ||
			prevProps.textSelectAll !== this.props.textSelectAll ||
			prevProps.textUnselectAll !== this.props.textUnselectAll) {
				this.setState({
					optionsSelected: this.props.optionsSelected,
					show: this.props.show,
					options: this.props.options,
					textSelectAll: this.props.textSelectAll,
					textUnselectAll: this.props.textUnselectAll
				})
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
			width: '100%',
			height: 'fit-content',
			overflowY: 'visible',
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit',
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			zIndex: this.state.show ? 1000: -1000,
			minHeight: '1.8rem',
			marginTop: '0.2rem',
			marginBottom: '0.2rem',
			paddingInlineStart: 0
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
			if (this.props.checkbox===true) {
				options.push(
					<ListItem
						key='select'
						number={this.number}
						onSelectAll={(data)=>this.selectAll(data)}
						textSelectAll={this.props.textSelectAll}
						textUnselectAll={this.props.textUnselectAll}
						numberOfOptions={this.numberOfOptions}/>)
			}
			for (let option of this.state.options) {
				let style = { backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white'}
				options.push(
					<ListItem
						fontFamily={this.props.fontFamily}
						onClick={option.onClick}
						key={index}
						isSearch={this.props.isSearch}
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
		if (this.optionsSelected.includes(data)) {
			this.optionsSelected = this.optionsSelected.filter(e => e !== data)
		} else {
			this.optionsSelected.push(data)
		}
		this.number = this.optionsSelected.length
		if (data !== event.target) this.setState({optionsSelected: this.optionsSelected}, () => {
			this.props.onSelect && this.props.onSelect(this.optionsSelected)
		})
	}

	selectAll(data) {
		let optionsSelected = []
		let options = []
		if (data === this.props.textSelectAll) {
			for (let i=0; i < this.state.options.length; i++) {
				let data = this.state.options[i]
				data.checked = true
				optionsSelected.push(data)
				options.push(data)
			}
		} else if (data === this.props.textUnselectAll) {
			for (let i=0; i < this.state.options.length; i++) {
				let data = this.state.options[i]
				if (data.checked === true){
					data.checked = false
				}
				options.push(data)
			}
		}
	;
		this.optionsSelected = optionsSelected
		this.number = optionsSelected.length
		this.setState({optionsSelected: this.optionsSelected, options: options}, ()=>
		this.props.onSelect && this.props.onSelect(this.optionsSelected)
		)
	}
}

List.propTypes = {
	show: PropTypes.bool,
	fontFamily: PropTypes.string,
	optionsSelected: PropTypes.array,
	backgroundColor: PropTypes.string,
	backgroundColorSelected: PropTypes.string,
	backgroundColorChecked: PropTypes.string,
	textNoData: PropTypes.string,
	textColor: PropTypes.string,
	checkbox: PropTypes.bool
}
export default List

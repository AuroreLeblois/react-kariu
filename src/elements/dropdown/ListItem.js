import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import { Checkbox, Text } from './../../index.js'

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelected: (props.selected ? props.selected : false),
			variant: (props.variant ? props.variant : 'default')
		}
		this.text = null
		this.description = null
		this.textNoData = null
	}


	render () {
		if (this.props.text) this.text = this.capitalize(this.props.text)
		if (this.props.description) this.description = this.capitalize(this.props.description)
		if (this.props.textNoData) this.textNoData = this.capitalize(this.props.textNoData)
		let color = this.handleBackgroundColor()

		let optionStyle = {
			display: 'flex',
			cursor: 'pointer',
			width: '100%',
			backgroundColor: color,
			color: this.props.textColor ? this.props.textColor : 'tomato',
			minHeight:'1.8rem',
			fontFamily: 'inherit',
			'input':{
				cursor: 'pointer'
			},
			'label': {
				cursor: 'pointer'
			},
			'p':{
				cursor: 'default',
				marginBottom: 0,
				marginTop: 0,
				maxWidth: '10rem'
			}
		}
		let liStyle = {
			lineHeight: '1.5rem',
			display: 'flex',
			width: '100%',
			margin:'.5rem',
			fontFamily: 'inherit',
			textAlign: 'center',
			verticalAlign: 'middle'
		}
		switch (this.state.variant) {
			case 'description':
				return (
					<div className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`}>
						<li className={css(liStyle)}>
							<Text variant='description' text={this.description}/>
						</li>
					</div>
				);
				case 'noData':
				return (
					<div className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`}>
						<li className={css(liStyle)}>
							<Text variant='disabled' cursor='default' textColor='inherit' text={this.textNoData}/>
						</li>
					</div>
				);
			default :
				return (
					<div onClick={()=>this.handleClick(event)} className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`} onClick={this.handleClick}>
						<li className={css(liStyle)}>
							<Checkbox
								backgroundColorChecked={this.props.backgroundColorChecked ? this.props.backgroundColorChecked : 'tomato'}
								onChange={()=>this.handleClick(event) && this.props.onChange}
								checked={this.state.isSelected}
								id={this.text}/>
						</li>
					</div>
				);
		}

	}

	capitalize(s) {
		return s[0].toUpperCase() + s.slice(1)
	}

	handleClick = (event) => {
		if (event) this.setState({ isSelected: !this.state.isSelected },
			()=>{
				this.props.onSelect && this.props.onSelect(this.text)
			}
		)
	}

	handleBackgroundColor() {
		let color = this.props.backgroundColorSelected ? this.props.backgroundColorSelected : 'lightgrey'
		let backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'white'
		if (!this.state.isSelected) return backgroundColor
		else return color
	}
}
export default ListItem

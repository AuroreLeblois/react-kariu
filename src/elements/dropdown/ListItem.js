import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelected: props.selected ? props.selected : false
		}
	}

	render () {
		if (!this.props.text) return null
		let text = this.capitalize(this.props.text)
		let color = this.handleBackgroundColor()

		let optionStyle = {
			display: 'flex',
			cursor: 'pointer',
			width: '100%',
			backgroundColor: color,
			color: this.props.textColor ? this.props.textColor : 'tomato',
			minHeight:'1.8rem',
			fontFamily: 'inherit'
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

		return (
			<div className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`} onClick={this.handleClick}>
				<li className={css(liStyle)}>
					{text}
				</li>
			</div>
		)
	}

	capitalize(s) {
		return s[0].toUpperCase() + s.slice(1)
	}

	handleClick = () => {
		this.setState({ isSelected: !this.state.isSelected})
	}

	handleBackgroundColor() {
		let color = this.props.backgroundColorSelected ? this.props.backgroundColorSelected : 'lightgrey'
		let backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'white'
		if (!this.state.isSelected) return backgroundColor
		else return color
	}
}
export default ListItem

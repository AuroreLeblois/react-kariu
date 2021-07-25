import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import './nav.css'

class NavItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		if (!this.props.option) return null
		let colorText =  this.props.textColor ? this.props.textColor : 'inherit'
		if (this.props.option.disabled) colorText = 'darkgrey'

		let color = {
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'inherit',
			color: colorText
		}
		let disabled = this.props.option.disabled ? 'disabled' : ''

		return (
			<div className={'link'+ (this.props.className ? this.props.className : '')} onClick = {(e)=>this.handleClick(this.props.option, e)}>
			<a className={css(color)+' '+disabled+ ' ' +this.props.className}
				key={this.props.option.label+ ' '+this.props.option.href}
				href={this.props.option.href}
			>
				{this.props.option.label ? this.props.option.label : this.props.option.icon}
			</a>
			</div>
		 )
	}

	handleClick = (option, e) => {
		e.preventDefault();
		if (option.disabled) {
			return null
		}
		this.props.onClick()
	}
}

export default NavItem

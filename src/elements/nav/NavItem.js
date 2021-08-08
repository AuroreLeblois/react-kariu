import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Link } from '../../index.js'


class NavItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		if (!this.props.option) return null
		let colorText =  this.props.textColor ? this.props.textColor : 'inherit'

		let linkWrapper = {
			display: 'flex',
			color: colorText,
			marginRight: '1rem',
			marginLeft:'1rem',
			overflowWrap: 'break-word',
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit',
			':hover':{
				filter: 'brightness(100%)'
			}
		}

		return (
			<div className={'link'+' '+css(linkWrapper)+' '+(this.props.className ? this.props.className : '')} onClick= {(e)=>this.handleClick(this.props.option, e)}>
			<Link
				fontFamily={this.props.fontFamily}
				textColor
				key={this.props.option.label+ ' '+this.props.option.href}
				href={this.props.option.href}
				text={this.props.option.label ? this.props.option.label : this.props.option.icon || ''}
				isExternal={this.props.option.isExternal}/>
			</div>
		 )
	}

	handleClick = (option, e) => {
		this.props.onClick && this.props.onClick()
	}
}

export default NavItem

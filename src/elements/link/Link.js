import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Icon } from './../../index.js'

class Link extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			wasClicked: props.wasClicked ? props.wasClicked : false
		}
	}

	render () {
		if (!this.props.href || !this.props.text) return null

		let linkStyle = {
			display: 'flex',
			cursor: 'pointer',
			whiteSpace: 'nowrap',
			fontWeight: 'bold',
			textDecoration: 'none',
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit',
			color: this.props.textColor ? this.props.textColor : '#3c89D0',
			'svg': { marginLeft: '6px' },
			'&:hover': {
				textDecoration: 'underline'
			},
			':visited': {
				filter: 'brightness(40%)'
			}
		}

		return (
			<div onClick={()=>this.handleClick()}>
				<a className={css(linkStyle)+' link-kariu'}>
					{this.props.text}
					{this.renderIconExternal()}
				</a>
			</div>
		)
	}

	renderIconExternal() {
		if (!this.props.isExternal) return null

		return <Icon icon='external' color={this.props.textColor ? this.props.textColor : '#3c89D0'}/>
	}

	handleClick() {
		if (this.props.isExternal) window.open(this.props.href)
		else window.location.href = this.props.href
	}
}

Link.propTypes = {
	fontFamily: PropTypes.string,
	textColor: PropTypes.string,
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	isExternal: PropTypes.bool
}

export default Link

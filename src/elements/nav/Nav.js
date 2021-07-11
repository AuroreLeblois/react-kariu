import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { SideBar } from './../../index.js'

class Nav extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidUpdate(prevProps) {
	}

	render() {
		if (window.width < 600) return null

		let backgroundColor = {
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white'
		}

		return (
		<div key='sidenav-wrapper-kariu' className={'sidenav-kariu '+ css(backgroundColor)}>
			{this.renderOptions()}
		</div>
		 )
	}

	renderOptions() {
		let options = []

		let textColor = {
			textColor: this.props.textColor ? this.props.textColor : 'purple'
		}
		for (let option of this.state.options) {
			let link = <a className={'link '+css(textColor)} key={option.label} href={option.href}>{option.label ? option.label : option.icon}</a>
			options.push(link)
		}
		return [ options ]
	}
}
export default Nav

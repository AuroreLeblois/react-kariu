import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import './sidenav.css'

class SideBar extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			options: (props.options ? props.options : [])
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.options !== this.props.options) {
			this.setState({ options: this.props.options })
		}
	}

	render() {
		if (!this.state.options.length) return null

		let backgroundColor = {
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'lightgrey'
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
			textColor: this.props.textColor ? this.props.textColor : 'inherit'
		}

		for (let option of this.state.options) {
			let link = <a className={'link '+css(textColor)} key={option.label} href={option.href}>{option.label ? option.label : option.icon}</a>
			options.push(link)
		}
		return[ options ]
	}
}
export default SideBar

import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import './nav.css'
import { NavItem } from './../../index.js'

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
		if (window.width < 600) return null

		let color = {
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			color: this.props.textColor ? this.props.textColor : 'tomato'
		}

		return (
		<div key='sidenav-wrapper-kariu' className={'sidenav-kariu '+ css(color)}>
			{this.renderOptions()}
		</div>
		 )
	}

	renderOptions() {
		let options = []

		for (let option of this.state.options) {
			let topLink = (this.state.options[0] === option ? ' topLink': null)
			console.log(topLink);
			let link = <NavItem
				option={option}
				textColor={'inherit'}
				backgroundColor={'inherit'}
				className={(topLink ? topLink: null)}/>
			options.push(link)
		}
		return [ options ]
	}
}
export default SideBar

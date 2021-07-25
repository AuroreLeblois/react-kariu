import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import { Button, NavItem } from './../../index.js'
import './nav.css'

class SideBar extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			options: (props.options ? props.options : []),
			show: (props.show ? props.show : (window.innerWidth > 600))
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.options !== this.props.options) {
			this.setState({ options: this.props.options })
		}
	}

	render() {
		if (!this.state.options.length) return null

		let color = {
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			color: this.props.textColor ? this.props.textColor : 'tomato'
		}

		return (
			<>
			{this.renderNavSide(color)}
			{this.renderCollapseBtn(color)}
			</>
		)
	}

	renderNavSide(color) {
		if (!this.state.show) return null

		return (
			<nav key='sidenav-wrapper-kariu' className={'sidenav-kariu '+ css(color)}>
				{this.renderOptions(color)}
			</nav>
		)
	}

	renderOptions(color) {
		let options = []

		for (let option of this.state.options) {
			let topLink = (this.state.options[0] === option ? ' topLink': null)
			let colorText = option.disabled ? 'darkgrey' : color.color
			let link = <NavItem
				option={option}
				textColor={colorText}
				backgroundColor={'inherit'}
				className={(topLink ? topLink: null)}/>
			options.push(link)
		}
		return [ options ]
	}

	renderCollapseBtn(color) {
		if (!this.props.btnCollapse) return null

		let tooltip = this.state.show ? this.props.tooltipMessageHide : this.props.tooltipMessageShow
		return <Button
			className='kariu-collapseBtn'
			onClick={() => {this.setState({show: !this.state.show})}}
			shape='round'
			icon={'hamburgerMenu'}
			tooltip={tooltip}
			textColor={this.props.textColor? this.props.textColor :'tomato'}
			backgroundColor={color.backgroundColor}/>
	}
}

SideBar.propTypes = {
	options: PropTypes.array.isRequired,
	backgroundColor: PropTypes.string,
	textColor:  PropTypes.string,
	btnCollapse: PropTypes.bool,
	tooltipMessageShow: PropTypes.string,
	tooltipMessageHide: PropTypes.string
}

SideBar.defaultProps = {
	btnCollapse: true,
	tooltipMessageShow:'Show me the nav',
	tooltipMessageHide: 'Hide the nav'
}
export default SideBar

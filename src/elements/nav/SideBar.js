import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import { Button, NavItem } from './../../index.js'

class SideBar extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			options: (props.options ? props.options : []),
			show: (props.show ? props.show : (window.innerWidth > 600))
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.options !== this.props.options ||
			prevProps.show !== this.props.show) {
			this.setState({
				options: this.props.options,
				show: this.props.show
			})
		}
	}

	render() {
		if (!this.state.options.length) return null

		let sideBarStyle = {
			position: 'absolute',
			top:0,
			left:0,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			/* justify-content: center; */
			flexFlow: 'column nowrap',
			cursor: 'default',
			height: '100%',
			'-webkit-box-shadow': '1px 2px 2px 1px #E6E6E6',
			boxShadow: '1px 2px 2px 1px #E6E6E6',
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			color: this.props.textColor ? this.props.textColor : 'tomato',
			"@media screen and (max-width: 640px)": { minWidth: '200px' },
			'@media screen and (min-width: 640px) and (max-width: 850px)': { minWidth:' 25%' },
			'@media screen and (min-width: 850px)': {
			  	minWidth: '20%',
				maxWidth: '250px'
			},
			'div:first-of-type': {
				marginTop: '4rem'
			}
		}

		return (
			<>
			{this.renderNavSide(sideBarStyle)}
			{this.renderCollapseBtn(sideBarStyle)}
			</>
		)
	}

	renderNavSide(color) {
		if (!this.state.show) return null

		return (
			<nav key='sidenav-wrapper-kariu' className={'sidenav-kariu '+ css(color)+' '+this.props.className}>
				{this.renderOptions(color)}
			</nav>
		)
	}

	renderOptions(color) {
		let options = []

		for (let option of this.state.options) {
			let topLinkStyle = { marginTop : (this.state.options[0] === option ? '4rem' : null)}
			let colorText = option.disabled ? 'darkgrey' : color.color
			let link = <NavItem
				option={option}
				textColor={colorText}
				backgroundColor={'inherit'}
				className={css(topLinkStyle)}/>
			options.push(link)
		}
		return [ options ]
	}

	renderCollapseBtn(color) {
		if (!this.props.btnCollapse) return null

		let tooltip = this.state.show ? this.props.tooltipMessageHide : this.props.tooltipMessageShow

		const styleBtn = {
			position: 'absolute',
			top:0,
			left:0
		}

		return <Button
			className={'kariu-collapseBtn '+css(styleBtn)}
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
	tooltipMessageHide: PropTypes.string,
	show: PropTypes.bool
}

SideBar.defaultProps = {
	btnCollapse: true,
	tooltipMessageShow:'Show me the nav',
	tooltipMessageHide: 'Hide the nav'
}
export default SideBar

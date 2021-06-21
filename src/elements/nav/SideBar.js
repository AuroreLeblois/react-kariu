import React from 'react'
import PropTypes from 'prop-types'
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
		return (
		<div style={{ backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'lightgrey'}} key='sidenav-wrapper-kariu' className={'sidenav-kariu'}>
			{this.renderOptions()}
		</div>
		 )
	}

	renderOptions() {
		let options = []

		for (let option of this.state.options) {
			let link = <a className='link' style={{
				textColor: this.props.textColor ? this.props.textColor : 'inherit'}} key={option.label} href={option.href}>{option.label ? option.label : option.icon}</a>
			options.push(link)
		}
		return[ options ]
	}
}
export default SideBar

import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'

class NavBar extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)
		this.state = {
			position: this.props.position ? this.props.position : 'top'
		}
		this._isMounted = false
		this.pos = {}
	}

	componentDidMount() {
		this._isMounted = true
	 }

	componentDidUpdate(prevProps) {
		if (this.props.position !== prevProps.position) {
			this.setState({ position: this.props.position })
		}
	}

	componentWillUnmount() { this._isMounted = false }

	// Renderers ----------------------------------------------------------------
	render() {
		if (!this.props.children) return null

		switch (this.state.position) {
			case 'top':
			this.pos.top = 0
			this.pos.bottom= null
			break;
			case 'bottom':
			this.pos.top = null
			this.pos.bottom = 0
			break;
		}

		const styleNavBar = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			position: 'absolute',
			left: 0,
			right:0,
			...this.pos,
			paddingLeft: '2.25rem',
			borderStyle: 'solid',
			borderBottomWidth: '.025rem',
			zIndex: '4',
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit',
			color: this.props.textColor ? this.props.textColor : 'tomato',
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			boxShadow: (this.state.position === 'top' ? '0px 1px 2px 0px rgba(0,0,0,0.082)': '-3px -1px 0px 0px rgba(0,0,0,0.082)'),
			borderBottomColor: 'lightgrey',

		}

		if (window.width < 500) { this.pos = { bottom: 8 } }
		const styleBreakpoint = {
			':after': {
				display: 'flex',
				...this.pos,
				marginLeft: 0,
				textAlign: 'right',
				fontFamily: 'Ubuntu',
				alignItems: 'center'
			}
		}

		switch (this.state.position) {
			case 'top':
			return (
				<header>
					<nav className={css(styleNavBar)+' navBar-kariu '+css(styleBreakpoint)} >
						{[this.props.children]}
					</nav>
				</header>
			)
			case 'bottom':
			return (
				<footer>
					<nav className={css(styleNavBar)+' navBar-kariu '+css(styleBreakpoint)} >
						{[this.props.children]}
					</nav>
				</footer>
			)
		}
	}
}


// Listeners ----------------------------------------------------------------

NavBar.propTypes = {
	fontFamily: PropTypes.string,
	backgroundColor: PropTypes.string,
	textColor:  PropTypes.string,
	position: PropTypes.oneOf(['top', 'bottom'])
}

NavBar.defaultProps = {
	position: 'top'
}

export default NavBar

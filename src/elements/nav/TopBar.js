import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import './nav.css'

class TopBar extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)
		this.state = {
			// isHover: props.isHover
		}
		this._isMounted = false
	}

	componentDidMount() { this._isMounted = true }

	componentWillUnmount() { this._isMounted = false }

	// Renderers ----------------------------------------------------------------
	render() {
		const styleNavBar = {
			color: this.props.textColor ? this.props.textColor : 'tomato',
			backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'white',
			boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.082)',
			borderBottomColor: 'lightgrey'
		}

		// Used for debugging
		let pos = { top: 0, left: 0, right:0 }
		if (window.width < 500) { pos = { bottom: 8 } }
		const styleBreakpoint = {
			':after': {
				display: 'flex',
				position: 'absolute',
				...pos,
				padding: '8px 12px',
				marginLeft: 0,
				textAlign: 'right',
				fontFamily: 'Ubuntu',
				color: '#12c253',
				backgroundColor: 'rgb(10,10,10)',
				alignItems: 'center'
			}
		}

		return (
			<div className={css(styleNavBar)+' topBar-kariu '+css(styleBreakpoint)} >
				{[this.props.children]}
			</div>
		)
	}
}


// Listeners ----------------------------------------------------------------
// handleBoxToggle = () => this.setState({ isHover: !this.state.isHover });

TopBar.propTypes = {
}

TopBar.defaultProps = {
}

export default TopBar

import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'


class Dot extends React.Component {

	constructor(props) {
		super(props)
	}

	// Renderers ----------------------------------------------------------------
	render() {

		if (!this.props.marked && !this.props.special) return null

		const styleDot = {
			display: 'inline-block', // Needed for inline component and height behavior
			marginRight: '0.15rem',
			padding: '3px',
			borderRadius: '50%'
		}

		if (this.props.marked) {
			styleDot.backgroundColor = 'tomato'
		}

		if (this.props.special) {
			styleDot.backgroundColor = 'purple'
		}

		return (
			<span className={css(styleDot)}/>
		)
	}
}

Dot.propTypes = {
	marked: PropTypes.bool,
	special: PropTypes.bool
}

export default Dot

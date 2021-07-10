import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'

class ModalFooter extends React.Component {
	// Renderers ----------------------------------------------------------------
	render() {
		const styleFooter = {
			// backgroundColor: tokens.color.gray.light.value,
			padding: [
				'1rem '+'1rem'
			],
			flexGrow: 1,
			display: 'flex',
			flexDirection:'row',
			flexWrap:'wrap',
			alignItems:'flex-end',
			justifyContent:'flex-end',
			borderTop: '1px solid  #C7C7C7',
		}

		return (
			<div className={css(styleFooter)+' '+(this.props.className ? this.props.className : '')}>
				{[this.props.children]}
			</div>
		)
	}
}

export default ModalFooter

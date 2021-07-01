import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Text } from './../../index.js'


class Tooltip extends React.Component {
	constructor(props) {
		super(props)

		this.state = { show: (props.show ? props.show : false) }

		this._isMounted = false
	}

	componentDidMount() { this._isMounted = true }

	componentWillUnmount() { this._isMounted = false }

	// Renderers ----------------------------------------------------------------
	render() {
		if (!this.props.text) return null

		const styleDefault = {
			cursor: 'default'
		}

		const backgroundColor = (this.props.color ? this.props.color : 'lightgrey')
		const color = (this.props.color ? this.rpops.color : 'black')

		let styleMainContainer = {
			width: 'fit-content',
			position: 'relative',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}

		let styleTooltipContainer = {
			position: 'absolute',
			flexWrap: 'nowrap',
			display: (this.state.show ? 'flex' : 'none'),
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 2,
		}

		let styleTip = {
			...styleDefault,
			flexShrink: 0,
			height: '.75rem',
			width: '.75rem',
			backgroundColor: backgroundColor,
			zIndex : 1
		}

		let styleText = {
			...styleDefault,
			minWidth: this.props.minWidth,
			maxWidth: '20rem',
			padding: '.75rem',
			borderRadius: '0.75rem',
			color: color,
			fontSize: '0.85rem',
			lineHeight: '0.85rem',
			overflowWrap: 'break-word',
			backgroundColor: backgroundColor
		}

		switch (this.props.direction) {
			case 'top':
				styleTooltipContainer.flexDirection = 'column-reverse'
				styleTooltipContainer.bottom = '100%'
				styleTip.transform ='translate(0%,-50%) rotate(45deg)'
			break;
			case 'right':
				styleTooltipContainer.flexDirection = 'row'
				styleTooltipContainer.left = '100%'
				styleTip.transform ='translate(50%, 0%) rotate(45deg)'
			break;
			case 'bottom':
				styleTooltipContainer.flexDirection = 'column'
				styleTooltipContainer.top = '100%'
				styleTip.transform ='translate(0%, 50%) rotate(45deg)'
			break;
			default:
				styleTooltipContainer.flexDirection = 'row-reverse'
				styleTooltipContainer.right = '100%'
				styleTip.transform ='translate(-50%, 0%) rotate(45deg)'
			break;
		}

		return (
			<div
				className={css(styleMainContainer)}
				onMouseEnter={this.onMouseHover.bind()}
				onMouseLeave={this.onMouseHover.bind()}
			>
				{[this.props.children]}
				<div className={css(styleTooltipContainer)}>
					<span className={css(styleTip)}/>
					<p className={css(styleText)}>
						{this.props.text}
					</p>
				</div>
			</div>
		)
	}

	onMouseHover = () => { this.setState({ show: !this.state.show }) }
}

Tooltip.propTypes = {
	text: PropTypes.string.isRequired,
	direction : PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
}

Tooltip.defaultProps = {
	text: 'Tooltip',
	direction: 'bottom',
	minWidth : '2rem'
}


export default Tooltip

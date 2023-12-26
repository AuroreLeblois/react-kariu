import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'

const Tooltip = (props) => {
		if (!props.text) return null;
    const [show, setShow] = useState(props.show || false);

  	const onMouseHover = () => setShow(!show)

    const styleDefault = {
      cursor: 'default'
    }

		const backgroundColor = (props.backgroundColor ? props.backgroundColor : 'lightgrey')
		const color = (props.textColor ? props.textColor : 'black')

		let tooltipKariuMainContainer = {
			width: 'fit-content',
			position: 'relative',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}

		let styleTooltipContainer = {
			position: 'absolute',
			flexWrap: 'nowrap',
			display: (show ? 'flex' : 'none'),
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
			minWidth: props.minWidth,
			maxWidth: '20rem',
			padding: '.75rem',
			borderRadius: '0.75rem',
			color: color,
			fontSize: '0.85rem',
			lineHeight: '0.85rem',
			overflowWrap: 'break-word',
			backgroundColor: backgroundColor,
			fontFamily: (props.fontFamily ? props.fontFamily : 'inherit')
		}

		switch (props.direction) {
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
				className={css(tooltipKariuMainContainer)}
				onMouseEnter={(event) => onMouseHover()}
				onMouseLeave={() => onMouseHover()}
			>
				{[props.children]}
				<div className={css(styleTooltipContainer)}>
					<span className={css(styleTip)}/>
					<p className={css(styleText)}>
						{props.text}
					</p>
				</div>
			</div>
		)
}

Tooltip.propTypes = {
	fontFamily: PropTypes.string,
	text: PropTypes.string.isRequired,
	direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	minWidth: PropTypes.string
}

Tooltip.defaultProps = {
	fontFamily: 'inherit',
	text: 'Tooltip',
	direction: 'right',
	minWidth : '2rem'
}

export default Tooltip

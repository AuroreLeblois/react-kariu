import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Loading, Title } from './../../index.js'
import { css } from '@emotion/css'
import './../reset.css'

const Card = (props) => {

  const onClick = () => {
    if (props.variant !== 'accordion') return

    this.setState({ showContent: !props.showContent })
  }

		const styleCursor = {
			cursor: (
				props.onClick || (props.variant === 'accordion')
				? 'pointer'
				: 'default'
			)
		}
		let backgroundColor = (props.backgroundColor ? props.backgroundColor : 'transparent')
		let textColor = (props.textColor ? props.textColor : 'tomato')

		const styleCard = {
			display: 'flex',
			width: props.width,
			flexDirection: 'column',
			flexWrap: 'nowrap',
			alignItems: (props.loading ? 'center' : null),
			flexGrow: props.grow,
			padding: (props.showCard ? '1rem' : 0),
			color: textColor,
			backgroundColor: backgroundColor,
			borderRadius: (props.showCard ? '0.5rem' : 0),
			borderStyle: 'solid',
			borderColor: (props.showCard ? 'lightgrey' : 'transparent'),
			borderWidth: (props.showCard ? '0.5px' : 0),
			':hover': {
				opacity: (
					((props.onClick || (props.variant === 'accordion')))
					? 0.85
					: 1
				)
			},
		}
		if (props.loading) {
			return (
				<div className={`card-kariu ${css(styleCard)} `}>
					<Loading color={textColor} width={'8rem'} height={'8rem'}/>
				</div>
			)
		} else {
			return (
				<div className={`card-kariu ${css(styleCard)} `}
					onClick={props.onClick}
				>
					{renderTitle(styleCursor, textColor, props.title, props.variant, showContent)}
					{renderContent()}
				</div>
			)
		}
	}

	function renderTitle(styleCursor, textColor, title, variant, showContent) {
		if (!title) return null

		const styleTitleContainer = {
			...styleCursor,
			display: 'flex',
			flexWrap: 'nowrap',
			alignItems: 'center',
			justifyContent: 'space-between',
			flexGrow: 1,
			userSelect: 'none',
			'button': {
				marginLeft: (
					variant === 'accordion'
					? '1rem'
					: '0'
				)
			}
		}
		let rotate = {
			'svg':{
				transform: (showContent ? "rotate(-90deg)" : "rotate(90deg)")
			}

		}

		let contentTitle = null
		if (props.variant === 'accordion') {
			contentTitle = (
				<div className={css(styleTitleContainer)}>
					<Title align='left' textColor={textColor} text={this.state.title} priority={4}/>
					<div className={css(rotate)}>
						<Icon
						className={`icon-show-kariu ${props.className}`}
							icon='arrow'
							color={textColor}
							height='1.25rem'
							width='1.25rem'
						/>
					</div>
				</div>
			)
		} else {
			contentTitle = (
				<Title align='left' textColor='inherit' fontFamily='inherit' text={this.state.title} priority={4}/>
			)
		}

		return contentTitle
	}

	function renderContent() {
		if (!this.state.showContent) return null

		let styleContent = {
			color: 'inherit',
			backgroundColor: 'inherit',
			flexDirection:'column',
			flexWrap: 'nowrap',
			flexGrow: props.grow,
			paddingTop: (props.variant === 'accordion') ? '1rem' : '0'
		}

		return (
			<div className={`card-kariu--content ${css(styleContent)} `}>
				{props.children}
			</div>
		)
	}

Card.propTypes = {
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	loading: PropTypes.bool,
	title: PropTypes.string,
	variant: PropTypes.string,
	grow: PropTypes.number
}

Card.defaultProps = {
	loading: false,
	variant: 'default',
	grow: 1,
	showCard: true,
	width: 'auto'
}

export default Card

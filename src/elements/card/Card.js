import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Loading, Title } from './../../index.js'
import { css } from '@emotion/css'
import './../reset.css'

class Card extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			showContent: (this.props.variant === 'accordion' ? false : true),
			title: (this.props.title ? this.props.title : null)
		}
	}


	componentDidUpdate(prevProps) {
		if (prevProps.title !== this.props.title) {
			this.setState({ title: this.props.title })
		}
	}

	// Renderers ----------------------------------------------------------------
	render() {

		const styleCursor = {
			cursor: (
				this.props.onClick || (this.props.variant === 'accordion')
				? 'pointer'
				: 'default'
			)
		}
		let backgroundColor = (this.props.backgroundColor ? this.props.backgroundColor : 'transparent')
		let textColor = (this.props.textColor ? this.props.textColor : 'tomato')

		const styleCard = {
			display: 'flex',
			width: this.props.width,
			flexDirection: 'column',
			flexWrap: 'nowrap',
			alignItems: (this.props.loading ? 'center' : null),
			flexGrow: this.props.grow,
			padding: (this.props.showCard ? '1rem' : 0),
			color: textColor,
			backgroundColor: backgroundColor,
			borderRadius: (this.props.showCard ? '0.5rem' : 0),
			borderStyle: 'solid',
			borderColor: (this.props.showCard ? 'lightgrey' : 'transparent'),
			borderWidth: (this.props.showCard ? '0.5px' : 0),
			':hover': {
				opacity: (
					(this.props.showCard && (this.props.onClick || (this.props.variant === 'accordion')))
					? 0.85
					: 1
				)
			},
		}
		if (this.props.loading) {
			return (
				<div className={`card-kariu ${css(styleCard)} `}>
					<Loading color={textColor} width={'8rem'} height={'8rem'}/>
				</div>
			)
		} else {
			return (
				<div className={`card-kariu ${css(styleCard)} `}
					onClick={this.onClick.bind(this)}
				>
					{this.renderTitle(styleCursor, textColor)}
					{this.renderContent()}
				</div>
			)
		}
	}

	renderTitle(styleCursor, textColor) {
		if (!this.state.title) return null

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
					this.props.variant === 'accordion'
					? '1rem'
					: '0'
				)
			}
		}
		let rotate = {
			'svg':{
				transform: (this.state.showContent ? "rotate(-90deg)" : "rotate(90deg)")
			}

		}

		let contentTitle = null
		if (this.props.variant === 'accordion') {
			contentTitle = (
				<div className={css(styleTitleContainer)}>
					<Title align='left' textColor={textColor} text={this.state.title} priority={4}/>
					<div className={css(rotate)}>
						<Icon
						className={`icon-show-kariu ${this.props.className}`}
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
				<Title align='left' textColor='inherit' text={this.state.title} priority={4}/>
			)
		}

		return contentTitle
	}

	renderContent() {
		if (!this.state.showContent) return null

		let styleContent = {
			color: 'inherit',
			backgroundColor: 'inherit',
			flexDirection:'column',
			flexWrap: 'nowrap',
			flexGrow: this.props.grow,
			paddingTop: (this.props.variant === 'accordion') ? '1rem' : '0'
		}

		return (
			<div className={`card-kariu--content ${css(styleContent)} `}>
				{this.props.children}
			</div>
		)
	}

	// Listeners ----------------------------------------------------------------
	onClick = () => {
		if (this.props.variant !== 'accordion') return

		this.setState({ showContent: !this.state.showContent })
	}
}

Card.propTypes = {
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	loading: PropTypes.bool,
	title: PropTypes.string,
	variant: PropTypes.string,
	grow: PropTypes.number,
	showCard: PropTypes.bool
}

Card.defaultProps = {
	loading: false,
	variant: 'default',
	grow: 1,
	showCard: true,
	width: 'auto'
}

export default Card

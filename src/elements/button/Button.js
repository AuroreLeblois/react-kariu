import React from 'react'
import PropTypes from 'prop-types'
import { Loading, Icon } from './../../index.js'
import { css } from '@emotion/css'
import './../reset.css'

export default class Button extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			loading: (props.loading ? props.loading : false)
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.loading !== prevProps.loading) {
			this.setState({ loading: this.props.loading })
		}
	}

	// Renderers ----------------------------------------------------------------
	render() {
		const backgroundColor = (this.props.backgroundColor ? this.props.backgroundColor : 'tomato')
		const size = (this.props.size ? this.props.size : 'medium')
		const mode = 'kariu-button--primary'
		const shape = this.props.shape ? this.props.shape : 'rounded'

		let styleBtn = {
			fontWeight: 700,
			border: 0,
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			lineHeight: 1,
			margin: 'auto',
			fontSize: '0.85rem',
			padding: '0.65rem',
			borderRadius: (this.props.shape==='basic' ? '0.5rem' : this.props.shape ==='rounded' ? '3rem' : '50%'),
			'&:active': {
				filter: 'brightness(85%)'
			},
			'&:focus': {
				outline: '1px dashed',
				outlineColor: 'inherit'
			},
			'&:disabled': {
				backgroundColor: '#D3D3D3'
			}
		}

		switch (this.props.size) {
			case 'xSmall':
				styleBtn.fontSize = '0.45rem',
				styleBtn.padding = '0.45rem'
			break;
			case 'small':
				styleBtn.fontSize = '0.55rem',
				styleBtn.padding = '0.55rem'
			break;
			case 'large':
				styleBtn.fontSize = '1.25rem',
				styleBtn.padding = '1rem'
			break;
			default:
				styleBtn
			break;
		}

		let styleBackGround = {
			backgroundColor: backgroundColor
		}

		return (
			<button
				className={['kariu-button', `kariu-button--${shape}`, `kariu-button--${size}`, css(styleBackGround), css(styleBtn), this.props.className].join(' ')}
				type="button"
				disabled={this.props.disabled}
				title={this.props.tooltip}
				tabIndex={this.props.tabIndex ? this.props.tabIndex : 0}
				onClick={this.props.onClick}
			>
				{this.renderText()}
				{this.renderIcon()}
			</button>
		)
	}

	renderText() {
		let color = this.props.textColor ? this.props.textColor : 'inherit'

		let textColor = { color: color }
		if (this.state.loading) {
			const dimensions = this.renderDimensions()
			return ( <Loading
						icon='loadingDefault'
						loading={this.state.loading}
						color={color}
						width={dimensions}
						height={dimensions}
					/>
				)
		} else {
			return (<span className={css(textColor)}>{this.props.label}</span>)
		}
	}

	renderIcon() {
		if (!this.props.label && !this.props.icon) return null

		let color = this.props.textColor ? this.props.textColor : 'inherit'
		let iconSize = this.renderDimensions()
		let styleIcon = {
			fontWeight: 'bolder',
			margin: '.25rem'
		}

		if (this.props.icon) {
			return <Icon className={'kariu-button--icon '+css(styleIcon)} width={iconSize} height={iconSize} icon={this.props.icon} color={color}/>
		}

	}

	renderDimensions() {
		switch (this.props.size) {
			case 'medium':
				return '1rem'
			case 'small':
				return '0.85rem'
			case 'xSmall':
				return '0.65rem'
			case 'large':
				return '1.75rem'
			default: '1.15rem'
		}
	}
}

Button.propTypes = {
	backgroundColor: PropTypes.string,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	shape: PropTypes.oneOf(['rounded', 'basic', 'round']),
	size: PropTypes.oneOf([ 'xSmall','small', 'medium', 'large']),
	tabIndex: PropTypes.number,
	textColor: PropTypes.string,
	tooltip: PropTypes.string,
	icon: PropTypes.oneOf([
		'arrow',
		'cross',
		'eyeOpen',
		'eyeSlashed',
		'soundOff',
		'soundOn',
		'search',
		'marker',
		'hamburgerMenu'
	]),

}

Button.defaultProps = {
	label: '',
	backgroundColor: 'tomato',
	textColor: 'white',
	loading: false,
	onClick: undefined,
	shape: 'basic',
	size: 'medium',
	tabIndex: 0
}

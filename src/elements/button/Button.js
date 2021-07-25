import React from 'react'
import PropTypes from 'prop-types'
import { Loading, Icon } from './../../index.js'
import { css } from '@emotion/css'
import './../reset.css'
import './button.css'



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
		const backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'tomato'
		const size = this.props.size ? this.props.size : 'medium'
		const mode = 'kariu-button--primary'
		const shape = this.props.shape ? this.props.shape : 'rounded'

		let styleBackGround = {
			backgroundColor: backgroundColor
		}

		return (
			<button
				className={['kariu-button', `kariu-button--${shape}`, `kariu-button--${size}`, mode, css(styleBackGround), this.props.className].join(' ')}
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
		if (!this.props.text && !this.props.icon) return null

		let color = this.props.textColor ? this.props.textColor : 'inherit'
		let iconSize = this.renderDimensions()

		if (this.props.icon) {
			return <Icon className={'kariu-button--icon'} width={iconSize} height={iconSize} icon={this.props.icon} color={color}/>
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
	label: PropTypes.string,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	shape: PropTypes.oneOf(['rounded', 'basic', 'round']),
	size: PropTypes.oneOf([ 'xSmall','small', 'medium', 'large']),
	tabIndex: PropTypes.number,
	textColor: PropTypes.string,
	tooltip: PropTypes.string,
	icon: PropTypes.oneOf([
		'cross',
		'eyeOpen',
		'eyeSlashed',
		'soundOff',
		'soundOn',
		'hamburgerMenu',
		'search'
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

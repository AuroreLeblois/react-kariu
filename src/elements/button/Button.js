import React from 'react'
import PropTypes from 'prop-types'
import { Loading } from './../../index.js'
import './../reset.css'
import './button.css'


export default class Button extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			loading: (props.loading ? props.loading : false),
			textColor: (props.textColor ? props.textColor : 'white')
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.textColor !== prevProps.textColor ||
			this.props.loading !== prevProps.loading) {
			this.setState({ textColor: this.props.textColor, loading: this.props.loading })
		}
	}

	// Renderers ----------------------------------------------------------------
	render() {
		const backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'tomato'
		const size = this.props.size ? this.props.size : 'medium'
		const mode = 'kariu-button--primary'
		const shape = this.props.shape ? this.props.shape : 'rounded'

		return (
			<div>
			<button
				className={['kariu-button', `kariu-button--${shape}`, `kariu-button--${size}`, mode, this.props.className].join(' ')}
				style={{backgroundColor: backgroundColor}}
				type="button"
				disabled={this.props.disabled}
				title={this.props.tooltip}
				tabIndex={this.props.tabIndex ? this.props.tabIndex : 0}
			>
				{this.renderText()}
			</button>
			</div>
		)
	}

	renderText() {
		const color = this.state.textColor
		if (this.state.loading) {
			const dimensions = (this.props.size === 'medium' ? '1rem' :
				this.props.size === 'small' ? '0.75rem' : '1.15rem')
			return ( <Loading
					icon='loadingDefault'
					loading={this.state.loading}
					color={color}
					width={dimensions}
					height={dimensions}/>)
		} else {
			return (<span style={{color: color}}>{this.props.label}</span>)
		}
	}
}

Button.propTypes = {
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	label: PropTypes.string,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	shape: PropTypes.oneOf(['rounded', 'basic']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	tabIndex: PropTypes.number,
	tooltip: PropTypes.string,

}

Button.defaultProps = {
	backgroundColor: 'tomato',
	textColor: 'white',
	label: 'Button',
	loading: false,
	onClick: undefined,
	shape: 'basic',
	size: 'medium',
	tabIndex: 0
}

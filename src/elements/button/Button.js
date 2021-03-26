import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Loading } from './../../index.js'
import './../reset.css'
import './button.css'


export default class Button extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			loading: (props.loading ? props.loading : false),
			colorLabel: (props.colorLabel ? props.colorLabel : 'black')
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.colorLabel !== prevProps.colorLabel ||
			this.props.loading !== prevProps.loading) {
			this.setState({ colorLabel: this.props.colorLabel, loading: this.props.loading })
		}
	}

	// Renderers ----------------------------------------------------------------
	render() {
		const backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'tomato'
		const size = this.props.size ? this.props.size : 'medium'
		const mode = 'kariu-button--primary'
		const shape = this.props.shape ? this.props.shape : 'rounded'


		return (
			<button
				type="button"
				title={this.props.tooltip}
				className={['kariu-button', `kariu-button--${shape}`, `kariu-button--${size}`, mode, this.props.className].join(' ')}
				style={{backgroundColor: backgroundColor}}
				tabIndex={this.props.tabIndex ? this.props.tabIndex : 0}
				{...this.props}
			>
				{this.renderText()}
			</button>
		)
	}

	renderText() {
		const colorLabel = this.state.colorLabel
		if (this.props.loading) {
			const dimensions = (this.props.size === 'medium' ? '1rem' :
				this.props.size === 'small' ? '0.75rem' : '1.15rem')
			return (<span><Loading icon='loadingDefault' loading={this.state.loading} color={colorLabel} width={dimensions} height={dimensions}/> </span>)
		} else {
			const label = this.props.label ? this.props.label : null
			return (<span style={{color: colorLabel}}>{label}</span>)
		}
	}
}

Button.propTypes = {
	backgroundColor: PropTypes.string,
	colorLabel: PropTypes.string,
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
	colorLabel: 'white',
	label: 'Button',
	loading: false,
	onClick: undefined,
	shape: 'basic',
	size: 'medium',
	tabIndex: 0
}

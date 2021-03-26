import React from 'react';
import PropTypes from 'prop-types';
import './../reset.css'
import './button.css';


export default class Button extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			loading: (props.loading ? props.loading : false)
		}
	}

	// Renderers ----------------------------------------------------------------
	render() {
		const backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : 'white'
		const label = this.props.label ? this.props.label : null
		const size = this.props.size ? this.props.size : 'medium'
		const mode = 'kariu-button--primary'
		const shape = this.props.shape ? this.props.shape : 'rounded'
		const colorLabel = {color: this.props.colorLabel ? this.props.colorLabel : 'black'}

		return (
			<button
				type="button"
				className={['kariu-button', `kariu-button--${shape}`, `kariu-button--${size}`, mode, this.props.className].join(' ')}
				style={{backgroundColor}}
				tabIndex={this.props.tabIndex ? this.props.tabIndex : 0}
				{...this.props}
			>
				<span style={colorLabel}>{label}</span>
			</button>
		)
	}
}

Button.propTypes = {
	backgroundColor: PropTypes.string,
	colorLabel: PropTypes.string,
	label: PropTypes.string.isRequired,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	shape: PropTypes.oneOf(['rounded', 'basic']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	tabIndex: PropTypes.number

};

Button.defaultProps = {
	backgroundColor: null,
	size: 'medium',
	onClick: undefined,
	tabIndex: 0
};

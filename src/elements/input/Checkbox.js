import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './../../index.js'
import './../reset.css'

class Checkbox extends React.Component {
		constructor(props) {
		super(props)

		this.state = {
			checked: (props.checked ? props.checked : false)
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.checked !== this.props.checked) {
			this.setState({ checked: this.props.checked })
		}
	}

	handleClick() {
		this.setState({ checked: !this.state.checked })
	}

	render() {
		if (!this.props.id) return null
		
		return (
			<div>
				<input type="checkbox"
					id={this.props.id}
					name={this.props.name}
					onChange={ ()=> {this.handleClick() && this.props.onChange}}
					checked= {this.state.checked}
					/>
				<label htmlFor={this.props.id}>{this.props.id}</label>
			</div>
		)
	}
}

Checkbox.propTypes = {
	id: PropTypes.string.isRequired,
	textColor: PropTypes.string,
}

Checkbox.defaultProps = {
	textColor: 'blue-grey',
	value: 'Example',

}


export default Checkbox

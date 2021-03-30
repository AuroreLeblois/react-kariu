import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './../../index.js'
import './../reset.css'
import './inputItem.css'

class InputItem extends React.Component {
		constructor(props) {
		super(props)

		this.state = {
			value: (props.value ? props.value : "")
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value !== this.props.value) {
			this.setState({value: this.props.value})
		}
	}

	handleDelete() {
		this.setState({value: ''})
	}

	render() {
		if(!this.state.value) return null

		return (
			<div style={{backgroundColor: this.props.backgroundColor}}
				className={`inputItem-kariu`+' '+this.props.className}>
				<p style={{color: this.props.textColor}}
					className={`inputItem-kariu--paragraph`}>{this.state.value}</p>
				<button className={'inputItem-kariu--button-delete'}
					style={{backgroundColor: this.props.backgroundColor, color: this.props.textColor}}
					onClick={this.handleDelete.bind(this)}>
					<Icon icon='cross'
						height='.6rem'
						width='.6rem'
						color={this.props.textColor}/>
				</button>
			</div>
		)
	}
}

InputItem.propTypes = {
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	value: PropTypes.string
}

InputItem.defaultProps = {
	backgroundColor: 'lightblue',
	textColor: 'blue-grey',
	value: 'Example',

}

export default InputItem

import React from 'react'
import PropTypes from 'prop-types'
import './../reset.css'
import './avatar.css'

class Avatar extends React.Component {
	// Renderers ----------------------------------------------------------------
	render() {
		let content = null
		if (this.props.url) {
			content = (
				<img src={this.props.url}
					className={`avatar-kariu
						avatar-kariu--size-${this.props.size}
						avatar-kariu--shape-${this.props.shape} `+this.props.className
					}
					alt={this.props.name}/>
			)
		} else {
			let fullName = this.props.name.split(' ')
			content = fullName[0].charAt(0) + (fullName[1] ? fullName[1].charAt(0) : '')
		}

		return (
			<div style={{color: this.props.textColor, backgroundColor: (this.props.url ? null : this.props.backgroundColor)}}
				className={`avatar-kariu avatar-kariu--size-${this.props.size} avatar-kariu--shape-${this.props.shape} `+this.props.className}>
				{content}
			</div>
		)
	}
}

Avatar.propTypes = {
	backgroundColor: PropTypes.string,
	name: PropTypes.string.isRequired,
	textColor: PropTypes.string,
	url: PropTypes.string,
	size: PropTypes.oneOf([
		'big',
		'medium',
		'giant',
		'small'
	]),
	shape: PropTypes.oneOf([
		'square',
		'round'
	])
}

Avatar.defaultProps = {
	backgroundColor: 'tomato',
	name: 'Aurore Leblois',
	url: null,
	size: 'medium',
	shape: 'round',
	textColor: 'white'
}

export default Avatar

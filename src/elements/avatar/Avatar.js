import React from 'react'
import PropTypes from 'prop-types'
// import { css } from '@emotion/css'
// import tokens from './../tokens/javascript/tokens.js'

class Avatar extends React.Component {
	// Renderers ----------------------------------------------------------------
	render() {
		let content = null
		if (this.props.url) {
			content = (
				<img src={this.props.url} className={`avatar-kariu avatar-kariu--size${this.props.size}`} alt={this.props.name}/>
			)
		} else if (this.props.name) {
			let fullName = this.props.name.split(' ')
			content = fullName[0].charAt(0) + (fullName[1] ? fullName[1].charAt(0) : '')
		}

		return (
			<div className={`avatar-kariu avatar-kariu--size-${this.props.size}`}>
				{content}
			</div>
		)
	}
}

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string,
	size: PropTypes.oneOf([
		'big',
		'medium',
		'giant',
		'small'
	])
}

Avatar.defaultProps = {
	name: 'Aurore Leblois',
	url: 'https://media-exp1.licdn.com/dms/image/C4E03AQHZB-8fKQrkpw/profile-displayphoto-shrink_200_200/0/1517549970272?e=1620864000&v=beta&t=Ni4cCb8UuerLrEMB9plHd7g3GMYxJowbvnE9LHqbGOE',
	size: 'medium'
}

export default Avatar

import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Loading } from './../../index.js'
import { css } from '@emotion/css'
import './../reset.css'
import './avatar.css'

class Avatar extends React.Component {
	// Renderers ----------------------------------------------------------------
	render() {
		let content = null

		let colors = {
			color: this.props.textColor,
			backgroundColor: (this.props.url && !this.props.loading ? null : this.props.backgroundColor)
		}

		if (this.props.loading) {
			content = ( <Loading
				icon='loadingDefault'
				loading={this.props.loading}
				color={this.props.textColor}
				className={`avatar-kariu--size-${this.props.size}`}
				/>)
			} else if (this.props.customIcon && !this.props.url) {
				content = ( <Icon
					icon={this.props.customIcon}
					color={this.props.textColor}
					className={`avatar-kariu--size-${this.props.size}`}
					/> )
				} else if (this.props.url && !this.props.loading) {
			content = (
				<img src={this.props.url}
					className={
						`avatar-kariu
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
			<div className={`avatar-kariu
				avatar-kariu--size-${this.props.size}
			 	avatar-kariu--shape-${this.props.shape} `
				+css(colors)+ ' ' + this.props.className}>
				{content}
			</div>
		)
	}
}

Avatar.propTypes = {
	backgroundColor: PropTypes.string,
	customIcon: PropTypes.oneOf([
		'eyeOpen',
		'eyeSlashed',
		'soundOff',
		'soundOn',
		'hamburgerMenu'
	]),
	loading: PropTypes.bool,
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
	customIcon: null,
	name: 'Aurore Leblois',
	url: null,
	size: 'medium',
	shape: 'round',
	textColor: 'white'
}

export default Avatar

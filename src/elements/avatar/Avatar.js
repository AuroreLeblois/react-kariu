import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Loading } from './../../index.js'
import { css } from '@emotion/css'

class Avatar extends React.Component {
	// Renderers ----------------------------------------------------------------
	render() {
		let content = null

		let avatar = {
			color: this.props.textColor,
			backgroundColor: (this.props.url && !this.props.loading ? null : this.props.backgroundColor),
			display: 'flex',
			justifyContent: 'center',
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit',
			alignItems: 'center',
			cursor: 'default',
			margin: 'auto',
			fontWeight: 'bold',
			borderRadius: (this.props.shape === 'square' ? '15%' : '50%'),
			width: '2rem',
			height: '2rem',
			fontSize: '1.25rem'
		}
		switch (this.props.size) {
			case 'small':
				avatar.width = ' 1.5rem',
				avatar.height = '1.5rem',
				avatar.fontSize = '0.75rem'
			break;
			case 'big':
				avatar.width = ' 4rem',
				avatar.height = '4rem',
				avatar.fontSize = '2rem'
			break;
			case 'giant':
				avatar.width = '7rem',
				avatar.height = '7rem',
				avatar.fontSize = '4rem'
			break;
			default:
				avatar
			break;
		}

		if (this.props.loading) {
			content = ( <Loading
				icon='loadingDefault'
				loading={this.props.loading}
				color={this.props.textColor}
				className={`avatar-kariu--loader`}
				/>)
			} else if (this.props.customIcon && !this.props.url) {
				content = ( <Icon
					icon={this.props.customIcon}
					color={this.props.textColor}
					className={`avatar-kariu--icon `+css(avatar)}
					/> )
				} else if (this.props.url && !this.props.loading) {
			content = (
				<img src={this.props.url}
					className={ `avatar-kariu--img `+css(avatar)+' '+this.props.className }
					alt={this.props.name}/>
			)
		} else {
			let fullName = this.props.name.split(' ')
			content = fullName[0].charAt(0) + (fullName[1] ? fullName[1].charAt(0) : '')
		}

		return (
			<div className={`avatar-kariu `+css(avatar)+' '+this.props.className}>
				{content}
			</div>
		)
	}
}

Avatar.propTypes = {
	backgroundColor: PropTypes.string,
	fontFamily: PropTypes.string,
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

import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Loading } from './../../index.js'
import { css } from '@emotion/css'

const Avatar = (props) => {
	// Renderers ----------------------------------------------------------------
		let content = null

		let avatar = {
			color: props.textColor,
			backgroundColor: (props.url && !props.loading ? null : props.backgroundColor),
			display: 'flex',
			justifyContent: 'center',
			fontFamily: props.fontFamily ? props.fontFamily : 'inherit',
			alignItems: 'center',
			cursor: 'default',
			margin: 'auto',
			fontWeight: 'bold',
			borderRadius: (props.shape === 'square' ? '15%' : '50%'),
			width: '2rem',
			height: '2rem',
			fontSize: '1.25rem'
		}
		switch (props.size) {
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

		if (props.loading) {
			content = ( <Loading
				icon='loadingDefault'
				loading={props.loading}
				color={props.textColor}
				className={`avatar-kariu--loader`}
				/>)
			} else if (props.customIcon && !props.url) {
				content = ( <Icon
					icon={props.customIcon}
					color={props.textColor}
					className={`avatar-kariu--icon `+css(avatar)}
					/> )
				} else if (props.url && !props.loading) {
			content = (
				<img src={props.url}
					className={ `avatar-kariu--img `+css(avatar)+' '+props.className }
					alt={props.name}/>
			)
		} else {
			let fullName = props.name.split(' ')
			content = fullName[0].charAt(0) + (fullName[1] ? fullName[1].charAt(0) : '')
		}

		return (
			<div className={`avatar-kariu `+css(avatar)+' '+props.className}>
				{content}
			</div>
		)
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

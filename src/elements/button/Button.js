import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Loading, Icon } from './../../index.js'
import { css } from '@emotion/css'
import './../reset.css'

const Button = (props) => {
	// Renderers ----------------------------------------------------------------
		const backgroundColor = (props.backgroundColor ? props.backgroundColor : 'tomato');
		const size = (props.size ? props.size : 'medium');
		const mode = 'kariu-button--primary';
		const shape = props.shape ? props.shape : 'rounded';

		let styleBtn = {
			fontWeight: 700,
			border: 0,
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			lineHeight: 1,
			margin: 'auto',
			fontSize: '0.85rem',
			padding: '0.65rem',
			borderRadius: (props.shape === 'basic' ? '0.5rem' : props.shape === 'rounded' ? '3rem' : '50%'),
			'&:active': {
				filter: 'brightness(0)'
			},
			'&:focus': {
				outline: '1px dashed',
				outlineColor: 'inherit'
			},
			'&:disabled': {
				backgroundColor: '#D3D3D3'
			}
		}

		switch (props.size) {
			case 'xSmall':
				styleBtn.fontSize = '0.45rem',
				styleBtn.padding = '0.45rem'
			break;
			case 'small':
				styleBtn.fontSize = '0.55rem',
				styleBtn.padding = '0.55rem'
			break;
			case 'large':
				styleBtn.fontSize = '1.25rem',
				styleBtn.padding = '1rem'
			break;
			default:
				styleBtn
			break;
		}

		let styleBackGround = {
			backgroundColor: backgroundColor
		}

    const renderText = () => {
      let color = props.textColor ? props.textColor : 'inherit'

      let textColor = {
        color: color,
        fontFamily: props.fontFamily ? props.fontFamily : 'inherit'
      }
      if (props.loading) {
        const dimensions = renderDimensions()
        return ( <Loading
              icon='loadingDefault'
              loading={props.loading}
              color={color}
              width={dimensions}
              height={dimensions}
            />
          )
      } else {
        return (<span className={css(textColor)}>{props.label}</span>)
      }
    }

    const renderIcon = () => {
      if (!props.label && !props.icon) return null

      let color = props.textColor ? props.textColor : 'inherit'
      let iconSize = renderDimensions()
      let styleIcon = {
        fontWeight: 'bolder',
        margin: '.25rem'
      }

      if (props.icon) {
        return <Icon className={'kariu-button--icon '+css(styleIcon)} width={iconSize} height={iconSize} icon={props.icon} color={color}/>
      }

    }

    const renderDimensions = () => {
      switch (props.size) {
        case 'medium':
          return '1rem'
        case 'small':
          return '0.85rem'
        case 'xSmall':
          return '0.65rem'
        case 'large':
          return '1.75rem'
        default: '1.15rem'
      }
    }

		return (
			<button
				className={['kariu-button', `kariu-button--${shape}`, `kariu-button--${size}`, css(styleBackGround), css(styleBtn), props.className].join(' ')}
				type="button"
				disabled={props.disabled}
				title={props.tooltip}
				tabIndex={props.tabIndex ? props.tabIndex : 0}
				onClick={props.onClick}
			>
				{renderText()}
				{renderIcon()}
				{props.children}
			</button>
		);

}

Button.propTypes = {
	fontFamily: PropTypes.string,
	backgroundColor: PropTypes.string,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	shape: PropTypes.oneOf(['rounded', 'basic', 'round']),
	size: PropTypes.oneOf([ 'xSmall','small', 'medium', 'large']),
	tabIndex: PropTypes.number,
	textColor: PropTypes.string,
	tooltip: PropTypes.string,
	icon: PropTypes.oneOf([
		'arrow',
		'cross',
		'external',
		'eyeOpen',
		'eyeSlashed',
		'soundOff',
		'soundOn',
		'search',
		'marker',
		'hamburgerMenu'
	])
}

Button.defaultProps = {
	label: '',
	backgroundColor: 'tomato',
	textColor: 'white',
	loading: false,
	onClick: undefined,
	shape: 'basic',
	size: 'medium',
	tabIndex: 0
}
export default Button

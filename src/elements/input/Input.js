import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from './../../index.js'
import { css } from '@emotion/css'

const Input = (props) => {
  const [value, setValue] = useState(props.value);
  const [type, setType] = useState(props.type);

  useEffect(() => {
    setType(props.type)
  }, [props.type]);

  // Listeners ----------------------------------------------------------------
  const toggleShow = () => {
    setType(type === 'password' ? 'text' : 'password');
  }

  const handleDelete = () => {
    setValue('');
    props.onChange && props.onChange('');
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange && props.onChange(event.target.value);
  }

  function renderLabel(colorText) {
    if (!props.label) return null

    let color = { color: colorText, fontFamily: props.fontFamily ? props.fontFamily : 'Arial, sans-serif' }
    return (
      <label htmlFor={props.name} className={'input-kariu--label '+css(color)}>{props.label}</label>
    )
  }

  function renderBtnShowPwd(colorText) {
    if (!props.renderBtnShowPwd) return null;

      let btnEye = {
        flex: '0 1 auto',
        display:  'inline-flex',
        position: 'absolute',
        right:0,
        top:'35%',
        height:'2.25rem',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '0.5rem',
        padding:' 0',
        '&:focus': { outline: 'none'},
        '&:required': { borderColor: '#ed4637' },
        '&:disabled': { borderColor: 'grey', backgroundColor:'lightgrey'}
      }
      if (type === 'password') {
        return (
          <Button
            icon='eyeOpen'
            size='small'
            shape='basic'
            backgroundColor='transparent'
            textColor={colorText}
            className={'button-eye-kariu '+css(btnEye)}
            onClick={()=>toggleShow()}/>
        )
      } else {
        return (
          <Button
            icon='eyeSlashed'
            size='small'
            backgroundColor='transparent'
            textColor={colorText}
            shape='basic'
            className={'button-eye-kariu '+css(btnEye)}
            onClick={()=>toggleShow()}/>
        )
      }

  }

  function renderDescription(colorText) {
    let styleDescription = { color: colorText, fontSize: 'smaller', marginTop: 0,
    fontFamily: props.fontFamily ? props.fontFamily : 'inherit'
  }

    if (type === 'range') {
      return (<p className={'input-Kariu--description '+css(styleDescription)}>{`${props.description} ${value}`}</p>)
    } else if (props.required) {
      return (<p className={'input-Kariu--description '+css({color: 'red', fontFamily: props.fontFamily ? props.fontFamily : 'inherit'})}>{props.description ? props.description : 'Required'}</p>)
    } else {
      return (<p className={'input-Kariu--description '+css(styleDescription)}>{props.description}</p>)
    }
  }

		let colorText = (props.textColor ? props.textColor : '#43464B')

		let wrapper = {
			display: 'flex',
			position: 'relative',
			width: '100%',
			lineHeight: '1rem',
			flexDirection: 'column',
			flexFlow: 'column nowrap',
			cursor: 'default'
		}

		let styleInput = {
			display: 'flex',
			width: 'auto',
			margin: (props.type !== 'range' ? '5px 0px': 0),
			height: '2.25rem',
			border: '1.25px solid #ccc',
			borderRadius: '4px',
			boxSizing: 'border-box',
			paddingLeft: (props.type !== 'range' ? '0.85rem': 0),
			color: colorText,
			fontFamily: props.fontFamily ? props.fontFamily : 'Arial, sans-serif',
			borderColor: (props.borderColor ? props.borderColor : '#bfbfbf'),
			backgroundColor: (props.backgroundColor ? props.backgroundColor : '#eeeeee'),
			'&:focus': {
				borderColor: '#309bc2',
				borderWidth: 'medium'
			},
			'[type=number]::-webkit-inner-spin-button': {
				opacity: 1
			},
			'[type=range]::-webkit-slider-runnable-track': {
				width: '100%',
				height: '15px',
				cursor: 'pointer',
				/* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
				background:  props.backgroundColor ? props.backgroundColor : '#3071a9',
				borderRadius: '1.3px',
				border: '0.2px solid #010101'
			},
			'[type=search]': {
				width: 'auto',
				display: 'flex'
			}
		}

		return (
			<div className={'input-kariu--wrapper '+css(wrapper)}>
				{renderLabel(colorText)}
				<input className={'input-kariu '+css(styleInput)}
					type={props.type}
					autoComplete={props.autoComplete}
					name={props.name}
					value={value}
					onChange={(event)=>handleChange(event)}
					placeholder={props.placeholder}
					required={props.required}
					disabled={props.disabled}
					onClick={props.onClick}
					/>
					{renderBtnShowPwd(colorText)}
					{renderDescription(colorText)}
			</div>
		)
	}

// Définition des propTypes------------------------------------------------------
Input.propTypes = {
	backgroundColor: PropTypes.string,
	borderColor: PropTypes.string,
	fontFamily: PropTypes.string,
	value: PropTypes.any,
	autocomplete: PropTypes.oneOf(['on', 'off']),
	type: PropTypes.oneOf([
    'file',
		'text',
		'tel',
		'password',
		'color',
		'email',
		'hidden',
		'number',
		'range',
		'url',
		'date',
		'month',
		'search']),
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	description: PropTypes.string,
	placeholder: PropTypes.string,
	icon: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	textColor: PropTypes.string,
	onChange: PropTypes.func,
  renderBtnShowPwd: PropTypes.bool
}

Input.defaultProps = {
	fontFamily: 'inherit',
	autocomplete: 'off',
	type: 'text',
	description: null,
	size: 'medium',
	label: 'Label',
  renderBtnShowPwd: false
}

export default Input

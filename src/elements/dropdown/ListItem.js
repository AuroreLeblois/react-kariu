import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import { Checkbox, Text } from './../../index.js'

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelected: (props.selected ? props.selected : false),
			variant: (props.variant ? props.variant : 'default'),
			option: props.option ? props.option : {}
		}
		this.text = null
		this.description = null
		this.textNoData = null
	}


	render () {
		if (this.state.option.text) this.text = this.capitalize(this.state.option.text)
		if (this.state.option.description) this.description = this.capitalize(this.state.option.description)
		if (this.props.textNoData) this.textNoData = this.capitalize(this.props.textNoData)
		let color =  this.props.backgroundColor ? this.props.backgroundColor : 'white'

		let optionStyle = {
			display: 'flex',
			cursor: 'pointer',
			width: '100%',
			backgroundColor: color,
			color: this.props.textColor ? this.props.textColor : 'tomato',
			minHeight:'1.8rem',
			fontFamily: 'inherit',
			borderRadius: '2px',
			'input':{
				cursor: 'pointer',
			},
			'label': {
				cursor: 'pointer',
				whiteSpace: 'nowrap'
			},
			'p':{
				cursor: 'default',
				marginBottom: 0,
				marginTop: 0,
				maxWidth: '10rem',
				whiteSpace: 'nowrap'
			},
			'a': {
				cursor: 'pointer',
				whiteSpace: 'nowrap',
				textDecoration: 'none',
				color: this.props.textColor ? this.props.textColor : 'tomato'
			}
		}
		let liStyle = {
			lineHeight: '1.5rem',
			display: 'flex',
			width: '100%',
			margin:'.5rem',
			fontFamily: 'inherit',
			textAlign: 'center',
			verticalAlign: 'middle'
		}

		switch (this.state.variant) {
			case 'description':
				return (
					<div className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`}>
						<li className={css(liStyle)}>
							<Text variant={this.state.variant} text={this.description}/>
						</li>
					</div>
				);
			case 'noData':
			return (
				<div className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`}>
					<li className={css(liStyle)}>
						<Text variant='disabled' cursor='default' textColor='inherit' text={this.textNoData}/>
					</li>
				</div>
			);
			case 'navigation':
			return (
				<div onClick={()=>window.location.href=this.state.option.navigation} className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`}>
					<li className={css(liStyle)}>
						<a href={this.state.option.navigation}>{this.text}</a>
					</li>
				</div>
			);
			default :
				return (
					<div onClick={()=>this.handleClick(event)} className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`} onClick={this.handleClick}>
						<li className={css(liStyle)}>
							<Checkbox
								textColor={'inherit'}
								backgroundColorChecked={this.props.backgroundColorChecked ? this.props.backgroundColorChecked : 'tomato'}
								onChange={()=>this.handleClick(event) && this.props.onChange}
								checked={this.state.isSelected}
								id={this.text}/>
						</li>
					</div>
				);
		}

	}

	capitalize(s) {
		return s[0].toUpperCase() + s.slice(1)
	}

	handleClick = (event) => {
		if (event && this.text) this.setState({ isSelected: !this.state.isSelected },
			()=> {this.props.onSelect(this.state.option)}
		)
	}
}
export default ListItem

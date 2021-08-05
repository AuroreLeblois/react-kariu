import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import { Checkbox, Text, Link } from './../../index.js'

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			variant: (props.variant ? props.variant : 'default'),
			option: props.option ? props.option : {}
		}
		this.text = null
		this.description = null
		this.textNoData = null
	}

	componentDidUpdate(prevProps) {
		if (prevProps.option !== this.props.option) {
			this.setState({ option : this.props.option})
		}
	}


	render () {
		if (!this.state) return null
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
			'a svg': {
				transform: 'rotate(0deg)',
				marginTop: '2px'
			},
			':hover': {
				filter: " brightness(85%)"
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

		return (
			<div onClick={()=>{ this.handleClick(event) && this.props.onClick()}} className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`} onClick={this.handleClick}>
				<li className={css(liStyle)}>
					{this.renderDescription()}
					{this.renderNoData()}
					{this.renderCheckbox()}
					{this.renderLink()}
					{this.renderTitle()}
				</li>
			</div>
		);


	}

	renderDescription() {
		if (!this.description) return null

		return <Text variant='description' text={this.description}/>
	}

	renderTitle() {
		if (!this.state.option.title) return null

		return <Title priority={5} text={this.state.option.title}/>
	}

	renderLink() {
		if (!this.state.option.navigation || !this.text) return null

		return <Link text={this.text} isExternal={this.state.option.isExternal} href={this.state.option.navigation}/>
	}

	renderCheckbox() {
		if (!this.props.checkbox) return null

		return <Checkbox
			textColor={'inherit'}
			backgroundColorChecked={this.props.backgroundColorChecked ? this.props.backgroundColorChecked : 'tomato'}
			onChange={()=>this.handleClick(event) && this.props.onChange}
			checked={this.state.option.checked}
			id={this.text}/>
	}

	renderNoData() {
		if (!this.state.option || this.state.option.length) return null

		return <Text variant='disabled' cursor='default' textColor='inherit' text={this.textNoData}/>
	}

	capitalize(s) {
		return s[0].toUpperCase() + s.slice(1)
	}

	handleClick = () => {
		if (this.props.checkbox) {
			let data = this.state.option
			let checked = !this.state.option.checked
			data.checked = checked
			this.setState({ option: data },
				()=> {this.props.onSelect(this.state.option)}
			)
		}
	}
}
export default ListItem

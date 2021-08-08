import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Checkbox, Text, Link, Title } from './../../index.js'

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			variant: (props.variant ? props.variant : 'default'),
			option:(props.option ? props.option : {}),
			textSelect: this.props.number >=0 ? this.props.textSelectAll : null
		}
		this.textNoData = null
	}

	componentDidMount() {
		let data = this.state.option
		if (data.value && this.props.checkbox) data.checked = false
		else if (data.textSelectAll) data.allSelected = false

		this.setState({option: data })
	}

	componentDidUpdate(prevProps) {
		if (prevProps.option !== this.props.option ||
			prevProps.number !== this.props.number ||
			prevProps.numberOfOptions !== this.props.numberOfOptions) {
			let text = this.state.textSelect
			text = this.updateTextSelect(text)
			this.setState({
				option : this.props.option,
				textSelect: text
			})
		}
	}


	render () {
		if (!this.state) return null
		if (this.props.textNoData) this.textNoData = this.capitalize(this.props.textNoData)
		let color =  this.props.backgroundColor ? this.props.backgroundColor : 'white'

		let optionStyle = {
			'li':{
				display: 'flex',
				flexDirection: 'column',
			},
			cursor: 'pointer',
			width: '100%',
			height: '100%',
			backgroundColor: color,
			color: this.props.textColor ? this.props.textColor : 'tomato',
			minHeight:'1.8rem',
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit',
			borderRadius: '2px',
			userSelect: 'none',
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
				filter: (this.props.textNoData || (this.props.option && this.props.option.title) ? null : "brightness(85%)")
			},
		}
		let liStyle = {
			fontFamily: 'inherit',
			lineHeight: '1.5rem',
			display: 'flex',
			width: '100%',
			margin:'.5rem',
			textAlign: 'center',
			verticalAlign: 'middle'
		}

		return (
			<div onClick={()=>{ this.handleClick(event) && this.props.onClick()}} className={`listItem-kariu--wrapper ${css(optionStyle)} ${this.props.className}`} onClick={this.handleClick}>
				<li className={css(liStyle)}>
					{this.renderSelectAll()}
					{this.renderTitle()}
					{this.renderText()}
					{this.renderNoData()}
					{this.renderCheckbox()}
					{this.renderLink()}
					{this.renderDescription()}
				</li>
			</div>
		);


	}

	renderDescription() {
		if (!this.state.option || !this.state.option.description || !this.state.option.description.length) return null

		return <Text onClick ={()=>this.props.onClick} fontFamily={this.props.fontFamily ? this.props.fontFamily : 'inherit'} variant='description' text={this.capitalize(this.state.option.description)}/>
	}

	renderTitle() {
		if (!this.state.option || !this.state.option.title) return null

		return <Title align='left' fontFamily={this.props.fontFamily ? this.props.fontFamily : 'inherit'} priority={5} text={this.state.option.title}/>
	}

	renderLink() {
		if (!this.state.option || !this.state.option.navigation || !this.state.option.text) return null
		// console.log('link');

		return <Link textColor='inherit' fontFamily={this.props.fontFamily} text={this.capitalize(this.state.option.text)} isExternal={this.state.option.isExternal} href={this.state.option.navigation}/>
	}

	renderCheckbox() {
		if (!this.props.checkbox || !this.state.option) return null

		return <Checkbox
			fontFamily={this.props.fontFamily}
			textColor='inherit'
			backgroundColorChecked={this.props.backgroundColorChecked ? this.props.backgroundColorChecked : 'tomato'}
			onChange={()=>this.handleClick(event) && this.props.onChange}
			checked={this.state.option.checked}
			id={this.state.option.text}/>
	}
	renderText() {
		if (!this.state.option || !this.state.option.text || this.props.checkbox || this.state.option.navigation) return null

		return <Text cursor='pointer' text={this.capitalize(this.state.option.text)} value={this.state.option.value}/>
	}

	renderNoData() {
		if(!this.props.textNoData) return null

		return <Text variant='disabled' cursor='default' textColor='inherit' text={this.textNoData}/>
	}

	renderSelectAll() {
		if (!this.state.textSelect || this.state.option) return null

		return <Text onClick={()=>this.handleClick()} variant='disabled' cursor='default' textColor='inherit' text={this.state.textSelect}/>
	}

	capitalize(s) {
		return s[0].toUpperCase() + s.slice(1)
	}

	updateTextSelect(text) {
		if (!this.props.numberOfOptions) return null
		if (text === this.props.textUnselectAll && this.props.number !== this.props.numberOfOptions) {
			text = this.props.textSelectAll
		} else if (text === this.props.textSelectAll && this.props.number > 0) {
			text = this.props.textUnselectAll
		}

		return text
	}

	handleClick = () => {
		if (this.props.checkbox || this.state.textSelect) {
			let data = this.state.option
			let text = this.state.textSelect
			if (this.props.textSelectAll || this.props.textUnselectAll) {
				this.props.onSelectAll(text)
				if (text === this.props.textSelectAll) text = this.props.textUnselectAll
				else if (text === this.props.textUnselectAll) text = this.props.textSelectAll
				this.setState({ textSelect: text })
			} else {
				if (data.checked === true) data.checked = false
				else data.checked = true
				this.setState({ option: data },
					()=> {this.props.onSelect(data)}
				)
			}
		}
	}
}
export default ListItem

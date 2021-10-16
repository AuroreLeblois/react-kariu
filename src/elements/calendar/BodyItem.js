import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Dot } from './../../index.js'

class BodyItem extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)
		this.state = {
			hasFocus: false,
			loading: (props.loading ? props.loading : false)
		}
		this.dayPickerRef = React.createRef();
		this._isMounted = false
	}

	componentDidMount() {
		this._isMounted = true
		if (this.dayPickerRef.current) window.addEventListener('click', this.handleClickOutside, true)
	}

	componentWillUnmount() {
		this._isMounted = false
		if (this.dayPickerRef.current) window.removeEventListener('click', this.handleClickOutside, true)
	}

	// Renderers ----------------------------------------------------------------
	render() {
		// Empty cell
		const isEmpty = (
			!this.props.item // Vacation or unavailability
			&& !this.props.number // Datepicker
		)

		// Cell background color
		const bgColor = this.handleBackgroundColor(isEmpty)

		const styleTd = {
			position: 'relative',
			height: '4.5rem',
			padding: '0.125rem',
			verticalAlign: 'middle',
			cursor: (isEmpty ? 'default' : 'pointer'),
			backgroundColor: (
				// Holiday > Weekend > Default
				this.props.isHoliday
					? 'grey'
					: this.props.isWeekEnd
						? 'lightgrey'
						: 'inherit'
				)
			// (isEmpty ? bgColor : 'inherit')
		}

		return (
			<td className={css(styleTd)} onClick={this.props.onClick}>
				{this.renderCell(isEmpty,bgColor)}
			</td>
		)
	}


	renderCell(isEmpty,bgColor) {
		if (isEmpty) return null

		const styleText = {
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit',
			fontSize: '0.75rem',
			lineHeight: '1rem',
			color: this.handleForegroundColor(),
			textAlign: 'center',
			cursor: 'pointer'
		}

		let styleDiv = {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			flexWrap: 'nowrap',
			alignItems: 'center',
			justifyContent: 'center',
			height: '99%', // hack for full height div when we display only an unavailability_type_code
			border: '0.125rem'+' solid '+bgColor,
			borderRadius: '4px',
			padding: '0rem'+' '+'0.5rem',
			backgroundColor: bgColor,
			':hover': { filter: 'brightness(90%)'},
			':active': { backgroundColor: bgColor},
			':focus': { backgroundColor: bgColor}
		}

		let content = null
		//later
		// if (this.props.number) {
		// 	content = this.renderDatepickerItem()
		// }
		if (!this.props.item.unavailability_code) {
			// infos
			content = this.renderInfo(styleText)
		} else {
		// 	// Unavailability
			content = this.renderUnavailability(styleText)
		}

		return (
			<div className={css(styleDiv)}>
				{content}
			</div>
		)
	}

	renderInfo(styleText) {
		return (
			<React.Fragment>
				{this.renderDots()}
				{this.renderActivityCode(styleText)}
				{this.renderTimes(styleText)}
			</React.Fragment>
		)
	}

	renderDots() {
		if (!this.props.item.marked && !this.props.item.special) return null

		const styleStickers = {
			position: 'absolute',
			top:'0.125rem' ,
			left:  '0.125rem',
			display: 'flex',
			flexFlow: 'row nowrap'
		}

		let content = []

		// Unavailability on a part of a item
		if (this.props.item.special) content.push(
			<Dot key='special' special={true}/>
		)

		// Bonus or marked (a specific type of bonus)
		if (this.props.item.marked) content.push(
			<Dot key='marked' marked={true}/>
		)

		return (
			<span className={css(styleStickers)}>
				{content}
			</span>
		)
	}

	renderActivityCode(styleText) {
		// TODO user prefs can hide this
		const styleCode = {
			...styleText,
			fontSize:'0.85rem',
			lineHeight: '1rem'
		}
		return (
			<span className={css(styleCode)}>
				{this.props.item.activity_code}
			</span>
		)
	}

	renderUnavailability(styleText) {
		return (
			<React.Fragment>
				<span className={css(styleText)}>
					{this.props.item.unavailability_code}
				</span>
				{this.renderDots()}
				{this.renderTimes(styleText)}
			</React.Fragment>
		)
	}

	renderTimes(styleText) {
		if (!this.props.item.time_start && !this.props.item.unavailability_time_start) return null

		const timeStart = (
			this.props.item.unavailability_code
			? this.props.item.unavailability_time_start
			: this.props.item.time_start
		)

		const timeEnd = (
			this.props.item.unavailability_code
			? this.props.item.unavailability_time_end
			: this.props.item.time_end
		)

		return (
			<React.Fragment>
				<span className={css(styleText)}>
					{timeStart}
				</span>
				<span className={css(styleText)}>
					{timeEnd}
				</span>
			</React.Fragment>
		)
	}


	// Functions ----------------------------------------------------------------
	handleClickOutside = (event) => {
		const node = this.dayPickerRef.current
		if (!node.contains(event.target)) this.setState({hasFocus: false})
	}

	handleBackgroundColor (isEmpty, isExternal = false) {
		// Datepicker item

		// if (this.props.number) return "white"

		// Empty cell with no data
		if (isEmpty) return null

		const item = this.props.item
		if (item.unavailability_code) {
			// Unavailability
			return "#ab88ab"
		} else if (
			// Day
			item.time_end > item.time_start
		) {
			return "rgb(238, 229, 2)"
		} else if (
			// Night
			item.time_end < item.time_start
		) {
			return 'rgb(103, 127, 233)'
		}
	}

	handleForegroundColor (isEmpty, isExternal = false) {
		if (this.props.number) return null // Datepicker item
		if (isEmpty) return 'inherit'

		if (
			// Unavailability
			this.props.item.unavailability_code
		) {
			return 'rgb(66, 41, 102)'
		} else if (
			// Day
			this.props.item.time_end > this.props.item.time_start
		) {
			return 'rgb(119, 130, 30)'
		} else if (
			// Night
			this.props.item.time_end < this.props.item.time_start
		) {
			return 'rgb(18, 34, 119)'
		}
	}
}

BodyItem.propTypes = {
	item: PropTypes.object,
	isWeekEnd: PropTypes.bool,
	isHoliday: PropTypes.bool,
	number: PropTypes.number,
	loading: PropTypes.bool
}

export default BodyItem

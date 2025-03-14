import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Text } from './../../index.js'


class HeadItem extends React.Component {

	constructor(props) {
		super(props)
	}

	// Renderers ----------------------------------------------------------------
	render() {
		if (!this.props.date) return null

		const styleTh = {
			minWidth: (
				//for future custom datePicker
				this.props.date.number
					? '2.5rem'
					: 'auto'
			),
			cursor: 'default',
			'span':{
				fontFamily: (this.props.fontFamily ? this.props.fontFamily : 'inherit'),
			}
		}

		const styleText = {
			fontSize: '1rem',
			lineHeight: '1.2rem',
			fontWeight: (
				this.props.date.isToday
					? 'regular'
					: 'semibold'
			),
			color: (this.props.date.isToday ? 'hsl(194, 66%, 52%)' : 'grey')
		}

		const styleCurrentDay = {
			margin: '0.125rem'+' '+0,
			padding: '0.125rem'+' '+0,
			borderBottom: (
				this.props.date.isToday
					? `${'0.125rem'} solid ${'hsl(194, 66%, 52%)'}`
					: 'none'
			)
		}

		let number = (this.props.date.number ? this.props.date.number : null)
		if (number && this.props.date.day && number < 10 && number.length < 2) number = '0'+number

		if (number && this.props.date.day) {
		// Calendar
			return (
				<th className={css(styleTh)}>
					<div className={css(styleCurrentDay)}>
						<div className={css(styleText)}>
							{this.props.date.day.toUpperCase()}
						</div>
						<div className={css(styleText)}>
							{number}
						</div>
					</div>
				</th>
			)
		} else if (!number && this.props.date.day) {
			// Datepicker
			return (
				<th className={css(styleTh)}>
					<span className={css(styleText)}>
						{this.props.date.day.toUpperCase()}
					</span>
				</th>
			)
		}
	}

}

HeadItem.propTypes = {
	date: PropTypes.object
}

export default HeadItem

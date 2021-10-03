import React from 'react'
import PropTypes from 'prop-types'
import { HeadItem } from './../../index.js'
import { css } from '@emotion/css'
import moment from 'moment'

class HeadCols extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)
		this.state = {
			language: props.language ? props.language : 'en'
		}
//for later see if can use full moment
		this.weekdayshort = {
			'fr': ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
			'en': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		}

		this.currentDay = parseInt(moment().format('DD'))
		this.currentMonth = parseInt(moment().format('MM'))
		this.currentYear = parseInt(moment().format('YYYY'))

		this._isMounted = false
	}

	componentDidMount() {
		this._isMounted = true
	}

	componentDidUpdate(prevProps) {
		if (prevProps.language !== this.props.language) {
			this._isMounted && this.setState({ language: this.props.language })
		}
	}

	// Renderers ----------------------------------------------------------------
	render() {
		let days = []

		if (
			!this.props.yearSelected
			&& !this.props.monthSelected
		) {
			days = this.weekdayshort[this.state.language]
		} else if (this.props.yearSelected && this.props.monthSelected) {
			const daysInMonth = moment(`${this.props.yearSelected}-${this.props.monthSelected}`).daysInMonth()

			for (let index = 1; index <= daysInMonth; index ++) {
				let day = index
				if (day < 10) day = '0'+day
				const date = moment(`${this.props.yearSelected}-${this.props.monthSelected}-${day}`).format('YYYY-MM-DD')

				days.push({
					day: this.getDayShort(day),
					number: day,
					isToday: this.dateIsToday(index, this.props.monthSelected, this.props.yearSelected)
				})
			}
		}
		const array = []

		days.map((day, index) => (
			array.push(
				<HeadItem
					key={index+'Week'}
					date={{
						day: (day.day ? day.day : day),
						number: (day.number ? day.number : null),
						isToday: (day.isToday ? day.isToday : null)
					}}
				/>
			)
		))
		return array
	}

	dateIsToday = (day, month, year) => {
		if (day === this.currentDay
			&& month == this.currentMonth
			&& year === this.currentYear) {
				return true
			}
		return false
	}

	getDayShort(day) {
		const date = new Date(Date.UTC(this.props.yearSelected, this.props.monthSelected-1, day))
		let dayShort = ''
		if (this.state.language === 'en') {
			dayShort = moment(date).format('ddd')
		} else {
			dayShort = new Intl.DateTimeFormat('fr-FR', { weekday: 'short'}).format(date)
			dayShort = dayShort.slice(0, -1)
		}
		return dayShort
	}

}

HeadCols.propTypes = {
	language: PropTypes.string.isRequired
}

HeadCols.defaultProps = {
	language: 'en'
}

export default HeadCols

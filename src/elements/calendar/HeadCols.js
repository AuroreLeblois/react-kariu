import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HeadItem } from './../../index.js'
import { css } from '@emotion/css'
import moment from 'moment'
//for later see if can use full moment
 const weekdayshort = {
	'fr': ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
	'en': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
};
const currentDay = parseInt(moment().format('DD'));
const currentMonth = parseInt(moment().format('MM'));
const currentYear = parseInt(moment().format('YYYY'));


const HeadCols = (props) => {
	// Renderers ----------------------------------------------------------------
	let days = [];

  const dateIsToday = (day, month, year) => {
    if (day === currentDay
      && month == currentMonth
      && year === currentYear) {
        return true
      }
    return false
  }

  const getDayShort = (day) => {
    const date = new Date(Date.UTC(props.yearSelected, props.monthSelected-1, day))
    let dayShort = ''
    if (props.language === 'en') {
      dayShort = moment(date).format('ddd')
    } else {
      dayShort = new Intl.DateTimeFormat('fr-FR', { weekday: 'short'}).format(date)
      dayShort = dayShort.slice(0, -1)
    }
    return dayShort
  }

	if (
		!props.yearSelected
		&& !props.monthSelected
	) {
		days = weekdayshort[props.language];
	} else if (props.yearSelected && props.monthSelected) {
		const daysInMonth = moment(`${props.yearSelected}-${props.monthSelected}`).daysInMonth()

		for (let index = 1; index <= daysInMonth; index ++) {
			let day = index
			if (day < 10) day = '0'+day
			const date = moment(`${props.yearSelected}-${props.monthSelected}-${day}`).format('YYYY-MM-DD')

			days.push({
				day: getDayShort(day),
				number: day,
				isToday: dateIsToday(index, props.monthSelected, props.yearSelected)
			})
		}
	}
	const array = []

	days.map((day, index) => (
		array.push(
			<HeadItem
				fontFamily={(props.fontFamily ? props.fontFamily : 'inherit')}
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

HeadCols.propTypes = {
	language: PropTypes.string.isRequired
}

HeadCols.defaultProps = {
	language: 'en'
}

export default HeadCols

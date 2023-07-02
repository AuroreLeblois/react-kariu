import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Dot } from './../../index.js'

const BodyItem = (props) => {
		// Empty cell

    // Functions ----------------------------------------------------------------
    const renderInfo = (styleText) => {
      return (
        <React.Fragment>
          { renderDots()}
          { renderActivityCode(styleText)}
          { renderTimes(styleText)}
        </React.Fragment>
      )
    }

    const renderActivityCode = (styleText) => {
      const styleCode = {
        ...styleText,
        fontSize:'0.85rem',
        lineHeight: '1rem'
      }
      return (
        <span className={css(styleCode)}>
          {props.item.activity_code}
        </span>
      )
    }

    const renderUnavailability = (styleText) => {
      return (
        <React.Fragment>
          <span className={css(styleText)}>
            {props.item.unavailability_code}
          </span>
          { renderDots()}
          { renderTimes(styleText)}
        </React.Fragment>
      )
    }

    const renderTimes = (styleText) => {
      if (!props.item.time_start && !props.item.unavailability_time_start) return null

      const timeStart = (
        props.item.unavailability_code
        ? props.item.unavailability_time_start
        : props.item.time_start
      )

      const timeEnd = (
        props.item.unavailability_code
        ? props.item.unavailability_time_end
        : props.item.time_end
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

    const renderDots = () => {
      if (!props.item.marked && !props.item.special) return null

      const styleStickers = {
        position: 'absolute',
        top:'0.125rem' ,
        left:  '0.125rem',
        display: 'flex',
        flexFlow: 'row nowrap'
      }

      let content = []

      // Unavailability on a part of a item
      if (props.item.special) content.push(
        <Dot key='special' special={true}/>
      )

      // Bonus or marked (a specific type of bonus)
      if (props.item.marked) content.push(
        <Dot key='marked' marked={true}/>
      )

      return (
        <span className={css(styleStickers)}>
          {content}
        </span>
      )
    }

    const handleClickOutside = (event) => {
      const node =  dayPickerRef.current
      if (!node.contains(event.target))  setState({hasFocus: false})
    }

    const handleBackgroundColor = (isEmpty) => {
      // Empty cell with no data
      if (isEmpty) return null

      const item = props.item
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

    const handleForegroundColor = (isEmpty) => {
      if (props.number) return null // Datepicker item
      if (isEmpty) return 'inherit'

      if (
        // Unavailability
        props.item.unavailability_code
      ) {
        return 'rgb(66, 41, 102)'
      } else if (
        // Day
        props.item.time_end > props.item.time_start
      ) {
        return 'rgb(119, 130, 30)'
      } else if (
        // Night
        props.item.time_end < props.item.time_start
      ) {
        return 'rgb(18, 34, 119)'
      }
    }

		const isEmpty = (
			!props.item // Vacation or unavailability
			&& !props.number // Datepicker
		)

		// Cell background color
		const bgColor = handleBackgroundColor(isEmpty);

		const styleTd = {
			position: 'relative',
			height: '2.95rem',
			padding: '0.125rem',
			verticalAlign: 'middle',
			cursor: (isEmpty ? 'default' : 'pointer'),
			backgroundColor: (
				// Holiday > Weekend > Default
				props.isHoliday
					? 'grey'
					: props.isWeekEnd
						? 'lightgrey'
						: 'inherit'
				)
			// (isEmpty ? bgColor : 'inherit')
		}

	const renderCell = (isEmpty,bgColor) => {
		if (isEmpty) return null

		const styleText = {
			fontFamily: props.fontFamily ? props.fontFamily : 'inherit',
			fontSize: '0.75rem',
			lineHeight: '1rem',
			color: handleForegroundColor(isEmpty),
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
		// if (props.number) {
		// 	content =  renderDatepickerItem()
		// }
		if (!props.item.unavailability_code) {
			// infos
			content = renderInfo(styleText)
		} else {
		// 	// Unavailability
			content = renderUnavailability(styleText)
		}


		return (
			<div className={css(styleDiv)}>
				{content}
			</div>
		)
	}
  return (
    <td className={css(styleTd)} onClick={props.onClick}>
      {renderCell(isEmpty, bgColor)}
    </td>
  )

}

BodyItem.propTypes = {
	item: PropTypes.object,
	isWeekEnd: PropTypes.bool,
	isHoliday: PropTypes.bool,
	number: PropTypes.number,
	loading: PropTypes.bool
}

export default BodyItem

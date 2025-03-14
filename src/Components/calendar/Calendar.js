import { useState } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import moment from 'moment'
import { Avatar, HeadCols, HeadNav, BodyItem } from './../../index.js'

const Calendar = (props) => {
	// Renderers
  const [yearSelected, setYearSelected] = useState();
  const [monthSelected, setMonthSelected] = useState();
  
  const renderRows = () => {
    // Empty schedule
    if (!props.vhead.length && !props.loading) {
      const daysInMonth = moment(`${props.yearSelected}-${props.monthSelected}`).daysInMonth() + 1
      return (
        <tr className={`${props.className} kariu-calendar--row`} style={{ padding: '2rem'}}>
          <td
            colSpan={daysInMonth}
            style={{
              padding: '2rem',
              textAlign: 'center',
              backgroundColor: 'lightgrey'
            }}
          >
            {
              props.infosUnavailable
            }
          </td>
        </tr>
      )
    }
    if (!props.vhead.length && props.loading) {
      const daysInMonth = moment(`${props.yearSelected}-${props.monthSelected}`).daysInMonth() + 1
      return (
        <tr style={{ padding: '2rem' }}>
          <td
            colSpan={daysInMonth}
            style={{
              padding: '2rem',
              textAlign: 'center',
              backgroundColor: 'lightgrey'
            }}
          >
            {
              props.textLoading
            }
          </td>
        </tr>
      )
    }

    // Cells
    let rows = []
    for (let i=0; i < props.vhead.length; i++) {
      const name = props.vhead[i].name
      rows.push(
        <tr key={i+name} style={{ minHeight: '16px' }}>
          {renderCells(name)}
        </tr>
      )
    }
    return rows
  }


  const renderCells = (name) => {
    // Vertical header cells
    let cellValue = name
    if (!name) cellValue = props.noNameText
    let cells = []
    const infos = props.infos

    let styleTd = {
      cursor: 'default',
      verticalAlign: 'middle'
    }

    const styleTdContent = {
      padding: '2rem',
      color: (
        name
          ? 'blue dark'
          : 'tomato'
      ),
      whiteSpace: 'nowrap'
    }
    let avatar = null
    if (name && props.showAvatar) {
      avatar = (
        <Avatar
          loading={props.loading}
          name={name}
          alt={name}
        />
      )
    }
    let stylediv = {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center'
    }

    cells.push(
      <td key={cellValue+'td'} className={css(styleTd)} onClick={()=>props.onclickName}>
        <div className={css(stylediv)}>
          {avatar}
          <span className={css(styleTdContent)}>
            {cellValue}
          </span>
        </div>
      </td>
    )

    // Row cells
    const daysInMonth = moment(`${props.yearSelected}-${props.monthSelected}`).daysInMonth()

    for (let index = 0; index < daysInMonth; index++) {
      let day = index + 1
      if (day < 10) day = '0'+day
      const date = `${props.yearSelected}-${props.monthSelected}-${day}`
      const dateWithoutYear = `${props.monthSelected}-${day}`
      const indexOfDay = moment(date).isoWeekday()
      let isWeekEnd = (indexOfDay === 6 || indexOfDay === 7)
      const isHoliday = (!props.holidays ? false : props.holidays.some(element => element.month_day === dateWithoutYear))

      styleTd = {
        ...styleTd,
        backgroundColor: ( // Holiday > Weekend > Default
          isHoliday
            ? 'grey'
            : isWeekEnd
              ? 'rgb(218, 218, 218)'
              : 'inherit'
          )
            }
      let cell = []
      for (let ind = 0; ind < infos.length; ind++) {
        if (
          moment(infos[ind].date_start).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')
          && (name === infos[ind].name || name === infos[ind].site_name)
        ) {
          cell.push(infos[ind])
        }
      }

      cells[index+1] = (
        <td key={'task'+index} className={css(styleTd)}>
          {renderCellContent(cell, indexOfDay,isWeekEnd, isHoliday)}
        </td>
      )
    }
    return cells
  }

  const renderCellContent = (array, indexOfDay, isWeekEnd, isHoliday) => {
    if (!array.length) return null

    let content = []
    array.map((element, index) => content.push(
      <BodyItem
        key={'task'+element.resource_fullname+index}
        isWeekEnd={isWeekEnd}
        isHoliday={isHoliday}
        item={element}
        onClick={()=>{props.onClickItem && props.onClickItem(element)}}
      />
    ))
    return content
}
const renderHeadCols = () => {
  return (
    <HeadCols
      language={props.language}
      monthSelected={props.monthSelected}
      yearSelected={props.yearSelected}
    />
  )
}

const renderHeadNav = () => {
  return (
    <th style={{ verticalAlign: 'middle' }}>
      <div>
        <HeadNav
          fontFamily={(props.fontFamily ? props.fontFamily : 'inherit')}
          date={`${yearSelected}-${props.monthSelected}-01`}
          language={props.language}
          onClick={(newDate) => {
            newDate.month = newDate.month+1
            if (newDate.month < 10) newDate.month = '0'+newDate.month
            setYearSelected(newDate.year);
            setMonthSelected(newDate.month);

            () => props.onDateChange && props.onDateChange(
              moment(`${props.yearSelected}-${props.monthSelected}`).format('YYYY-MM')
            )
          }}
        />
      </div>
    </th>
  )
}

const renderThead = () => {
  return (
    <thead>
      <tr>
        {renderHeadNav()}
        {renderHeadCols()}
      </tr>
    </thead>
  )
}

		const styleTable = {
			flex: '1 1 auto',
			margin: '2rem',
			marginRight: '2rem',
			userSelect: 'none',
			fontFamily: props.fontFamily ? props.fontFamily : 'inherit'
		}

		return (
			<table className={`${css(styleTable)} kariu-calendar--table`}>
				{renderThead()}
				<tbody>
					{renderRows()}
				</tbody>
			</table>
		)
	}


Calendar.propTypes = {
	fontFamily: PropTypes.string,
	infos: PropTypes.array,
	vhead: PropTypes.array,
	monthSelected: PropTypes.number,
	yearSelected: PropTypes.number,
	showAvatar: PropTypes.bool,
	language: PropTypes.string.isRequired,
	noNameText: PropTypes.string.isRequired,
	onClickItem: PropTypes.func,
	onClickName: PropTypes.func,
	infosUnavailable: PropTypes.string,
	textLoading: PropTypes.string
}

Calendar.defaultProps = {
	loading: false,
	noNameText: 'Unaffected infos',
	showAvatar: false,
	language: 'en',
	infosUnavailable: "Here your own message for an empty calendar",
	textLoading: 'Custom loading text'
}

export default Calendar

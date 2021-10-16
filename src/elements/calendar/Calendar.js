import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import moment from 'moment'
import { Avatar, HeadCols, HeadNav, BodyItem } from './../../index.js'


class Calendar extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)
		this.state = {
			infos: (props.infos ? props.infos : []),
			vhead: (props.vhead ? props.vhead : []), // valeur de la première cellule (vertical header)
			monthSelected: (props.monthSelected ? props.monthSelected < 10 ? '0'+props.monthSelected : props.monthSelected : null),
			yearSelected: (props.yearSelected ? props.yearSelected : null)
		}
		this.daysInMonth = moment(`${this.state.yearSelected}-${this.state.monthSelected}`).daysInMonth()
		this._isMounted = false
	}

	componentDidMount() {
		this._isMounted = true
	}

	componentDidUpdate(prevProps) {
		if (
			prevProps.monthSelected !== this.props.monthSelected
			|| prevProps.yearSelected !== this.props.yearSelected
			|| prevProps.infos !== this.props.infos
			|| prevProps.vhead !== this.props.vhead
		) {
			this._isMounted && this.setState({
				monthSelected: (this.props.monthSelected <10 ? '0'+ this.props.monthSelected : this.props.monthSelected),
				yearSelected: this.props.yearSelected,
				infos: this.props.infos,
				vhead: this.props.vhead
			})
		}
	}


	// Renderers ----------------------------------------------------------------
	render() {
		const styleTable = {
			flex: (this.props.loading ? '1 1 auto' : '0 1 auto'),
			userSelect: 'none',
			fontFamily: this.props.fontFamily ? this.props.fontFamily : 'inherit'
		}

		return (
			<table className={`${css(styleTable)} kariu-calendar--table`}>
				{this.renderThead()}
				<tbody>
					{this.renderRows()}
				</tbody>
			</table>
		)
	}


	renderThead() {
		return (
			<thead>
				<tr>
					{this.renderHeadNav()}
					{this.renderHeadCols()}
				</tr>
			</thead>
		)
	}


	renderHeadNav() {
		return (
			<th style={{ verticalAlign: 'middle' }}>
				<div>
					<HeadNav
						date={`${this.state.yearSelected}-${this.state.monthSelected}-01`}
						language={this.props.language}
						onClick={(newDate) => {
							newDate.month = newDate.month+1
							if (newDate.month < 10) newDate.month = '0'+newDate.month
							this.setState({
									monthSelected: newDate.month,
									yearSelected: newDate.year
								},
								() => this.props.onDateChange && this.props.onDateChange(
									moment(`${this.state.yearSelected}-${this.state.monthSelected}`).format('YYYY-MM')
								)
							)
						}}
					/>
				</div>
			</th>
		)
	}


	renderHeadCols() {
		return (
			<HeadCols
				language={this.props.language}
				monthSelected={this.state.monthSelected}
				yearSelected={this.state.yearSelected}
			/>
		)
	}


	renderRows() {
		// Empty schedule
		if (!this.state.vhead.length && !this.props.loading) {
			const daysInMonth = moment(`${this.state.yearSelected}-${this.state.monthSelected}`).daysInMonth() + 1
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
							this.props.infosUnavailable
						}
					</td>
				</tr>
			)
		}
		if (!this.state.vhead.length && this.props.loading) {
			const daysInMonth = moment(`${this.state.yearSelected}-${this.state.monthSelected}`).daysInMonth() + 1
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
							this.props.textLoading
						}
					</td>
				</tr>
			)
		}

		// Cells
		let rows = []
		for (let i=0; i < this.state.vhead.length; i++) {
			const name = this.state.vhead[i].name
			rows.push(
				<tr key={i+name} style={{ minHeight: '16px' }}>
					{this.renderCells(name)}
				</tr>
			)
		}
		return rows
	}


	renderCells(name) {
		// Vertical header cells
		let cellValue = name
		if (!name) cellValue = this.props.noNameText
		let cells = []
		const infos = this.state.infos

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
		if (name && this.props.showAvatar) {
			avatar = (
				<Avatar
					loading={this.props.loading}
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
			<td key={cellValue+'td'} className={css(styleTd)} onClick={()=>this.props.onclickName}>
				<div className={css(stylediv)}>
					{avatar}
					<span className={css(styleTdContent)}>
						{cellValue}
					</span>
				</div>
			</td>
		)

		// Row cells
		this.daysInMonth = moment(`${this.state.yearSelected}-${this.state.monthSelected}`).daysInMonth()

		for (let index = 0; index < this.daysInMonth; index++) {
			let day = index + 1
			if (day < 10) day = '0'+day
			const date = `${this.state.yearSelected}-${this.state.monthSelected}-${day}`
			const dateWithoutYear = `${this.state.monthSelected}-${day}`
			const indexOfDay = moment(date).isoWeekday()
			let isWeekEnd = (indexOfDay === 6 || indexOfDay === 7)
			const isHoliday = (!this.props.holidays ? false : this.props.holidays.some(element => element.month_day === dateWithoutYear))

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
					{this.renderCellContent(cell, indexOfDay,isWeekEnd, isHoliday)}
				</td>
			)
		}
		return cells
	}

	renderCellContent(array, indexOfDay, isWeekEnd, isHoliday) {
		if (!array.length) return null

		let content = []
		array.map((element, index) => content.push(
			<BodyItem
				key={'task'+element.resource_fullname+index}
				isWeekEnd={isWeekEnd}
				isHoliday={isHoliday}
				item={element}
				onClick={()=>{this.props.onClickItem && this.props.onClickItem(element)}}
			/>
		))
		return content
	}
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

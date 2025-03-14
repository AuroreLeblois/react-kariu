import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import moment from 'moment'
import { Button, Icon } from './../../index.js'

class HeadNav extends React.Component {

	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		const currentIndexMonth = moment(this.props.date).month()
		const currentYear = moment(this.props.date).year()

		this.state = {
			monthIndex: currentIndexMonth,
			yearValue: currentYear
		}
		this._isMounted = false
	}

	componentDidMount() {
		this._isMounted = true
	}

	componentWillUnmount() {
		this._isMounted = false
	}


	// Renderers ----------------------------------------------------------------
	render() {
		// Définit la langue pour les mois
		const language = moment.locale(this.props.language)
		const listOfMonths = moment.months()

		const style = {
			display: 'flex',
			justifyContent:'space-around',
			alignItems: 'center'
		}
		const styleBtn = {
			fontSize: '0.5rem',
			'svg' : {
				transform: 'rotate(180deg)'
			}
		}

		return (
			<div className={`${css(style)} kariu-calendar--navigation`}>
				<Button
					fontFamily='inherit'
					className={css(styleBtn)}
					icon='arrow'
					variant='inline'
					backgroundColor={'lightgrey'}
					shape='round'
					size='xSmall'
					disabled={this.props.disabledLeft}
					onClick={() => this.previous()}
				/>
				<Button
					fontFamily='inherit'
					backgroundColor={'lightgrey'}
					label={this.renderText(listOfMonths)}
					variant='inline'
					size='medium'
					disabled={this.props.disabledMain}
					onClick={() => this.props.onClickMonth()}
				/>
				<Button
					fontFamily='inherit'
					backgroundColor={'lightgrey'}
					icon='arrow'
					variant='inline'
					size='xSmall'
					shape='round'
					disabled={this.props.disabledRight}
					onClick={() => this.next()}
				/>
			</div>
		)
	}

	renderText(listOfMonths) {
		return listOfMonths[this.state.monthIndex].charAt(0).toUpperCase() + listOfMonths[this.state.monthIndex].slice(1)
	}


	// Functions ----------------------------------------------------------------
	previous() {
		if (this.state.monthIndex === 0) {
			this._isMounted && this.setState({ monthIndex: 11, yearValue: this.state.yearValue - 1}, () => this.getData())
		} else {
			this._isMounted && this.setState({ monthIndex: this.state.monthIndex - 1 }, () => this.getData())
		}
	}

	next() {
		if (this.state.monthIndex === 11) {
			this._isMounted && this.setState({ monthIndex: -0, yearValue: this.state.yearValue + 1}, () => this.getData())
		} else {
			this._isMounted && this.setState({ monthIndex: this.state.monthIndex + 1 }, () => this.getData())
		}
	}

	getData() {
		return this.props.onClick({ month: this.state.monthIndex, year: this.state.yearValue })
	}
}


HeadNav.propTypes = {
	language: PropTypes.string.isRequired,
	disabledLeft: PropTypes.bool,
	disabledMain: PropTypes.bool,
	disabledRight: PropTypes.bool,
	onClick: PropTypes.func.isRequired
}

export default HeadNav

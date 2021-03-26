import React from "react"
import PropTypes from 'prop-types'
import {
	SvgLoading
} from "./../icon/components/index.js"
import './../reset.css'

export default class Loading extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading : (props.loading ? props.loading : true)
		}
	}

	render() {
		if (!this.props.loading) return null

		switch(this.props.icon) {
			case 'loadingDefault': return <SvgLoading {...this.props} />
			default: return <div />
		}
	}
}

Loading.propTypes = {
	loading: PropTypes.bool,
	icon: PropTypes.oneOf([
		'loadingDefault'
	])
}

Loading.defaultProps = {
	icon: 'loadingDefault',
	loading: true,
	color: 'tomato',
	height: '20rem',
	width: '20rem'
};

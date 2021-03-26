import React from "react"
import PropTypes from 'prop-types'
import {
	SvgLoading,
	SvgLoadingDots
} from "./../icon/components/index.js"
import './../reset.css'

export default class Loading extends React.Component {

	render() {
		if (this.props.loading === false) return null

		switch(this.props.icon) {
			case 'loadingDefault': return <SvgLoading {...this.props} />
			case 'loadingDots': return <SvgLoadingDots {...this.props}/>
			default: return <div />
		}
	}
}

Loading.propTypes = {
	loading: PropTypes.bool,
	icon: PropTypes.oneOf([
		'loadingDefault',
		'SvgSvgLoadingDots'
	])
}

Loading.defaultProps = {
	icon: 'loadingDefault',
	loading: true,
	color: 'tomato',
	height: '20rem',
	width: '20rem'
};

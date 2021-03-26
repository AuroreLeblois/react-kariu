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
			icon: (props.icon ? props.icon : null)
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.icon !== prevProps.icon) {
			this.setState({ icon: this.props.icon })
		}
	}

	render() {
		if (!this.props.loading) return null

		switch(this.props.icon) {
			case 'loadingDefault': return <SvgLoading {...this.props} />
		// case 'loadingDots': return <SvgLoadingDots {...this.props}/>
			default: return <div />
		}
	}
}

Loading.propTypes = {
	loading: PropTypes.bool,
	icon: PropTypes.oneOf([
		'loadingDefault',
		'LoadingDots'
	])
}

Loading.defaultProps = {
	icon: 'loadingDefault',
	loading: true,
	color: 'tomato',
	height: '20rem',
	width: '20rem'
};

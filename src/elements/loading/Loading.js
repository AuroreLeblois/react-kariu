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
			icon: (props.icon ? props.icon : null),
			loading: (props.loading ? props.loading : false)
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.icon !== prevProps.icon ||
			this.props.loading !== prevProps.loading) {
			this.setState({ icon: this.props.icon , loading: this.props.loading })
		}
	}

	render() {
		if (this.state.loading === false || !this.state.icon) return null
		switch(this.state.icon) {
			case 'loadingDefault': return <SvgLoading {...this.props}/>
		// case 'loadingDots': return <SvgLoadingDots {...this.props}/>
			default: return <div />
		}
	}
}

Loading.propTypes = {
	loading: PropTypes.bool.isRequired,
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

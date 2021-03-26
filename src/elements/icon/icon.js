import React from "react"
import PropTypes from 'prop-types'
import {
	SvgEyeOpen,
	SvgSoundOn,
	SvgSoundOff,
	SvgLoading
} from "./components/index.js"

export default class Icon extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		switch(this.props.icon) {
			case 'eye': return <SvgEyeOpen {...this.props} />
			case 'soundOff': return <SvgSoundOff {...this.props} />
			case 'soundOn': return <SvgSoundOn {...this.props} />
			case 'loading': return <SvgLoading {...this.props} />
			default: return <div />
		}
	}
}

Icon.defaultProps = {
	icon: PropTypes.oneOf([
		'eye',
		'soundOff',
		'soundOn',
		'loading'
	])
}

Icon.defaultProps = {
	icon: 'eye',
	color: 'inherit'
};

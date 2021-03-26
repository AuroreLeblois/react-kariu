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
			case 'eyeOpen': return <SvgEyeOpen {...this.props} />
			case 'soundOff': return <SvgSoundOff {...this.props} />
			case 'soundOn': return <SvgSoundOn {...this.props} />
			default: return <div />
		}
	}
}

Icon.defaultProps = {
	icon: PropTypes.oneOf([
		'eyeOpen',
		'soundOff',
		'soundOn'
	])
}

Icon.defaultProps = {
	icon: 'eyeOpen',
	color: 'tomato',
	height: '1rem',
	width: '1rem'
};

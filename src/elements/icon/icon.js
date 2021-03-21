import React from "react"
import PropTypes from 'prop-types'
import {
	SvgIconEye,
	SvgSoundOn,
	SvgSoundOff
} from "./components/index.js"

export default class Icon extends React.Component {

	constructor(props) {
		super(props)

	}

	render() {
		switch(this.props.icon) {
			case 'eye': return <SvgIconEye {...this.props} />
			case 'soundOff': return <SvgSoundOff {...this.props} />
			case 'soundOn': return <SvgSoundOn {...this.props} />
			default: return <div />
		}
	}
}

Icon.defaultProps = {
	icon: PropTypes.oneOf([
		'eye',
		'soundOff',
		'soundOn'
	])
}

Icon.defaultProps = {
	icon: 'eye',
	color: 'red'
};

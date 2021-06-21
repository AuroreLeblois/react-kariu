import React from "react"
import PropTypes from 'prop-types'
import {
	SvgCross,
	SvgEyeOpen,
	SvgEyeSlashed,
	SvgSoundOn,
	SvgSoundOff,
	SvgHamburger,
	SvgMarker,
	SvgSearch
} from "./components/index.js"

export default class Icon extends React.Component {

	render() {
		switch(this.props.icon) {
			case 'cross': return <SvgCross {...this.props} />
			case 'eyeOpen': return <SvgEyeOpen {...this.props} />
			case 'eyeSlashed' : return <SvgEyeSlashed {...this.props}/>
			case 'soundOff': return <SvgSoundOff {...this.props} />
			case 'soundOn': return <SvgSoundOn {...this.props} />
			case 'hamburgerMenu': return <SvgHamburger {...this.props} />
			case 'marker': return <SvgMarker {...this.props} />
			case 'search': return <SvgSearch {...this.props} />
			default: return <div />
		}
	}
}

Icon.propTypes = {
	icon: PropTypes.oneOf([
		'cross',
		'eyeOpen',
		'eyeSlashed',
		'soundOff',
		'soundOn',
		'search',
		'marker',
		'hamburgerMenu'
	]),
	color: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string
}

Icon.defaultProps = {
	icon: 'eyeOpen',
	color: 'tomato',
	height: '1rem',
	width: '1rem'
};

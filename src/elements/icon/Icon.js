import React from "react"
import PropTypes from 'prop-types'
import {
	Arrow,
	Cross,
	EyeOpen,
	EyeSlashed,
	SoundOn,
	SoundOff,
	Hamburger,
	Marker,
	Search
} from "./components/index.js"

export default class Icon extends React.Component {

	render() {
		switch(this.props.icon) {
			case 'arrow': return <Arrow {...this.props} />
			case 'cross': return <Cross {...this.props} />
			case 'eyeOpen': return <EyeOpen {...this.props} />
			case 'eyeSlashed' : return <EyeSlashed {...this.props}/>
			case 'soundOff': return <SoundOff {...this.props} />
			case 'soundOn': return <SoundOn {...this.props} />
			case 'hamburgerMenu': return <Hamburger {...this.props} />
			case 'marker': return <Marker {...this.props} />
			case 'search': return <Search {...this.props} />
			default: return <div />
		}
	}
}

Icon.propTypes = {
	icon: PropTypes.oneOf([
		'arrow',
		'cross',
		'eyeOpen',
		'eyeSlashed',
		'soundOff',
		'soundOn',
		'search',
		'marker',
		'hamburgerMenu'
	]).isRequired,
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

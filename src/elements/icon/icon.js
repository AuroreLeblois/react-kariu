import React from "react"
import PropTypes from 'prop-types'
import {
	// Related icons
	IcnAdd, IcnRemove,
	IcnArchive, IcnUnarchive,
	IcnArrowBack, IcnArrowDown, IcnArrowLinear,
	IcnEmail, IcnMessage, IcnPhone, IcnSmartphone,
	IcnEye, IcnEyeSlash,
	IcnTick, IcnIndeterminate,
	IcnMaximize, IcnMinimize,
	IcnMoreHorz, IcnMoreVert,
	IcnUnfoldLess, IcnUnfoldMore,
	// Lonely icons
	IcnBell, IcnCalendar, IcnClock, IcnCross, IcnDownload,
	IcnFilter, IcnInfo, IcnLocation,
	IcnMenu, IcnPerson, IcnSearch
} from "./components/index.js"

const Icon = props => {
	switch(props.icon) {
		case 'add': return <IcnAdd {...props} />
		case 'remove': return <IcnRemove {...props} />
		case 'archive': return <IcnArchive {...props} />
		case 'unarchive': return <IcnUnarchive {...props} />
		case 'arrow-back': return <IcnArrowBack {...props} />
		case 'arrow-down': return <IcnArrowDown {...props} />
		case 'arrow-linear': return <IcnArrowLinear {...props} />
		case 'email': return <IcnEmail {...props} />
		case 'message': return <IcnMessage {...props} />
		case 'phone': return <IcnPhone {...props} />
		case 'smartphone': return <IcnSmartphone {...props} />
		case 'eye': return <IcnEye {...props} />
		case 'eye-slash': return <IcnEyeSlash {...props} />
		case 'tick': return <IcnTick {...props} />
		case 'indeterminate': return <IcnIndeterminate {...props} />
		case 'maximize': return <IcnMaximize {...props} />
		case 'minimize': return <IcnMinimize {...props} />
		case 'more-horz': return <IcnMoreHorz {...props} />
		case 'more-vert': return <IcnMoreVert {...props} />
		case 'unfold-less': return <IcnUnfoldLess {...props} />
		case 'unfold-more': return <IcnUnfoldMore {...props} />
		case 'bell': return <IcnBell {...props} />
		case 'calendar': return <IcnCalendar {...props} />
		case 'clock': return <IcnClock {...props} />
		case 'cross': return <IcnCross {...props} />
		case 'download': return <IcnDownload {...props} />
		case 'filter': return <IcnFilter {...props} />
		case 'info': return <IcnInfo {...props} />
		case 'location': return <IcnLocation {...props} />
		case 'menu': return <IcnMenu {...props} />
		case 'person': return <IcnPerson {...props} />
		case 'search': return <IcnSearch {...props} />
		default: return <div />
	}
}

Icon.defaultProps = {
	icon: PropTypes.oneOf(['add', 'remove'])
}

export default Icon

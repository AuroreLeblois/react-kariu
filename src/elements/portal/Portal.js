import React, { Component } from "react"
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"

class Portal extends React.PureComponent {
	constructor(props) {
		super(props);
		this.root = document.getElementById(this.props.portalNodeId)
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.root);
	}
}

Portal.propTypes = {
	portalNodeId: PropTypes.string.isRequired
}

Portal.defaultProps = {
}

export default Portal

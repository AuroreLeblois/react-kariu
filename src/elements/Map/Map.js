import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './../../index.js'
import L from "leaflet"
import 'leaflet/dist/leaflet.css';
import './Map.css'
import { css } from '@emotion/css'

class Map extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			markers: (props.markers ? props.markers : []),
		}
		this._isMounted = false
	}

	componentDidMount() {
		this._isMounted = true
		this.initMap()
	}

	componentDidUpdate(prevProps) {
		if (this.props.markers !== prevProps.markers) {
			this.setState({ markers: this.props.markers }, ()=> this.updateMap())
		}
		if (this.props.zoom !== prevProps.zoom) {
			this.map.setZoom(this.props.zoom)
		}
		if (this.props.areaColor !== prevProps.areaColor) {
			this.setState({ areaColor: this.props.areaColor })
		}
	}

	componentWillUnmount() { this._isMounted = false }


	// Renderers ----------------------------------------------------------------
	render() {
		if (!this.state.markers.length) return null

		const styleMap = {
			overflow: 'hidden',
			height: this.props.height,
			width: this.props.width
		}
		return (
			<div id="map" className={this.props.className+' '+css(styleMap)}/>
		)
	}

	// Listeners ----------------------------------------------------------------
	updateMap() {
		if (!this.state.markers.length) return null
		// la fonction ne gère qu'un seul marker pour le moment
		this.map.removeLayer(this.marker)
		if (this.state.markers.length === 1) {
			this.map.panTo(new L.LatLng(this.state.markers[0].latitude, this.state.markers[0].longitude))
		}
		this.initMarkers()
	}

	initMarkers() {
		for (let index = 0; index < this.state.markers.length; index++) {
			if (this.state.markers[index].areaRadius) {
				this.marker = L.circle([this.state.markers[index].latitude, this.state.markers[index].longitude], {
					color: this.state.markers[index].areaColor ? this.state.markers[index].areaColor : 'tomato',
					fillColor: this.state.markers[index].areaFill ? this.state.markers[index].areaFill : 'red',
					fillOpacity: 0.5,
					radius: this.state.markers[index].areaRadius}).addTo(this.map)
			}
			else {
				this.marker = L.marker([this.state.markers[index].latitude, this.state.markers[index].longitude]).addTo(this.map)
			}
			if (this.state.markers[index].popupContent) {
				this.marker.bindPopup(this.state.markers[index].popupContent)
			}
		}
	}

	initMap() {
		if (!this.state.markers.length) return null

		let latitude = this.calculateAverage(this.state.markers,'latitude')
		let longitude = this.calculateAverage(this.state.markers, 'longitude')

		this.map = L.map("map", {
			center: [latitude, longitude],
			zoom: this.props.zoom ? this.props.zoom : 15,
			tileSize: 250,
			layers: [
				L.tileLayer((this.props.tileLayer ? this.props.tileLayer : "http://{s}.tile.osm.org/{z}/{x}/{y}.png"), {
					attribution: (this.props.attribution ? this.props.attribution : '&copy; <a href="https://github.com/AuroreLeblois">React-Kariu</a> AuroreLeblois')
				})
			]
		})
		this.layer = L.layerGroup().addTo(this.map)
		this.initMarkers()
	}

	calculateAverage(array, param) {
		let arrayOfValues = []
		for (let index = 0; index < array.length; index++) {
			let value = array[index][param]
			arrayOfValues.push(value)
		}
		let average =  arrayOfValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
		average = average / arrayOfValues.length
		return average

	}
}

Map.propTypes = {
	markers: PropTypes.array.isRequired,
	height: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	zoom: PropTypes.number
}

Map.defaultProps = {
	height: '30rem',
	width: '30rem',
	zoom: 3,
	tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
	attribution: '&copy; <a href="https://github.com/AuroreLeblois">AuroreLeblois</a> AuroreLeblois'
}

export default Map

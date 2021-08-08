import React from 'react'
import PropTypes from 'prop-types'
import L from "leaflet"
import 'leaflet/dist/leaflet.css'
import { css } from '@emotion/css'
import 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/images/marker-icon-2x.png'
import customIcon from './marker.png'

class Map extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			markers: (props.markers ? props.markers : []),
		}
		this._isMounted = false
		this.markers = []
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
		if (this.props.customMarkers !== prevProps.customMarkers ||
			this.props.markerWidth !== prevProps.markerWidth ||
			this.props.markerHeight !== prevProps.markerHeight) {
			this.updateMap()
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

		return ( <div id="map" className={'leafletMap-kariu '+this.props.className+' '+css(styleMap)}>
			</div>
		)
	}

	renderIcons(width, height) {
		let markerIcon = L.icon({
			iconUrl: (this.props.iconUrl ? this.props.iconUrl : customIcon),
			iconSize:     [width, height], // size of the icon
			iconAnchor:   [width/2, height], // point of the icon which will correspond to marker's location
			popupAnchor:  [0, -height] // point from which the popup should open relative to the iconAnchor
		});
		return markerIcon
	}

	// Listeners ----------------------------------------------------------------
	updateMap() {
		if (!this.state.markers.length) return null

		for (let i = 0; i < this.markers.length; i++){
			this.map.removeLayer(this.markers[i])
		}
		this.markers = []
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
			else if (this.props.customMarkers) {
				this.marker = L.marker([this.state.markers[index].latitude, this.state.markers[index].longitude],
					{icon: this.renderIcons(this.props.markerWidth, this.props.markerHeight)}).addTo(this.map)
			} else {
				this.marker = L.marker([this.state.markers[index].latitude, this.state.markers[index].longitude]).addTo(this.map)
			}
			if (this.state.markers[index].popupContent) {
				this.marker.bindPopup(this.state.markers[index].popupContent)
			}
			this.markers.push(this.marker)
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
	zoom: PropTypes.number,
	iconUrl: PropTypes.string,
	markerWidth: PropTypes.number,
	markerHeight: PropTypes.number,
	customMarkers: PropTypes.bool
}

Map.defaultProps = {
	customMarkers: true,
	height: '100%',
	width: '100%',
	zoom: 3,
	markerWidth: 32,
	markerHeight: 40,
	tileLayer: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
	attribution: '&copy; <a href="https://github.com/AuroreLeblois">AuroreLeblois</a> AuroreLeblois'
}

export default Map

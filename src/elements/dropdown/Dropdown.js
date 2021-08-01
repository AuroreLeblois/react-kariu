import React from 'react'
import {ReactDOM} from 'react-dom';
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import './../reset.css'
import { List, Button, Search } from './../../index.js'


class Dropdown extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			options: (props.options ? props.options : []),
			optionsSelected: props.optionsSelected ? props.optionsSelected : [],
			loading: (props.loading ? props.loading : false),
			show: (props.show ? props.show : false),
			variant: (props.variant ? props.variant : 'default'),
			pos: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.btnRef= React.createRef()
		this.listRef = React.createRef()
		this.btnDim =  null
		this.number = 0
	}

	componentDidUpdate(prevProps) {
		if (prevProps.options !== this.props.options ||
			prevProps.optionsSelected !== this.props.optionsSelected ||
			prevProps.show !== this.props.show
		) {
				this.setState({
					options: this.props.options,
					optionsSelected: this.props.optionsSelected,
					show: this.props.show
				})
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize, true)
		window.addEventListener('click', this.handleClickOutside.bind(this));
		this.handleResize()
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize, true)
		window.removeEventListener('click', this.handleClickOutside.bind(this));
	}

	render () {

		let dropStyle = {
			display: 'inline-grid',
			position: 'relative',
			overflowY: 'visible',
			flexDirection: (this.state.direction === 'bottom' ? 'column': 'column-reverse'),
			alignItems: 'center',
			'svg':{
				transform: this.rotate(),
				marginLeft: this.props.label.length ? '0.5rem' : '0.3rem',
				width: '1rem',
				height: '1rem'
			}
		}

		let dropdown = null

		switch (this.state.variant) {
			case 'search':
				dropdown = <Search
					data={this.state.options}
					label="Search in log"
					name="search"
					onChange={(data) => {this.handleSearch(data)}}
					headCols={this.props.headCols}
					placeholder="Search..."
					/>
			break;
			default:
				dropdown = <Button
					shape={this.props.variant === 'navigation' ? 'round' : 'basic'}
					backgroundColor={this.props.backgroundColorBtn ? this.props.backgroundColorBtn : 'tomato'}
					textColor = {this.props.textColorBtn ? this.props.textColorBtn : 'white'}
					icon={this.props.icon ? this.props.icon : 'arrow'}
					label={this.props.label}
					onClick={()=>{this.setState({show: !this.state.show})}}/>
			break;

		}
		return (
			<div onClick={()=>{
				if (this.state.variant === 'default' || ! this.state.show) this.setState({show: !this.state.show})}} ref={this.btnRef} className={css(dropStyle)}>
				{dropdown}
				{this.renderList()}
			</div>
		)

	}

	renderList () {
		let position = {
			borderRadius: '5px',
			position: 'absolute',
			...this.state.pos
		}
		return <div onClick={()=>this.setState({show: true})} ref={this.listRef} className={css(position)}>
		<List
			onChange={(data)=>this.handleChange(data)}
			backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : 'white'}
			backgroundColorChecked={this.props.backgroundColorBtn ? this.props.backgroundColorBtn : 'tomato'}
			textColor={this.props.textColor ? this.props.textColor : 'tomato'}
			options={this.state.options}
			show={this.state.show}/>
		</div>
	}

	handleChange = (data) => {
		this.optionsSelected = this.state.optionsSelected
		if (this.optionsSelected.includes(data)) this.optionsSelected = this.optionsSelected.filter(e => e !== data) // will return [remains]
		else this.optionsSelected.push(data)
		if (data !== event.target) this.setState({optionsSelected: this.optionsSelected}, ()=>{
			this.props.onChange && this.props.onChange(this.state.optionsSelected)
		})
	}

	handleClickOutside = (event) => {
		if (this.btnRef && this.btnRef.current && !this.btnRef.current.contains(event.target)) {
			this.setState({ show: false, options: this.props.options })
		}
	}
	handleSearch = (data) => {
		this.number = data.length
		this.setState({ options : data })
	}

	handleResize = () => {
		this.setState({pos : this.getPosRelativeTo(this.listRef.current, this.btnRef.current)})

	}
	rotate = () => {
		let rotation = null
		if (this.props.icon === 'arrow') {
			this.state.show ? rotation = 'rotate(-90deg)': rotation = 'rotate(90deg)'
		}
		return rotation
	}

	getPosRelativeTo = (refFrom, refTo = null) => {
		if (!refFrom) return null
		const refFromRect = refFrom.getBoundingClientRect()
		const refToRect = (refTo ? refTo.getBoundingClientRect() : refFrom.parentNode.getBoundingClientRect())

		let result = {
			left: 0, // leftBot default
			right: null,
			top: refToRect.height + 8
		}
		// rightBot
		if ((refToRect.left + refFromRect.width) > window.innerWidth) {
			result.left = null
			result.right = 0
		}
		// top
		if ((refFromRect.top + refFromRect.height) > window.innerHeight && (refFromRect.top - refFromRect.height) > 0) {
			result.top = -refFromRect.height
		}
		return result
	}
}

Dropdown.propTypes = {
	show: PropTypes.bool,
	icon:  PropTypes.oneOf([
		'arrow',
		'cross',
		'eyeOpen',
		'eyeSlashed',
		'soundOff',
		'soundOn',
		'search',
		'marker',
		'hamburgerMenu'
	]),
	label: PropTypes.string.isRequired,
	optionsSelected: PropTypes.array,
	backgroundColor: PropTypes.string,
	backgroundColorBtn: PropTypes.string,
	textColorBtn: PropTypes.string,
	backgroundColorSelected: PropTypes.string,
	textNoData: PropTypes.string,
	textColor: PropTypes.string,
	headCols: PropTypes.object
}

Dropdown.defaultProps = {
	icon: 'arrow'
}
export default Dropdown

import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import { Input } from '../../index.js'

class Search extends React.Component {
	// Constructor ----------------------------------------------------------------
	constructor(props) {
		super(props)

		this.state = {
			data: (props.data ? props.data : []),
			value: ''
		}
		this.datas = [...props.data]
	}

	componentDidUpdate(prevProps) {
		if (this.props.data !== prevProps.data) {
			this.setState({	data: this.props.data })
			if (!this.state.value) {
				this.datas = [...this.props.data]
			}
		}
	}

	onSearch = (value) => {
		this.setState({	value: value }, () => {
			if (this.state.value.length) {
				const datasFiltred = this.filter(this.datas, this.props.headCols, this.state.value)
				this.props.onChange && this.props.onChange(datasFiltred)
			} else {
				this.props.onChange && this.props.onChange(this.datas)
			}
		})
	}

	filter = (collection = [], filters = [], value = '') => {
		const filterKeys = Object.keys(filters)
		return collection.filter((data) => {
			return filterKeys.some((key) => {
				const val = (data[key] ? data[key].toString().toLowerCase() : '')
				if (!val.includes('pict')) return val.includes(value.toLowerCase())
			})
		})
	}

	render() {
		const styleAnimation = {
			'input': {
				maxWidth: this.props.animatedWidth ? '6rem' : 'auto'
			},
			'input:focus': {
				maxWidth: this.props.animatedWidth ? '16rem' : 'auto'
			}
		}

		return (
			<Input
				type="search"
				icon='search'
				name='Search'
				label={this.props.label}
				description={this.props.description}
				size={this.props.size}
				showBtnClear={this.props.showBtnClear}
				placeholder={this.props.placeholder}
				onChange={this.onSearch.bind(this)}
				className={css(styleAnimation)+' '+this.props.className}
			/>
		)
	}
}

Search.defaultProps = {
	animatedWidth: false
}

export default Search

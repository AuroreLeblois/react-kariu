import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';


const Dot = (props) => {
	if (!props.marked && !props.special) return null;

	const styleDot = {
		display: 'inline-block', // Needed for inline component and height behavior
		marginRight: '0.15rem',
		padding: '3px',
		borderRadius: '50%'
	}

	if (props.marked) {
		styleDot.backgroundColor = 'tomato';
	}

	if (props.special) {
		styleDot.backgroundColor = 'purple';
	}

	return (
		<span className={css(styleDot)}/>
	)
}

Dot.propTypes = {
	marked: PropTypes.bool,
	special: PropTypes.bool
}

export default Dot

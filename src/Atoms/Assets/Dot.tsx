import React from 'react';

interface DotProps {
	marked?: boolean;
	special?: boolean;
	className?: string;
	customColor?: string;
}

const Dot: React.FC<DotProps> = ({marked = false, special = false, className = null, customColor = null}) => {
	if (!marked && !special && !customColor) return null;

	let color = marked ? 'tomato' : 'purple';
	if (customColor) {
		color = customColor;
	}

	const styleDot = {
		display: 'inline-block', // Needed for inline component and height behavior
		marginRight: '0.15rem',
		padding: '3px',
		borderRadius: '50%',
		backgroundColor: color
	}

	return (
		<span className={`dot-kariu ${className}${special? ' special': null}${marked ? ' marked': null}`} style={styleDot}/>
	)
}

export default Dot; 
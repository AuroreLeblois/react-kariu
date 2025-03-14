import React from 'react';

interface DotProps {
	marked?: boolean;
	special?: boolean;
	className?: string;
}

const Dot: React.FC<DotProps> = (props) => {
	if (!props.marked && !props.special) return null;

	const styleDot = {
		display: 'inline-block', // Needed for inline component and height behavior
		marginRight: '0.15rem',
		padding: '3px',
		borderRadius: '50%',
		backgroundColor: props.marked ? 'tomato' : 'purple'
	}

	return (
		<span className={`avatar-kariu ${props.className}${props.special? ' special': null}${props.marked ? ' marked': null}`} style={styleDot}/>
	)
}

export default Dot; 
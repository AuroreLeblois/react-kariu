import React from 'react';

// Définition des types pour les props
interface TitleProps {
	text: string;
	priority?: number;
	align?: string;
	textColor?: string;
	fontFamily?: string;
	cursor?: string;
}

const Title: React.FC<TitleProps> = (props) => {
	// Renderers ----------------------------------------------------------------

	let style: React.CSSProperties = {
		display: 'block',
		color: (props.textColor ? props.textColor : 'tomato'),
		fontFamily: (props.fontFamily ? props.fontFamily : 'inherit'),
		wordBreak: 'break-word',
		fontWeight: 'regular',
		textAlign: props.align,
		letterSpacing: '-0.025rem',
		wordBreak: 'break-word',
		whiteSpace: 'pre-wrap',
		marginBottom: '0.55rem',
		marginTop: '0.25rem',
		cursor: props.cursor
	}

	switch (props.priority) {
		case 1:
			style.fontSize = '2.75rem'
			style.lineHeight = '3.5rem'
			return (
				<h1 className={css(style) + ' ' + props.className}>
					{props.text}
				</h1>
			)
		case 2:
			style.fontSize = '2rem'
			style.lineHeight = '2.75rem'
			return (
				<h2 className={css(style) + ' ' + props.className}>
					{props.text}
				</h2>
			)
		case 3:
			style.fontSize = '1.75rem'
			style.lineHeight = '2.5rem'
			return (
				<h3 className={css(style) + ' ' + props.className}>
					{props.text}
				</h3>
			)
		case 4:
			style.fontSize = '1.5rem'
			style.lineHeight = '2rem'
			style.fontWeight = 'semibold'
			return (
				<h4 className={css(style) + ' ' + props.className}>
					{props.text}
				</h4>
			)
		case 5:
			style.fontSize = '1.25rem'
			style.lineHeight = '1.95rem'
			style.fontWeight = 'bold'
			return (
				<h5 className={css(style) + ' ' + props.className}>
					{props.text}
				</h5>
			)
		case 6:
			style.fontSize = '1.15rem'
			style.lineHeight = '1.95rem'
			style.fontWeight = 'bold'
			style.letterSpacing = 'normal'
			return (
				<h6 className={css(style) + ' ' + props.className}>
					{props.text}
				</h6>
			)
		default: // m
			style.fontSize = '3.75rem'
			style.lineHeight = '4.5rem'
			return (
				<h1 className={css(style) + ' ' + props.className}>
					{props.text}
				</h1>
			)
	}
}

export default Title 
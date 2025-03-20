import React from 'react';

// Definition of types for props
interface TitleProps {
	/** The text to display in the title */
	text: string;
	/** The priority of the title, from 1 to 6 */
	priority?: 1|2|3|4|5|6;
	/** The text alignment: 'left', 'center', or 'right' */
	align?: 'left' | 'center' | 'right';
	/** The text color, can be a string */
	textColor?: string;
	/** The font family to use for the text */
	fontFamily?: string;
	/** The cursor to display on hover */
	cursor?: string;
	/** Additional CSS classes to apply */
	className?: string;
}

const Title: React.FC<TitleProps> = ({text, priority = 1, align = 'center', textColor='inherit', fontFamily= 'inherit', cursor = 'text', className}) => {
	
	if (!text) {
		 throw new Error('Text is required');
	}

	let style: React.CSSProperties = {
		display: 'block',
		color: (textColor ? textColor : 'inherit'),
		fontFamily: (fontFamily ? fontFamily : 'inherit'),
		wordBreak: 'break-word',
		fontWeight: 'regular',
		textAlign: align,
		letterSpacing: '-0.025rem',
		whiteSpace: 'pre-wrap',
		marginBottom: '0.55rem',
		marginTop: '0.25rem',
		cursor: cursor
	}

	const renderTitle = (tag: keyof JSX.IntrinsicElements, size: string, lineHeight: string, weight: string = 'regular') => {
		style.fontSize = size;
		style.lineHeight = lineHeight;
		style.fontWeight = weight;
		return React.createElement(tag, { style, className: `title-kariu-priority-${priority} ${className}` }, text);
	}

	switch (priority) {
		case 1:
			return renderTitle('h1', '2.75rem', '3.5rem');
		case 2:
			return renderTitle('h2', '2rem', '2.75rem');
		case 3:
			return renderTitle('h3', '1.75rem', '2.5rem');
		case 4:
			return renderTitle('h4', '1.5rem', '2rem', 'semibold');
		case 5:
			return renderTitle('h5', '1.25rem', '1.95rem', 'bold');
		case 6:
			return renderTitle('h6', '1.15rem', '1.95rem', 'bold');
		default:
			return renderTitle('h1', '3.75rem', '4.5rem');
	}
}

export default Title 
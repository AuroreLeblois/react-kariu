import React from 'react';
import { useTheme } from '../../Theme/ThemeProvider';

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
	/** The click event of the title */
	onClick?: () => void;
}

const Title: React.FC<TitleProps> = ({text, priority = 1, align = 'center', textColor = null, fontFamily = null, cursor = 'text', className, onClick}) => {
	
	if (!text) {
		 throw new Error('Text is required');
	}
	const { colors } = useTheme();

	let style: React.CSSProperties = {
		display: 'block',
		color: textColor ?? colors.primary.main ?? 'inherit' ,
		fontFamily: fontFamily ?? colors.headingFont ?? 'inherit',
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
	let element = null;
	let size = null;
	let lineHeight = null;
	let weight = 'regular';

	switch (priority) {
		case 2:
			element = 'h2';
			size = '2rem';
			lineHeight = '2.75rem';
			break;
		case 3:
			element = 'h3';
			size = '1.75rem';
			lineHeight = '2.5rem';
			break;
		case 4:
			element = 'h4';
			size = '1.5rem';
			lineHeight = '2rem';
			weight = 'semibold';
			break;
		case 5:
			element = 'h5';
			size = '1.25rem';
			lineHeight = '1.95rem';
			weight = 'bold';
			break;
		case 6:
			element = 'h6';
			size = '1.15rem';
			lineHeight = '1.95rem';
			weight = 'bold';
			break;
		case 1:
		default:
			element = 'h1'
			size = '2.75rem';
			lineHeight = '3.5rem';
		break;
	}

	return renderTitle(element, size, lineHeight, weight);
}

export default Title 
import React from 'react'
import textStyles from './TextStyles';
import { useTheme } from '../../Theme/ThemeProvider';

// Définition des types pour les props
interface TextProps {
	/**
   * The text of the component
   */
	text: string;
	/**
   * The variant of the text
   */
	variant?: 'default' | 'label' | 'description' | 'disabled' | 'danger' | 'italic' | 'strong';
	/**
   * The alignment of the text
   */
	align?: string;
	/**
   * The color of the text
   */
	textColor?: string;
	/**
   * The font applied to the text
   */
	fontFamily?: string;
	/**
   * If you need a specific cursor with the mouse over the text
   */
	cursor?: string;
	/**
   * You can add an optional classname
   */
	className?: string;
	/**
   * The html you need of the display of your text
   */
	component?:'span'|'p'|'pre'|'div';
		/**
   * Any additional properties
   */
	textProps?:  React.HTMLAttributes<HTMLElement>;
}

const Text: React.FC<TextProps> = ({
	textColor,
	fontFamily,
	component = 'p',
	text= '',
	variant = 'default',
	className,
	cursor = 'auto',
	align = 'center',
	...textProps
  }) => {
	const { colors } = useTheme();
	
	let style: React.CSSProperties = {
		...textStyles.default,
		color:  textColor ?? colors.text,
		fontFamily: fontFamily ?? colors.fontFamily,
		cursor
	}

	switch (variant) {
		case 'label':
			style = { ...style, ...textStyles.label }; // Fusion des styles
			break;
		case 'description':
			style = { ...style, ...textStyles.description };
			break;
		case 'disabled':
			style = { ...style, ...textStyles.disabled };
			break;
		case 'italic':
			style = { ...style, ...textStyles.italic };
			break;
		case 'danger':
			style = { ...style, ...textStyles.danger };
			break;
		case 'strong':
			style = { ...style, ...textStyles.strong };
			break;
		default: // Normal text
			break;
	}

	switch (component) {
		case 'span':
			return <span className={`text-kariu ${className}`} {...textProps} style={style}>{text}</span>;
		
		case 'pre':
			return <pre className={`text-kariu ${className}`} {...textProps} style={style}>{text}</pre>;
		
        case 'div':
			return <div className={`text-kariu ${className}`} {...textProps} style={style}>{text}</div>;
		case 'p':	 
		default:
			return <p className={`text-kariu ${className}`} {...textProps} style={style}>{text}</p>;
	}
}

export default Text 
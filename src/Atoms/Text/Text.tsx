import React from 'react'
import textStyles from './TextStyles'; // Importation des styles

// Définition des types pour les props
interface TextProps {
	text: string;
	variant?: 'default' | 'label' | 'description' | 'disabled' | 'danger' | 'italic';
	align?: string;
	textColor?: string;
	fontFamily?: string;
	cursor?: string;
	className?: string;
	component?:'span'|'p'|'pre'|'div';
}

const Text: React.FC<TextProps> = (props) => {
	let style: React.CSSProperties = {
		...textStyles.default, // Utilisation des styles par défaut
		color: props.textColor ? props.textColor : textStyles.default.color,
		fontFamily: props.fontFamily ? props.fontFamily : textStyles.default.fontFamily,
		cursor: props.cursor
	}
	const component = props.component ?? 'p';

	switch (props.variant) {
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
		default: // Normal text
			break;
	}

	switch (component) {
		case 'span':
			return <span className={`text-kariu ${props.className}`} {...props} style={style}>{props.text}</span>;
		
		case 'pre':
			return <pre className={`text-kariu ${props.className}`} {...props} style={style}>{props.text}</pre>;
		
        case 'div':
			return <div className={`text-kariu ${props.className}`} {...props} style={style}>{props.text}</div>;
		case 'p':	 
		default:
			return <p className={`text-kariu ${props.className}`} {...props} style={style}>{props.text}</p>;
	}
}

export default Text 
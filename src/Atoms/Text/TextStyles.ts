import { CSSProperties } from 'react';

const textStyles: { [key: string]: CSSProperties } = {
    default: {
        color: 'tomato',
        fontFamily: 'inherit',
        wordBreak: 'break-word',
        fontWeight: 'normal',
        letterSpacing: '-0.025rem',
        whiteSpace: 'pre-wrap',
        marginBottom: '0.55rem',
        marginTop: '0.25rem',
    },
    label: {
        color: 'grey',
        fontSize: '1rem',
        lineHeight: '1rem',
        textTransform: 'uppercase',
    },
    description: {
        color: 'darkgrey',
        fontSize: '0.85rem',
        lineHeight: '1.25rem',
    },
    disabled: {
        color: 'grey',
    },
    italic: {
        fontStyle: 'italic',
    },
    strong: {
        fontWeight: 'bold',
    },
    danger: {
        color: 'rgb(236, 39, 39)',
    },
};

export default textStyles; 
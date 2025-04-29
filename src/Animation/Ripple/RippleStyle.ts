export const rippleStyleContainer: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden !important',
    height: '100%',
    width: '100%',
}

export const rippleStyle: React.CSSProperties = {
    position: 'absolute',
    borderRadius: '50%',
    transform: 'scale(0)',
    animationName: 'ripple-circle',
    animationTimingFunction: 'linear',
    pointerEvents: 'none',
    overflow: 'hidden !important',
}

export const squareStyle: React.CSSProperties = {
    borderRadius: '0',
    animationName: 'ripple-square',
}

export const getAnimationName = (animation: string) => {
    return `ripple-${animation}`;
}

export const rippleStyleKeyframes = {
    rippleCircle: {
        to: {
            transform: 'scale(4)',
            opacity: 0,
        },
    },
    rippleSquare: {
        to: {
            transform: 'scale(4)',
            opacity: 0,
        },
    },
    rippleFade: {
        to: {
            transform: 'scale(4)',
            opacity: 0,
        },
    },
    rippleExpand: {
        "0%" :{
            transform: 'scale(0)',
            opacity: 0.5,
        },
        "50%" :{
            transform: 'scale(2)',
            opacity: 0.7,
        },
        "100%" :{
            transform: 'scale(4)',
            opacity: 0,
        }
    },
    rippleWave: {
        to: {
            transform: 'scale(4)',
            opacity: 0,
        },
    }
    
}

export const getStyleRipple = (animation: string) => {
    const style = { ...rippleStyle };
    
    // Créer un nouvel élément de style
    const styleElement = document.createElement('style');
    styleElement.id = `ripple-${animation}-keyframes`;
    
    let keyframeName = 'circle';
    switch (animation) {
        case 'square':
            style.animationName = 'ripple-square';
            style.borderRadius = '0';
            keyframeName = 'rippleSquare';
            break;
        case 'fade':
            style.animationName = 'ripple-fade';
            keyframeName = 'rippleFade';
            break;
        case 'expand':
            style.animationName = 'ripple-expand';
            keyframeName = 'rippleExpand';
            break;
        case 'wave':
            style.animationName = 'ripple-wave';
            keyframeName = 'rippleWave';
            break;
        case 'circle':
        default:
            style.animationName = 'ripple-circle';
            keyframeName = 'rippleCircle';
            break;
    }
    
    // Convertir les keyframes en CSS valide
    const keyframeCSS = createKeyframeCSS(style.animationName, rippleStyleKeyframes[keyframeName]);
    styleElement.textContent = keyframeCSS;
    
    // Ajouter l'élément de style au DOM
    document.head.appendChild(styleElement);
    
    return style;
}

// Fonction utilitaire pour créer le CSS des keyframes
function createKeyframeCSS(animationName: string, keyframeObj: any): string {
    let css = `@keyframes ${animationName} {\n`;
    
    for (const key in keyframeObj) {
        css += `  ${key} {\n`;
        for (const prop in keyframeObj[key]) {
            const value = keyframeObj[key][prop];
            const propName = prop.replace(/([A-Z])/g, '-$1').toLowerCase(); // camelCase vers kebab-case
            css += `    ${propName}: ${value};\n`;
        }
        css += `  }\n`;
    }
    
    css += `}\n`;
    return css;
}


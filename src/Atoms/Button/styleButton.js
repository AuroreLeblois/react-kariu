export function styleButton({backgroundColor, shape, primary, size}) {
    const color = primary ? 'white': '#333';
    let backgroundColorStyle = primary ? '#1ea7fd' : 'transparent';
    let fontSize = '14px';
    let padding = '11px 20px';
    switch (size) {
      case 'medium':
        default:
          fontSize = '14 px';
          padding = '10px 16px';
        break;
        case 'small':
          fontSize = '12 px';
          padding = '11px 20px';
          break;
          case 'large':
            fontSize = '16 px';
          padding = '12px 24px';
            break;
    }
    if (backgroundColor) {
      backgroundColorStyle = backgroundColor;
    }
    let style =  {
      color,
      backgroundColor: backgroundColorStyle,
      fontFamily: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      fontWeight: '700',
      border: 0,
      borderRadius:  shape === 'square' ? '10px': '3em',
      cursor: 'pointer',
      display: 'inline-block',
      lineHeight: 1,
      position: 'relative',
      overflow: 'hidden',
      transform: 'translate3d(0, 0, 0)',
      fontSize,
      padding,
      '&:after': {
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #000 10%, transparent 10.01%)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        transform: 'scale(10,10)',
        opacity: 0,
        transition: 'transform .5s, opacity 1s'
      },
      '&:active:after': {
        transform: 'scale(0,0)',
        opacity: .2,
        transition: '0s',
      }
    };
  
    if (!primary) {
      style = { ...style, boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
    }
  
    return style;
  }
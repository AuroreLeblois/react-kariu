export function styleButton(backgroundColor : string, shape: string, primary: boolean, size: string, disabled: boolean) {
  const color = primary ? 'white': '#333';
  let backgroundColorStyle = primary ? '#1ea7fd' : 'transparent';
  let fontSize = '14px';
  let padding = '11px 20px';

  switch (size) {
    case 'small':
        fontSize = '0.85rem';
        padding = '0.5rem 1rem';
        break;
    case 'medium':
        fontSize = '1rem';
        padding = '0.7rem 1.25rem';
      break;
    case 'large':
        fontSize = '1.25rem';
        padding = '0.85rem 1.5rem';
        break;
    default:
        fontSize = '14px';
        padding = '10px 16px';
        break;
  }
  if (backgroundColor) {
    backgroundColorStyle = backgroundColor;
  }
  const style = {
    color,
    boxShadow: !primary ? 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset': 'none',
    backgroundColor: disabled ?  "#c9c7c9" : backgroundColorStyle,
    fontFamily: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    fontWeight: '700',
    border: 0,
    borderRadius:  shape === 'square' ? '10px': '3em',
    cursor: disabled ? 'mouse' : 'pointer',
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)',
    fontSize,
    padding,
    lineHeight: 1,
    '&:': {
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
    '*:active:after': {
      transform: 'scale(0,0)',
      opacity: 1,
      transition: '0s',
    },
    '.kariuButton:active:after': {
      transform: 'scale(0,0)',
      opacity: '0.2',
      transition: '0s'
    },
    'button.ripple': {
      position: 'absolute', /* The absolute position we mentioned earlier */
      borderRadius: '50%',
      transform: 'scale(0)',
      animation: 'ripple 600ms linear'
    },
    '@keyframes ripple' : {
      'to' : {
        transform: 'scale(4)',
        opacity: 0
      }
    },
    '.kariuButton--primary': {
      color: disabled ? 'red' : 'white',
      backgroundColor: '#1ea7fd'
    },
    '.kariuButton--secondary': {
      color:  disabled ? 'blue' : '#333',
      backgroundColor: 'transparent',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    }
  };
  
  return style;
}

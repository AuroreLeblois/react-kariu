export function styleLink(size: string, disabled: boolean) {
  let fontSize = '1rem';

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'inherit',
    fontWeight: '700',
    border: 0,
    cursor: disabled ? 'mouse' : 'pointer',
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)',
    fontSize,
    lineHeight: '1rem',
    '&:visited': {
      color: 'purple', // Couleur pour les liens visités
    },
  };
  
  return style;
}

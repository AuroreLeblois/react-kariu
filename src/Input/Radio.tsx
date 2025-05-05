// src/Atoms/Input/Radio.tsx
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '../Theme/ThemeProvider';
import Text from '../Atoms/Text/Text';
import Ripple from '../Animation/Ripple/Ripple';
import { RadioProps } from './Input.type';

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    label,
    checked = false,
    onChange,
    size = 'medium',
    color = null,
    className = '',
    sx = {},
    disabled = false,
    ripple = true,
    rippleDuration = 500,
    rippleColor,
    value = 'a',
    inputProps = {},
  },
  ref
) {
  const { colors } = useTheme();
  const [checkedState, setCheckedState] = useState(checked === true ? value : null );

  useEffect(() => {
    setCheckedState(checked === true ? value : null);
  }, [checked]);
  

  const onRadioChange = () => {
    setCheckedState(value);
  };
  
  // Déterminer les dimensions selon la taille
  const getSize = () => {
    switch(size) {
      case 'small': return 16;
      case 'large': return 24;
      default: return 20;
    }
  };
  
  const radioSize = getSize();
  const actualColor = color || colors.primary.main;
  
  // Styles pour le conteneur
  const containerStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    userSelect: 'none',
    position: 'relative',
    ...sx
  };
  
  // Styles pour la radio visible
  const radioStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${radioSize}px`,
    height: `${radioSize}px`,
    backgroundColor: colors.background.light,
    border: `2px solid ${checkedState ? actualColor : colors.border}`,
    borderRadius: '50%',
    transition: 'all 0.2s ease',
    position: 'relative',
    overflow: 'hidden'
  };
  
  // Styles pour le texte du label
  const labelStyle: React.CSSProperties = {
    marginLeft: '0.55rem',
    marginBottom: '0px',
    marginTop: '0px',
    fontSize: '14px',
    color: colors.text.main
  };
  
  // Couleur du ripple
  const rippleActualColor = rippleColor  ?? color ?? (checkedState ? colors.primary.lighter : colors.background.darker);
  
  return (
    <label 
      className={`kariuRadio ${size} ${checkedState ? 'checked' : ''} ${disabled ? 'disabled' : ''} ${className}`}
      style={containerStyle}
    >
      <input
        type="radio"
        name={value}
        value={value}
        checked={value === checkedState}
        onChange={(value) => {
          onRadioChange();
          if (onChange) {
              onChange(value);
          }
        }}
        disabled={disabled}
        style={{
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0
        }}
        {...inputProps}
      />
      
      <div 
        className="kariuRadio--circle"
        style={radioStyle}
      >
        {checkedState && (
          <div
            style={{
              width: `${radioSize * 0.5}px`,
              height: `${radioSize * 0.5}px`,
              backgroundColor: actualColor,
              borderRadius: '50%'
            }}
          />
        )}
        {ripple && <Ripple duration={rippleDuration} color={rippleActualColor} />}
      </div>
      
      {label && <Text text={label} component="span" sx={labelStyle} />}
    </label>
  );
});

export default Radio;
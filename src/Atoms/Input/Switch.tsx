import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '../../Theme/ThemeProvider';
import Ripple from '../../Animation/Ripple/Ripple';
import { SwitchProps } from './Switch.type';

export const Switch: React.FC<SwitchProps> = ({
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
  inputProps = {},
}) => {
  const [checkedState, setCheckedState] = useState(checked);
  const { colors } = useTheme();
  
  // Déterminer les dimensions selon la taille
  const getSize = () => {
    switch(size) {
      case 'small': return { width: 32, height: 16, thumbSize: 12 };
      case 'large': return { width: 56, height: 28, thumbSize: 22 };
      default: return { width: 44, height: 22, thumbSize: 18 };
    }
  };
  
  const { width, height, thumbSize } = getSize();
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
  
  // Styles pour le track (piste) du switch
  const trackStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: checkedState ? `${actualColor}80` : colors.background.darker,
    borderRadius: `${height}px`,
    position: 'relative',
    transition: 'background-color 0.3s ease',
    overflow: 'hidden'
  };
  
  // Styles pour le thumb (pouce) du switch
  const thumbStyle: React.CSSProperties = {
    width: `${thumbSize}px`,
    height: `${thumbSize}px`,
    backgroundColor: checkedState ? actualColor : colors.background.light,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    borderRadius: '50%',
    position: 'absolute',
    top: `${(height - thumbSize) / 2}px`,
    left: checkedState ? `${width - thumbSize - ((height - thumbSize) / 2)}px` : `${(height - thumbSize) / 2}px`,
    transition: 'left 0.3s ease, background-color 0.3s ease',
    zIndex: 1
  };
  
  // Styles pour le texte du label
  const labelStyle: React.CSSProperties = {
    marginLeft: '10px',
    fontSize: '14px',
    color: colors.text.main
  };
  
  // Couleur du ripple
  const rippleActualColor = rippleColor || (checked ? colors.primary.lighter : colors.background.darker);
  
  return (
    <label className={`kariuSwitch ${size} ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} ${className}`}
      style={containerStyle}
    >
      <input
        type="checkbox"
        checked={checkedState}
        onClick={() => {
            setCheckedState(!checkedState);
        }}
        onChange={(e) => {
          if (onChange) {
              onChange(e);
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
      
      <div className="kariuSwitch--track" style={trackStyle}>
        <div className="kariuSwitch--thumb" style={thumbStyle}>
          {ripple && <Ripple duration={rippleDuration} color={rippleActualColor} />}
        </div>
      </div>
      
      {label && <span style={labelStyle}>{label}</span>}
    </label>
  );
};

export default Switch; 
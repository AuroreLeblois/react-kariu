import * as React from 'react';
import { useTheme } from '../../Theme/ThemeProvider';
import Text from '../Text/Text';
import Ripple from '../Ripple/Ripple';

interface CheckBoxProps {
  /**
   * Label to display next to the checkbox
   */
  label?: string;
  /**
   * If the checkbox is checked
   */
  checked?: boolean;
  /**
   * Function called when the state changes
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Size of the checkbox (in pixels)
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Custom color
   */
  color?: string;
  /**
   * Classe CSS à ajouter
   */
  className?: string;
  /**
   * Custom styles
   */
  sx?: React.CSSProperties;
  /**
   * If the checkbox is disabled
   */
  disabled?: boolean;
  /**
   * If the checkbox has a ripple effect when clicked
   */
  ripple?: boolean;
  /**
   * Ripple duration
   */
  rippleDuration?: number;
  /**
   * Ripple color
   */
  rippleColor?: string;
  /**
   * Additional props for the input
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const CheckBox: React.FC<CheckBoxProps> = ({
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
  const { colors } = useTheme();
  
  // Déterminer les dimensions selon la taille
  const getSize = () => {
    switch(size) {
      case 'small': return 16;
      case 'large': return 24;
      default: return 20;
    }
  };
  
  const checkboxSize = getSize();
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
  
  // Styles pour la checkbox visible
  const checkboxStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${checkboxSize}px`,
    height: `${checkboxSize}px`,
    backgroundColor: checked ? actualColor : colors.background.light,
    border: `2px solid ${checked ? actualColor : colors.border}`,
    borderRadius: '4px',
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
  const rippleActualColor = rippleColor || (checked ? colors.primary.lighter : colors.background.darker);
  
  return (
    <label 
      className={`kariuCheckbox ${size} ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} ${className}`}
      style={containerStyle}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
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
        className="kariuCheckbox--box"
        style={checkboxStyle}
      >
        {checked && (
          <svg 
            viewBox="0 0 24 24"
            width={checkboxSize * 0.7}
            height={checkboxSize * 0.7}
            style={{
              fill: 'none',
              stroke: colors.background.light,
              strokeWidth: 3
            }}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
        {ripple && <Ripple duration={rippleDuration} color={rippleActualColor} />}
      </div>
      
      {label && <Text text={label} component="span" sx={labelStyle} />}
    </label>
  );
};

export default CheckBox;

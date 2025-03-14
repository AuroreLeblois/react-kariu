import * as React from 'react';
import { styleInput } from './styleInput';

/**
 * Primary UI component for user interaction
 */

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * type of the input
   */
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" ;
  /**
   * Placeholder content
   */
  placeholder?: string;
  /**
   * Button shape
   */
  shape?: "square" | "round";
  /**
   * Button classname override
   */
  className?: string;
  /**
   * Button style overrides
   */
  sx?: React.CSSProperties;
  /**
   * Usual button props: onClick
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  children?: React.ReactElement;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<InputProps> = ({
  type,
  primary = true,
  size = 'medium',
  backgroundColor = null,
  placeholder,
  shape = 'round',
  className,
  children,
  sx = {},
  ...inputProps
}) => {
  const mode = primary ? 'kariu-input--primary' : 'kariu-input--secondary';
  const inputCustom = styleInput(backgroundColor || '', shape, primary, size) as unknown as React.CSSProperties;
  const completeStyle: React.CSSProperties = { ...inputCustom, ...sx };
  
  return (
    <input
      placeholder={placeholder}
      type={type}
      style={completeStyle}
      className={['kariu-input', `kariu-input--${size}`, shape, mode, className].join(' ')}
      {...inputProps}
    />
  );
};

export default Button;

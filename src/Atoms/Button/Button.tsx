import React, { ReactNode } from 'react';
import { styleButton } from './styleButton';
/**
 * Primary UI component for user interaction
 */

interface ButtonProps {
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
   * type of the button
   */
  type?: "button" | "submit" | "reset" ;
  /**
   * Button contents
   */
  label: string;
  /**
   * Button shape
   */
  shape?: "square"| "round";
    /**
   * Button classname override
   */
  className?: string;
  /**
   * Button style overrides
   */
  sx?: object;
  /**
   * Usual button props
   */
  others?: object;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  children?: ReactNode;
  style?: object
}

const Button = ({
  type= 'button',
  primary = true,
  size = 'medium',
  backgroundColor = 'tomato',
  label,
  shape = 'round',
  sx,
  className,
  children = null,
  ...others
}: ButtonProps) => {
  const mode = primary ? 'kariu-button--primary' : 'kariu-button--secondary';
  const buttonCustom = styleButton(backgroundColor, shape, primary, size);

  return (
    <button 
      type={type}
      className={['kariu-button', `kariu-button--${size}`, shape, mode, className].join(' ')}
      style={{...buttonCustom, ...sx }}
      onClick={() => {
        if (others.onClick) others.onClick();
      }}
      {...others}
    >
      {label}
      {children}
    </button>
  );
};
export default Button;
import React from "react";
import './button.css';
import { createRipple } from '../../utils/rippleCreators';

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
  shape: "square"| "round";
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
  others?: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  children: any;
};

export const Button = ({
  type= 'button',
  primary = true,
  size = 'medium',
  backgroundColor,
  label,
  shape = 'round',
  sx,
  className,
  children,
  ...others
}: ButtonProps) => {
  const mode = primary ? 'kariu-button--primary' : 'kariu-button--secondary';

  return (
    <button
      type={type}
      className={['kariu-button', `kariu-button--${size}`, shape, mode, className].join(' ')}
      style={{ backgroundColor, ...sx }}
      onClick={() => {
        if (others.onClick) others.onClick();
      }}
      {...others}
    >
      {label}
    </button>
  );
};


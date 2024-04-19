import './button.css';

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
  args?: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  type= 'button',
  primary = true,
  size = 'medium',
  backgroundColor,
  label,
  sx,
  className,
  ...args
}: ButtonProps) => {
  const mode = primary ? 'kariu-button--primary' : 'kariu-button--secondary';

  return (
    <button
      type={type}
      className={['kariu-button', `kariu-button--${size}`, mode, className].join(' ')}
      style={{ backgroundColor, ...sx }}
      {...args}
    >
      {label}
    </button>
  );
};


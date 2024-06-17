import * as React from 'react';
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
    type?: "button" | "submit" | "reset";
    /**
     * Button contents
     */
    label: string;
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
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: React.ReactElement;
    /**
     * If the button has a ripple effect on click.
     */
    ripple?: boolean;
    /**
     * Duration of the ripple effect
     */
    rippleDuration?: number;
    /**
    * Color of the ripple effect. Default color is the color of the button's background.
    */
    rippleColor?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;

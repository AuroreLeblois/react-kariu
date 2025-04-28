export interface SwitchProps {
    /**
     * Label to display next to the switch
     */
    label?: string;
    /**
     * If the switch is activated
     */
    checked?: boolean;
    /**
     * Function called when the state changes
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Taille du switch
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Custom color
     */
    color?: string;
    /**
     * Custom classname
     */
    className?: string;
    /**
     * Custom styles
     */
    sx?: React.CSSProperties;
    /**
     * If the switch is disabled
     */
    disabled?: boolean;
    /**
     * If the switch has a ripple effect when clicked
     */
    ripple?: boolean;
    /**
     * Durée de l'effet ripple
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
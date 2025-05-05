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

  export interface RadioProps {
    /**
     * Label to display next to the radio
     */
    label?: string;
    /**
     * If the radio is checked
     */
    checked?: boolean;
    /**
     * Function called when the state changes
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Size of the radio (in pixels)
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
     * If the radio is disabled
     */
    disabled?: boolean;
    /**
     * If the radio has a ripple effect when clicked
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
     * Name for the radio input
     */
    name?: string;
    /**
     * Value of the radio input
     */
    value?: string;
    /**
     * Additional props for the input
     */
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  }

  export interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
  }
  
  export interface RadioGroupProps {
    /**
     * Name for the radio group
     */
    name: string;
    /**
     * Options for the radio buttons
     */
    options: RadioOption[];
    /**
     * Default selected value
     */
    defaultValue?: string;
    /**
     * Function called when selection changes
     */
    onChange?: (value: string) => void;
    /**
     * Size of the radio buttons
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Custom color
     */
    color?: string;
    /**
     * Direction of the radio group
     */
    direction?: 'row' | 'column';
    /**
     * Custom styles
     */
    sx?: React.CSSProperties;
    /**
     * CSS class to add
     */
    className?: string;
    /**
     * If all radio buttons are disabled
     */
    disabled?: boolean;
  }
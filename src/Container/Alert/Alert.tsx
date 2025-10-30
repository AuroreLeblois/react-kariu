import * as React from 'react';
import { useTheme } from '../../Theme/ThemeProvider';
import Text from '../../Atoms/Text/Text';
import Layout from '../Layout';

interface AlertProps {
  /** Visual alert type */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Optional title */
  title?: string;
  /** Main message (you can also use children) */
  message?: string;
  /** Additional inline styles */
  sx?: React.CSSProperties;
  /** Additional CSS class name */
  className?: string;
  /** Optional child content */
  children?: React.ReactNode;
  /** Optional full width */
  fullWidth?: boolean;
  /** Optional justify content */
  justifyContent?: React.CSSProperties['justifyContent'];
  /** Optional icon */
  customIcon?: React.ReactNode;
  /** Optional outlined */
  outlined?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  message,
  className = undefined,
  sx = {},
  children,
  fullWidth = true,
  justifyContent = 'start',
  customIcon,
  outlined = false,
}) => {
  const { colors, theme } = useTheme();
  
  if (!message && !children) {
    return null;
  }

  const getVariantPalette = () => {
    const variantPalette = theme === 'light' ? 'darkest' : 'lightest';
    return colors[variant][variantPalette];
  };

  const baseStyle: React.CSSProperties = {
    display: 'flex',
    flexGrow: fullWidth ? 1 : 0,
    alignItems: 'center',
    minWidth: fullWidth ? '-webkit-fill-available' : '300px',
    justifyContent: justifyContent,
    margin: '0.75rem', 
    borderRadius: 8,
    backgroundColor: theme === 'light' ? colors[variant].lightest : colors[variant].darkest,
    color: theme === 'light' ? colors[variant].darkest : colors[variant].lightest,
    opacity: 0.75,
    gap: '1rem',
  };

  const computedIconSvgFill: string = outlined ? 'none' : theme === 'light' ? colors[variant].darkest : colors[variant].lightest;

  const composedClassName = ['kariu-alert', `kariu-alert--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Layout
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      padding='0.55rem'
      style={{ ...baseStyle, ...sx }}
      className={composedClassName} 
      role="alert"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
    >
      <Layout flexDirection='row' justifyContent='center' alignItems='center' gap='1rem'>
        {customIcon && React.cloneElement(customIcon as React.ReactElement, { fill : computedIconSvgFill })}
        <Text text={message} 
          className="kariu-alert--message"
          sx={{ opacity: 1, margin: '0' }} 
          textColor={theme === 'light' ? colors[variant].darkest : colors[variant].lightest}/>
      </Layout>
      <div className="kariu-alert--children">{children}</div>
      
    </Layout>
  );
};

export default Alert;



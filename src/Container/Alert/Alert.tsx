import * as React from 'react';
import { useTheme } from '../../Theme/ThemeProvider';
import Text from '../../Atoms/Text/Text';
import Layout from '../Layout';
import { getContrastTextColor } from '../../Theme/colorContrast';

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
  const backgroundColor: string = outlined ? 'transparent' : (theme === 'light' ? colors[variant].darkest : colors[variant].lightest);
const colorText: string = backgroundColor !== 'transparent' ? getContrastTextColor(backgroundColor) : (theme === 'light' ? colors[variant].darkest : colors[variant].lightest);

  const baseStyle: React.CSSProperties = {
    display: 'flex',
    flexGrow: fullWidth ? 1 : 0,
    alignItems: 'center',
    minWidth: fullWidth ? '-webkit-fill-available' : '300px',
    justifyContent: justifyContent,
    margin: '0.75rem', 
    borderRadius: 6,
    backgroundColor: backgroundColor,
    color: getContrastTextColor(backgroundColor),
    opacity: outlined ? 1 : 0.75,
    border: outlined ? `1px solid ${theme === 'light' ? colors[variant].darkest : colors[variant].lightest}` : undefined,
    gap: '1rem',
  };

  const iconColor: string = theme === 'light' ? getContrastTextColor(colors[variant].darkest) : getContrastTextColor(colors[variant].lightest);

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
      
        {customIcon && (
          outlined
            ? React.cloneElement(customIcon as React.ReactElement, {
                fill: 'transparent',
                stroke: iconColor,
                strokeWidth: 1.5,
              })
            : React.cloneElement(customIcon as React.ReactElement, { fill: iconColor })
        )}
        <Layout flexDirection='column' justifyContent='center' alignItems='start'>
        <Text text={message} 
          className="kariu-alert--message"
          sx={{ opacity: 1, margin: '0' }} 
          textColor={colorText}/>
          <div className="kariu-alert--children">{children}</div>
          </Layout>
      </Layout>
      
      
    </Layout>
  );
};

export default Alert;



import * as React from 'react';
import { useTheme } from '../../Theme/ThemeProvider';
import { Button } from '../../Atoms';

interface AlertProps {
  /** Visual alert type */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Optional title */
  title?: string;
  /** Main message (you can also use children) */
  message?: string;
  /** Show a close button */
  closable?: boolean;
  /** Close callback */
  onClose?: () => void;
  /** Additional inline styles */
  sx?: React.CSSProperties;
  /** Additional CSS class name */
  className?: string;
  /** Optional child content */
  children?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  message,
  closable = false,
  onClose,
  className = '',
  sx = {},
  children,
}) => {
  const { colors, theme } = useTheme();

  const getVariantPalette = () => {
    switch (variant) {
      case 'success':
        return colors.success.main;
      case 'warning':
        return colors.warning.main; // nuance plus chaude côté secondary
      case 'error':
        return colors.error.main; // on utilisera des nuances plus foncées
      case 'info':
      default:
        return colors.info.main;
    }
  };

  const baseStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.75rem',
    borderRadius: 8,
    backgroundColor: theme === 'light' ? colors[variant].lighter : colors[variant].darker,
    color: theme === 'light' ? colors[variant].darker : colors[variant].lighter,
  };

  const closeBtnStyle: React.CSSProperties = {
    marginLeft: 'auto',
    background: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    padding: '0.5rem',
    fontSize: '1rem'
  };

  const composedClassName = ['kariu-alert', `kariu-alert--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      role="alert"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      className={composedClassName}
      style={{ ...baseStyle, ...sx }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {message && <p>{message}</p>}
        {children}
      </div>
      {closable && (
        <Button
          label="×"
          aria-label="Fermer l’alerte"
          onClick={onClose}
          sx={{ ...closeBtnStyle }}
          className="kariu-alert--close"
          shape="square"
        />
      )}
    </div>
  );
};

export default Alert;



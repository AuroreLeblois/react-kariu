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
  title,
  message,
  closable = false,
  onClose,
  className = '',
  sx = {},
  children,
}) => {
  const { colors, theme } = useTheme();
  console.log(theme);

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
    alignItems: 'flex-start',
    gap: 8,
    padding: '12px 14px',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: colors[variant][theme],
    borderColor: colors[variant][theme],
    color: theme === 'light' ? colors[variant].darker : colors[variant].lighter,
  };

  const closeBtnStyle: React.CSSProperties = {
    marginLeft: 'auto',
    background: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    padding: 4,
    fontSize: 16,
    lineHeight: 1,
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



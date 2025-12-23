import * as React from 'react';
import Alert from '../Alert/Alert';
import { useTheme } from '../../Theme/ThemeProvider';
import SlideAnimation from '../../Animation/SlideAnimation/SlideAnimation';
import { SnackBarProps, AlertProps } from './SnackBar.types';


const DEFAULT_AUTO_HIDE_DURATION = 5000;
const ANIMATION_DURATION = 500;

const SnackBar: React.FC<SnackBarProps> = ({
  open = true,
  onClose,
  position = 'bottom',
  autoHideDuration = DEFAULT_AUTO_HIDE_DURATION,
  variant,
  message,
  children,
  customIcon,
  outlined,
  className,
  sx,
  ...alertRest
}) => {
  const { theme } = useTheme();

  // Déterminer le variant par défaut en fonction du thème
  const effectiveVariant: AlertProps['variant'] =
    variant || 'info';

  // Gérer le montage/démontage avec animation de sortie
  const [rendered, setRendered] = React.useState(open);

  React.useEffect(() => {
    if (open) {
      setRendered(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setRendered(false);
    }, ANIMATION_DURATION);

    return () => window.clearTimeout(timer);
  }, [open]);

  // Auto fermeture après la durée définie
  React.useEffect(() => {
    if (!open || !onClose) return;

    const timer = window.setTimeout(() => {
      onClose();
    }, autoHideDuration);

    return () => window.clearTimeout(timer);
  }, [open]);

  if (!rendered) {
    return null;
  }

  const basePositionStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 1400,
    pointerEvents: 'none',
  };

  let positionStyle: React.CSSProperties = {};

  switch (position) {
    case 'top':
      positionStyle = {
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
      };
      break;
    case 'bottom':
      positionStyle = {
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
      };
      break;
    case 'left':
      positionStyle = {
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
      };
      break;
    case 'right':
      positionStyle = {
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
      };
      break;
    case 'top-left':
      positionStyle = {
        top: '1rem',
        left: '1rem',
      };
      break;
    case 'top-right':
      positionStyle = {
        top: '1rem',
        right: '1rem',
      };
      break;
    case 'bottom-left':
      positionStyle = {
        bottom: '1rem',
        left: '1rem',
      };
      break;
    case 'bottom-right':
      positionStyle = {
        bottom: '1rem',
        right: '1rem',
      };
      break;
    default:
      break;
  }

  // Choisir la direction d'animation en fonction de la position
  let slideDirection: 'left' | 'right' | 'top' | 'bottom' = 'bottom';
  switch (position) {
    case 'top':
    case 'top-left':
    case 'top-right':
      slideDirection = 'top';
      break;
    case 'bottom':
    case 'bottom-left':
    case 'bottom-right':
      slideDirection = 'bottom';
      break;
    case 'left':
      slideDirection = 'left';
      break;
    case 'right':
      slideDirection = 'right';
      break;
    default:
      slideDirection = 'bottom';
  }

  return (
    <div style={{ ...basePositionStyle, ...positionStyle }} onClick={() => onClose?.()}>
      <SlideAnimation
        direction={slideDirection}
        duration={ANIMATION_DURATION}
        delay={100}
        trigger={open}
        onScroll={false}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <Alert
            variant={effectiveVariant}
            message={message}
            customIcon={customIcon}
            outlined={outlined}
            className={className}
            sx={sx}
            fullWidth={false}
            justifyContent="center"
            {...alertRest}
          >
            {children}
          </Alert>
        </div>
      </SlideAnimation>
    </div>
  );
};

export default SnackBar;



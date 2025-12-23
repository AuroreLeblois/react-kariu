import Alert from "../Alert/Alert";

export type AlertProps = React.ComponentProps<typeof Alert>;

export type SnackBarPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface SnackBarProps
  extends Omit<AlertProps, 'variant' | 'fullWidth' | 'justifyContent'> {
  /** Snackbar display control */
  open?: boolean;
  /** Callback called upon closing (automatic or manual) */
  onClose?: () => void;
  /** Display position of the snackbar */
  position?: SnackBarPosition | 'bottom-right';
  /** Automatic disappearance duration (ms) */
  autoHideDuration?: number;
  /** Visual type of the snackbar (mapped to Alert) */
  variant?: AlertProps['variant'];
  /** Children elements to display */
  children?: React.ReactNode;
  /** Custom icon to display */
  customIcon?: React.ReactNode;
  /** Outlined style */
  outlined?: boolean;
  /** Additional alert props */
  alertRest?: AlertProps;
  /** Additional CSS class name */
  className?: string;
  /** Additional styles */
  sx?: React.CSSProperties;
}
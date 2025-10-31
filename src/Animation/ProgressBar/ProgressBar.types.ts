// The props for the ProgressBar component
export interface ProgressBarProps {
  /**
   * The current value of the progress bar.
   */
  value: number,
  /**
   * The maximum value the progress bar can reach.
   */
  max: number,
  /**
   * The color of the progress bar.
   */
  color?: string | null;
  /**
   * Optional additional class name(s) for the progress bar.
   */
  className?: string|null;
  /**
   * Optional custom styles for the progress bar.
   */
  sx?: React.CSSProperties;
  /**
   * Whether to display the percentage value inside the progress bar.
   */
  displayPercentage: boolean;
    /**
   * If the progressBar is in primary or in secondary
   * If a color prop is given, will not change
   */
  primary: boolean;
  /**
   * The variant of the progress bar: 'linear' or 'circular'
   * @default 'linear'
   */
  variant?: 'linear' | 'circular';
  /**
   * If true, the progress bar will be in continuous/indeterminate mode (animated loop)
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Size of the circular progress bar (only applies when variant='circular')
   * @default 100
   */
  size?: number;
  /**
   * Thickness of the circular progress bar stroke (only applies when variant='circular')
   * @default 8
   */
  thickness?: number;
}
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
  color: string;
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
}
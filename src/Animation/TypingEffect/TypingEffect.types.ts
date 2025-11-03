export interface TypingEffectProps {
  /**
   * The full text to type, revealed character by character.
   */
  text: string;

  /**
   * Typing speed in milliseconds per character.
   */
  typeSpeed?: number;

  /**
   * Whether to show the blinking caret at the end of the text.
   */
  showCursor?: boolean;

  /**
   * Caret blink interval in milliseconds.
   */
  cursorBlinkSpeed?: number;

  /**
   * Optional class name applied to the root element.
   */
  className?: string | null;

  /**
   * Inline styles applied to the root element.
   */
  sx?: React.CSSProperties | null;

  /**
   * Override the text color. If not provided, it uses the theme text color.
   */
  textColor?: string | null;

  /**
   * Text visual variant from the design system.
   */
  variant?: 'default' | 'label' | 'description' | 'disabled' | 'danger' | 'italic' | 'strong';

  /**
   * HTML element used to render the text.
   */
  component?: 'span' | 'p' | 'pre' | 'div';

  /**
   * Text alignment CSS value (e.g., 'left', 'center', 'right').
   */
  align?: string;

  /**
   * Override the font family used for the text.
   */
  fontFamily?: string;
}



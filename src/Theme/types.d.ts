export type Shades = {
  main: string;
  light: string; 
  lighter: string;
  dark: string;
  darker: string;
}
// Types pour les thèmes
export type ThemeColors = {
  /**
   * The primary color of the theme
   */
  primary: Shades;
  /**
   * The secondary color of the theme
   */
  secondary: Shades;
  /**
   * The background color of the theme
   */
  background: Shades;
  /**
   * The text color of the theme
   */
  text: Shades;
  /**
   * The success color of the theme
   */
  success: Shades;
  /**
   * The warning color of the theme
   */
  warning: Shades;
  /**
   * The error color of the theme
   */
  error: Shades;
  /**
   * The info color of the theme
   */
  info: Shades;
  /**
   * The font family of the theme
   */
  fontFamily: string;
  /**
   * The heading font of the theme
   */
  headingFont: string;
  /**
   * The border color of the theme
   */
  border: string;
};

export type ThemeType = 'light' | 'dark';

export type ThemeContextType = {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
  customizeTheme: (themeType: ThemeType, newColors: Partial<ThemeColors>) => void;
};
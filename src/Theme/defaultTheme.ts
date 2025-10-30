import { calculateShades } from "./colorContrast";

// Vous pouvez personnaliser ces thèmes par défaut
export const defaultThemes = {
  light: {
    primary: calculateShades("#3C1B43"),
    secondary: calculateShades("#4B6F8A"),
    background: calculateShades("#f5f5f5"),
    text: calculateShades("#1e1e1f"),
    fontFamily: "Nunito Sans, sans-serif",
    headingFont: "cursive, sans-serif",
    border: '#e0e0e0',
    success: calculateShades("#00C853"),
    warning: calculateShades("#FF9500"),
    info: calculateShades("#0070f3"),
    error: calculateShades("#d32f2f"),
  },
  dark: {
    primary: calculateShades('#0070f3'),
    secondary: calculateShades('#A855F7'),
    background: calculateShades('#1a1a1a'),
    text: calculateShades('#ffffff'),
    fontFamily: "Nunito Sans, sans-serif",
    headingFont: "cursive, sans-serif",
    border: '#e0e0e0',
    success: calculateShades("#00C853"),
    warning: calculateShades("#FF9500"),
    info: calculateShades("#0070f3"),
    error: calculateShades("#E53935"),
  },
};
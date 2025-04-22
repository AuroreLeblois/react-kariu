// src/ThemeProvider.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type Shades = {
  main: string;
  light: string; 
  lighter: string;
  dark: string;
  darker: string;
}
// Types pour les thèmes
export type ThemeColors = {
  primary: Shades;
  secondary: Shades;
  background: string;
  text: string;
  fontFamily: string;
  headingFont: string;
};
/**
 * Fonction to calculate shades of a color
 * @param hexColor - The hexadecimal color to convert
 * @returns An object Shades containing the shades of the color
 */
export const calculateShades = (hexColor: string): Shades => {
  // Convertir la couleur hex en RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Éclaircir: ajouter 15% de blanc
  const lighten = (color: number) => Math.min(255, Math.floor(color + (255 - color) * 0.15));
  
  // Assombrir: réduire de 15%
  const darken = (color: number) => Math.floor(color * 0.85);
  
  // Convertir RGB en hex
  const toHex = (value: number) => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  // Créer les nuances
  const light = `#${toHex(lighten(r))}${toHex(lighten(g))}${toHex(lighten(b))}`;
  const lighter = `#${toHex(lighten(lighten(r)))}${toHex(lighten(lighten(g)))}${toHex(lighten(lighten(b)))}`;
  const dark = `#${toHex(darken(r))}${toHex(darken(g))}${toHex(darken(b))}`;
  const darker = `#${toHex(darken(darken(r)))}${toHex(darken(darken(g)))}${toHex(darken(darken(b)))}`;

  return {
    main: hexColor,
    light,
    lighter,
    dark,
    darker
  };
};

// Vous pouvez personnaliser ces thèmes par défaut
export const defaultThemes = {
  light: {
    primary: calculateShades("#3C1B43"),
    secondary: calculateShades("#501537"),
    background: '#f5f5f5',
    text: '#1e1e1e',
    fontFamily: "Nunito Sans, sans-serif",
    headingFont: "cursive, sans-serif",
  },
  dark: {
    primary: calculateShades('#0070f3'),
    secondary: calculateShades('#79b8ff'),
    background: '#1a1a1a',
    text: '#ffffff',
    fontFamily: "Nunito Sans, sans-serif",
    headingFont: "cursive, sans-serif",
  },
};

type ThemeType = 'light' | 'dark';
type ThemeContextType = {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
  customizeTheme: (themeType: ThemeType, newColors: Partial<ThemeColors>) => void;
};

// Création du contexte
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props pour le provider
interface ThemeProviderProps {
  /**
   * The children of the ThemeProvider
   */
  children: ReactNode;
  /**
   * The initial theme to use
   */
  initialTheme?: ThemeType;
  /**
   * The custom themes to use
   */
  customThemes?: {
    light?: Partial<ThemeColors>;
    dark?: Partial<ThemeColors>;
  };
  /**
   * The storage key to use for the theme
   */
  storageKey?: string;
}

/**
 * The ThemeProvider component will help you to manage the theme of your application.
 * 
 * How to use:
 * 
 * ```tsx
 * import { ThemeProvider, useTheme, calculateShades } from 'react-kariu';
 *  <ThemeProvider initialTheme="light" 
 *    customThemes={{ 
 *       primary: calculateShades('#e74c3c'),
 *       secondary: calculateShades('#e67e22')
 *    }}>
 *   <App />
 * </ThemeProvider>
 * ```
 * 
 * @param props - The props of the ThemeProvider
 * @returns The ThemeProvider component
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'light',
  customThemes = {},
  storageKey = 'app-theme',
}) => {
  // Fusionner les thèmes personnalisés avec les thèmes par défaut
  const [themes, setThemes] = useState({
    light: { ...defaultThemes.light, ...customThemes.light },
    dark: { ...defaultThemes.dark, ...customThemes.dark },
  });

  // Récupérer le thème du localStorage si disponible
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(storageKey);
      return (savedTheme as ThemeType) || initialTheme;
    }
    return initialTheme;
  });

  // Changer de thème
  const toggleTheme = () => {
    setThemeState(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Définir un thème spécifique
  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  // Personnaliser un thème
  const customizeTheme = (themeType: ThemeType, newColors: Partial<ThemeColors>) => {
    setThemes(prev => {
      const updatedTheme = { ...prev[themeType] };
      
      // Appliquer les nouvelles couleurs
      Object.entries(newColors).forEach(([key, value]) => {
        if (key === 'primary' && typeof value === 'string') {
          // Si primary est donné comme une chaîne simple, calculer les nuances
          updatedTheme.primary = calculateShades(value as string);
        } else {
          // @ts-ignore - Ignorer l'erreur de type car nous faisons une vérification dynamique
          updatedTheme[key] = value;
        }
      });
      
      return {
        ...prev,
        [themeType]: updatedTheme,
      };
    });
  };

  // Sauvegarder le thème dans localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, theme);
      
      // Optionnel: Ajouter une classe sur le document pour faciliter le CSS global
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, storageKey]);

  // Valeur du contexte
  const contextValue: ThemeContextType = {
    theme,
    colors: themes[theme],
    toggleTheme,
    setTheme,
    customizeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le thème
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
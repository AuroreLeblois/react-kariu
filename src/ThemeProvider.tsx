// src/ThemeProvider.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type Nuances = {
  main: string;
  light: string; 
  lighter: string;
  dark: string;
  darker: string;
}
// Types pour les thèmes
export type ThemeColors = {
  primary: Nuances;
  secondary: Nuances;
  background: string;
  text: string;
  fontFamily: string;
  headingFont: string;
};

// Fonction pour calculer les nuances de couleur
const calculateShades = (hexColor: string): Nuances => {
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
const defaultThemes = {
  light: {
    primary: calculateShades("#3C1B43"),
    secondary: calculateShades("#501537"),
    background: '#f5f5f5',
    text: '#333311',
    fontFamily: "'Roboto', sans-serif",
    headingFont: "'Montserrat', sans-serif",
  },
  dark: {
    primary: calculateShades('#0070f3'),
    secondary: calculateShades('#79b8ff'),
    background: '#1a1a1a',
    text: '#ffffff',
    fontFamily: "'Roboto', sans-serif",
    headingFont: "'Montserrat', sans-serif",
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
  children: ReactNode;
  initialTheme?: ThemeType;
  customThemes?: {
    light?: Partial<ThemeColors>;
    dark?: Partial<ThemeColors>;
  };
  storageKey?: string;
}

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
    throw new Error('useTheme doit être utilisé à l\'intérieur d\'un ThemeProvider');
  }
  return context;
};
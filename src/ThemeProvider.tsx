// src/ThemeProvider.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Types pour les thèmes
export type ThemeColors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
};

// Vous pouvez personnaliser ces thèmes par défaut
const defaultThemes = {
  light: {
    primary: '#0070f3',
    secondary: '#1a73e8',
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    primary: '#0070f3',
    secondary: '#79b8ff',
    background: '#1a1a1a',
    text: '#ffffff',
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
    brand?: Partial<ThemeColors>;
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
    setThemes(prev => ({
      ...prev,
      [themeType]: {
        ...prev[themeType],
        ...newColors,
      },
    }));
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
// src/ThemeProvider.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ThemeColors, ThemeType, ThemeContextType } from './types';
import { calculateShades } from './colorContrast';
import { defaultThemes } from './defaultTheme';


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
 * 
 * // OR
 *  * import { ThemeProvider, useTheme, calculateShades } from 'react-kariu';
 *  <ThemeProvider initialTheme="light" 
 *    customThemes={{ 
 *       primary: {main: '#e74c3c', light: '#c0392b', dark: '#a13223', darker: '#892c1e'},
 *       secondary: {main: '#e67e22', light: '#d3701e', dark: '#c2621b', darker: '#a14d16'},
 *       text: {main: '#1e1e1f', light: '#333333', dark: '#000000', darker: '#000000'},
 *       background: {main: '#f5f5f5', light: '#ffffff', dark: '#e0e0e0', darker: '#d0d0d0'},
 *       border: '#e0e0e0'
 *    }}>
 *   <App />
 * </ThemeProvider>
 * 
 * 
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
  useEffect(() => {
    setThemeState(initialTheme);
  }, [initialTheme]);

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
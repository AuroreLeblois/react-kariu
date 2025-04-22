import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { ThemeProvider } from '../src/ThemeProvider';

// Définir les thèmes personnalisés disponibles dans Storybook
const customThemes = {
  light:  {
    primary: '#8e44ad',
    secondary: '#3498db',
    background: '#f5f5f5',
    text: '#333333',
  },
  dark: {
    primary: '#0070f3',
    secondary: '#79b8ff',
    background: '#1a1a1a',
    text: '#ffffff',
  }
};

// Décorateur global qui applique le ThemeProvider à toutes les stories
const withThemeProvider: Decorator = (Story, context) => {
  // Obtenir le thème à partir des paramètres de Storybook
  const { theme = 'brand' } = context.globals;
  return React.createElement(ThemeProvider, {
    initialTheme: theme as 'light' | 'dark',
    customThemes: {
      light: customThemes.light,
      dark: customThemes.dark,
    },
    children: React.createElement(Story)
  });
};

const preview: Preview = {
  decorators: [withThemeProvider],
  globalTypes: {
    theme: {
      name: 'Thème',
      description: 'Thème global pour les composants',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Clair' },
          { value: 'dark', icon: 'moon', title: 'Sombre' },
        ],
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

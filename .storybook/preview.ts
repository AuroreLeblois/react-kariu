import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { ThemeProvider } from '../src/ThemeProvider';


// Décorateur global qui applique le ThemeProvider à toutes les stories
const withThemeProvider: Decorator = (Story, context) => {
  // Obtenir le thème à partir des paramètres de Storybook
  const { theme = 'light' } = context.globals;
  return React.createElement(ThemeProvider, {
    initialTheme: theme as 'light' | 'dark',
    customThemes: {
      light: theme.light,
      dark: theme.dark,
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

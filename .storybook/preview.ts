import React from 'react';
import { Preview, Decorator } from '@storybook/react';
import { ThemeProvider, defaultThemes } from '../src/Theme/ThemeProvider';

// Décorateur global qui applique le ThemeProvider à toutes les stories
const withThemeProvider: Decorator = (Story, context) => {
  // Obtenir le thème à partir des paramètres de Storybook
  const theme = context.parameters.theme || context.globals.theme;
  
  // Créer un composant intermédiaire avec un état local
  const ThemedStory = () => {
    const [currentTheme, setCurrentTheme] = React.useState(theme);
    
    // Mettre à jour l'état local lorsque le thème global change
    React.useEffect(() => {
      setCurrentTheme(theme);
    }, [theme]);
    
    return React.createElement(ThemeProvider, {
      initialTheme: currentTheme,
      customThemes: defaultThemes,
      children: React.createElement(Story)
    });
  };
  
  return React.createElement(ThemedStory);
};

const preview: Preview = {
  decorators: [withThemeProvider],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme global for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'light' },
          { value: 'dark', icon: 'moon', title: 'dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        text: /Text$/,
      },
    },
  },
};

export default preview;

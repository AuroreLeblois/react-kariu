import React from 'react';
import { Preview, Decorator } from '@storybook/react-vite';
import { ThemeProvider } from '../src/Theme/ThemeProvider';
import { defaultThemes } from '../src/Theme/defaultTheme';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// Décorateur global qui applique le ThemeProvider à toutes les stories
const withThemeProvider: Decorator = (Story, context) => {
  // Obtenir le thème à partir des paramètres de Storybook
  const { theme = 'light' } = context.globals;
  
  // Utiliser le thème actuel de la barre d'outils au lieu de seulement initialTheme
  return React.createElement(ThemeProvider, {
    initialTheme: theme,
    customThemes: defaultThemes,
    children: React.createElement(Story)
  });
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
        defaultValue: 'light',
      },
    },
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        text: /Text$/,
      },
    },
  },
  tags: ['autodocs']
};

export default preview;

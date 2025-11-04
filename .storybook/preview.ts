import React, { useEffect } from 'react';
import { Preview, Decorator } from '@storybook/react-vite';
import { ThemeProvider } from '../src/Theme/ThemeProvider';
import { defaultThemes } from '../src/Theme/defaultTheme';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// Configuration Google Analytics pour le tracking des pages
const GA_MEASUREMENT_ID = process.env.STORYBOOK_GA_ID || 'G-XXXXXXXXXX';

// Fonction pour envoyer un événement de page vue à Google Analytics
const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title || path,
    });
  }
};

// Décorateur pour le tracking Google Analytics
const withAnalytics: Decorator = (Story, context) => {
  useEffect(() => {
    // Tracker la page actuelle au chargement et lors des changements
    const storyId = context.id;
    const storyName = context.name || storyId;
    const viewMode = context.viewMode;
    const path = viewMode === 'docs' ? `/docs/${storyId}` : `/story/${storyId}`;
    const title = viewMode === 'docs' ? `Docs: ${storyName}` : `Story: ${storyName}`;
    
    trackPageView(path, title);
  }, [context.id, context.viewMode, context.name]);

  return React.createElement(Story);
};

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
  decorators: [withAnalytics, withThemeProvider],
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

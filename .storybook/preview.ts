import React, { useEffect } from 'react';
import { Preview, Decorator } from '@storybook/react-vite';
import { ThemeProvider, useTheme } from '../src/Theme/ThemeProvider';
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

// Composant interne pour appliquer le style du canvas
const CanvasBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colors } = useTheme();

  useEffect(() => {
    const backgroundColor = colors.background.main;

    // Créer ou mettre à jour une variable CSS personnalisée
    const styleId = 'storybook-theme-background';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    // Styles CSS pour cibler tous les éléments du canvas Storybook
    styleElement.textContent = `
      #storybook-root,
      .sb-show-main,
      .sb-main-padded,
      .os-host,
      .os-content,
      [data-is-story="true"],
      .docs-story,
      .sb-story,
      .sb-wrapper,
      .sb-main,
      .os-viewport {
        background-color: ${backgroundColor} !important;
      }
      
      /* Cibler aussi les iframes de preview si nécessaire */
      iframe[id^="storybook-preview"] {
        background-color: ${backgroundColor} !important;
      }
    `;

    // Appliquer aussi directement sur les éléments existants
    const applyCanvasBackground = () => {
      const selectors = [
        '#storybook-root',
        '.sb-show-main',
        '.sb-main-padded',
        '[data-is-story="true"]',
        '.docs-story',
        '.sb-story',
        '.sb-wrapper',
      ];

      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          (el as HTMLElement).style.backgroundColor = backgroundColor;
        });
      });
    };

    // Appliquer immédiatement
    applyCanvasBackground();

    // Réappliquer après un court délai
    const timeoutId = setTimeout(applyCanvasBackground, 100);
    const timeoutId2 = setTimeout(applyCanvasBackground, 500);

    // Observer les changements DOM
    const observer = new MutationObserver(() => {
      applyCanvasBackground();
    });

    const rootElement = document.getElementById('storybook-root') || document.body;
    if (rootElement) {
      observer.observe(rootElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style'],
      });
    }

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      observer.disconnect();
      // Ne pas supprimer le style car il sera mis à jour au prochain changement de thème
    };
  }, [colors.background.main]);

  return React.createElement(React.Fragment, null, children);
};

// Décorateur global qui applique le ThemeProvider à toutes les stories
const withThemeProvider: Decorator = (Story, context) => {
  // Obtenir le thème à partir des paramètres de Storybook
  const { theme = 'light' } = context.globals;
  
  // Utiliser le thème actuel de la barre d'outils au lieu de seulement initialTheme
  return React.createElement(ThemeProvider, {
    initialTheme: theme,
    customThemes: defaultThemes,
    children: React.createElement(CanvasBackground, {
      children: React.createElement(Story)
    })
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

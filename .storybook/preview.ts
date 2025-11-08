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
    let isUpdating = false;
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    // Réinitialiser lastAppliedColor quand la couleur change
    let lastAppliedColor: string | null = null;

    // Créer ou mettre à jour une variable CSS personnalisée
    const styleId = 'storybook-theme-background';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    // Fonction pour mettre à jour les styles CSS (sans modifier le DOM directement)
    const updateStyles = () => {
      // Éviter les mises à jour inutiles si la couleur est déjà appliquée
      if (isUpdating || lastAppliedColor === backgroundColor) return;
      
      isUpdating = true;

      // Styles CSS pour cibler tous les éléments du canvas Storybook
      // On utilise uniquement CSS pour éviter de déclencher le MutationObserver
      const newStyleContent = `
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
        .os-viewport,
        .sbdocs,
        .sbdocs-wrapper,
        .sbdocs-preview,
        .sbdocs-content {
          background-color: ${backgroundColor} !important;
        }
        
        /* Cibler aussi les iframes de preview si nécessaire */
        iframe[id^="storybook-preview"] {
          background-color: ${backgroundColor} !important;
        }
      `;

      // Ne mettre à jour que si le contenu a changé
      if (styleElement.textContent !== newStyleContent) {
        styleElement.textContent = newStyleContent;
        lastAppliedColor = backgroundColor;
      }

      // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
      requestAnimationFrame(() => {
        isUpdating = false;
      });
    };

    // Fonction debounced pour éviter les boucles infinies
    const debouncedUpdate = () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      debounceTimer = setTimeout(() => {
        updateStyles();
      }, 50);
    };

    // Mettre à jour immédiatement
    updateStyles();

    // Mettre à jour après un court délai pour les éléments chargés plus tard
    const timeoutId = setTimeout(updateStyles, 100);
    const timeoutId2 = setTimeout(updateStyles, 300);

    // Observer les changements DOM avec un debounce et seulement pour les ajouts d'éléments
    // On évite d'observer les changements d'attributs style pour éviter les boucles
    const observer = new MutationObserver((mutations) => {
      // Ne réagir que si de nouveaux éléments sont ajoutés, pas si des styles changent
      const hasNewNodes = mutations.some(mutation => 
        mutation.addedNodes.length > 0 && 
        !isUpdating
      );

      if (hasNewNodes) {
        debouncedUpdate();
      }
    });

    // Observer uniquement les ajouts de nœuds, pas les changements d'attributs
    const rootElement = document.getElementById('storybook-root') || document.body;
    if (rootElement) {
      observer.observe(rootElement, {
        childList: true,
        subtree: true,
        // Ne pas observer les attributs pour éviter les boucles
      });
    }

    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      observer.disconnect();
      isUpdating = false;
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

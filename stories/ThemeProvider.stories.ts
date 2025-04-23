import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Button, Title, Text } from '../src/Atoms';
import { ThemeProvider, useTheme, calculateShades } from '../src/Theme/ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Theming/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

// Demo component to display the current theme
const ThemeDemo = () => {
  const { theme, colors, toggleTheme, customizeTheme } = useTheme();
  
  return React.createElement('div', {
    style: {
      padding: '20px',
      backgroundColor: colors.background,
      color: colors.text, 
      fontFamily: colors.fontFamily,
      borderRadius: '8px',
      width: '400px',
      transition: 'all 0.3s ease'
    }
  }, [
    React.createElement(Title, {
      priority: 1,
      text: 'ThemeProvider Demo'
    }),
    React.createElement(Text, {
      text: `Current theme: ${theme}`
    }),
    React.createElement('div', {
      style: { marginTop: '20px' }
    },
      React.createElement(Title, {
        priority: 2,
        text: 'Theme Colors'
      }),
      React.createElement('ul', null,
        React.createElement('li', null, 'Primary: ', React.createElement(Text, {
          component: 'span',
          text: colors.primary.main,
          textColor: colors.primary.main
        })),
        React.createElement('li', null, 'Primary light: ', React.createElement(Text, {
          component: 'span',
          text: colors.primary.light,
          textColor: colors.primary.light
        })),
        React.createElement('li', null, 'Primary dark: ', React.createElement(Text, {
          component: 'span',
          text: colors.primary.dark,
          textColor: colors.primary.dark
        })),
        React.createElement('li', null, 'Primary darker: ', React.createElement(Text, {
          component: 'span',
          text: colors.primary.darker,
          textColor: colors.primary.darker
        })),
        React.createElement('li', null, 'Secondary: ', React.createElement(Text, {
          component: 'span',
          text: colors.secondary.main,
          textColor: colors.secondary.main
        })),
        React.createElement('li', null, 'Secondary light: ', React.createElement(Text, {
          component: 'span',
          text: colors.secondary.light,
          textColor: colors.secondary.light
        })),
        React.createElement('li', null, 'Secondary dark: ', React.createElement(Text, {
          component: 'span',
          text: colors.secondary.dark,
          textColor: colors.secondary.dark
        })),
        React.createElement('li', null, 'Secondary darker: ', React.createElement(Text, {
          component: 'span',
          text: colors.secondary.darker,
          textColor: colors.secondary.darker
        })),
        React.createElement('li', null, 'Background: ', colors.background),
        React.createElement('li', null, 'Text: ', colors.text),
        React.createElement('li', null, 'Font Family: ', colors.fontFamily),
        React.createElement('li', null, 'Heading Font: ', colors.headingFont)
      )
    ),
    
    React.createElement(Button, {
      onClick: toggleTheme,
      label: 'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme',
      size: 'medium',
      shape: 'square'
    }),
    
    React.createElement(Button, {
      onClick: () => customizeTheme(theme, { 
        primary: calculateShades(theme === 'light' ? '#FF5733' : '#33FF57'),
        secondary: calculateShades(theme === 'light' ? '#C70039' : '#039C73')
      }),
      label: 'Customize Colors',
      backgroundColor: colors.secondary.main,
      shape: 'square'
    })
  ]);
};

// Story with default light theme
export const DefaultLightTheme: Story = {
  render: () => React.createElement(ThemeProvider, null,
    React.createElement(ThemeDemo, null)
  ),
};

// Story with default dark theme
export const DefaultDarkTheme: Story = {
  render: () => React.createElement(ThemeProvider, { initialTheme: "dark", children: 
    React.createElement(ThemeDemo, null)
  }),
};

// Story with custom themes
export const ThemesPersonnalises: Story = {
  render: () => React.createElement(ThemeProvider, {
    customThemes: {
      light: {
        primary: calculateShades('#e74c3c'),
        secondary: calculateShades('#e67e22'),
        background: '#ecf0f1',
        text: '#2c3e50',
        fontFamily: "'cursive', sans-serif",
        headingFont: "Playfair Display, serif"
      },
      dark: {
        primary: calculateShades('#9b59b6'),
        secondary: calculateShades('#2ecc71'),
        background: '#2c3e50',
        text: '#ecf0f1',
        fontFamily: "cursive, sans-serif",
        headingFont: "cursive, sans-serif"
      }
    },
    children: React.createElement(ThemeDemo, null)
  })
};
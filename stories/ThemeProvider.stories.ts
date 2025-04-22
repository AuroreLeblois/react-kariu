import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
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
    React.createElement('h1', {
      style: {
        color: colors.primary.main,
        fontFamily: colors.headingFont
      }
    }, 'ThemeProvider Demo'),
    React.createElement('p', null, [
      'Current theme: ',
      React.createElement('strong', null, theme)
    ]),
    React.createElement('div', {
      style: { marginTop: '20px' }
    },
      React.createElement('h2', {
        style: {
          color: colors.secondary.main,
          fontFamily: colors.headingFont 
        }
      }, 'Theme Colors'),
      React.createElement('ul', null,
        React.createElement('li', null, 'Primary: ', React.createElement('span', {
          style: { color: colors.primary.main }
        }, colors.primary.main)),
        React.createElement('li', null, 'Primary light: ', React.createElement('span', {
          style: { color: colors.primary.light }
        }, colors.primary.light)),
        React.createElement('li', null, 'Primary dark: ', React.createElement('span', {
          style: { color: colors.primary.dark }
        }, colors.primary.dark)),
        React.createElement('li', null, 'Primary darker: ', React.createElement('span', {
          style: { color: colors.primary.darker }
        }, colors.primary.darker)),
        React.createElement('li', null, 'Secondary: ', React.createElement('span', {
          style: { color: colors.secondary.main }
        }, colors.secondary.main)),
        React.createElement('li', null, 'Secondary light: ', React.createElement('span', {
          style: { color: colors.secondary.light }
        }, colors.secondary.light)),
        React.createElement('li', null, 'Secondary dark: ', React.createElement('span', {
          style: { color: colors.secondary.dark }
        }, colors.secondary.dark)),
        React.createElement('li', null, 'Secondary darker: ', React.createElement('span', {
          style: { color: colors.secondary.darker }
        }, colors.secondary.darker)),
        React.createElement('li', null, 'Background: ', colors.background),
        React.createElement('li', null, 'Text: ', colors.text),
        React.createElement('li', null, 'Font Family: ', colors.fontFamily),
        React.createElement('li', null, 'Heading Font: ', colors.headingFont)
      )
    ),
    
    React.createElement('button', {
      onClick: toggleTheme,
      style: {
        backgroundColor: colors.primary.main,
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontFamily: colors.fontFamily,
        marginTop: '20px'
      }
    }, 'Switch to ', theme === 'light' ? 'dark' : 'light', ' theme'),
    
    React.createElement('button', {
      onClick: () => customizeTheme(theme, { 
        primary: calculateShades(theme === 'light' ? '#FF5733' : '#33FF57'),
        secondary: calculateShades(theme === 'light' ? '#C70039' : '#039C73')
      }),
      style: {
        backgroundColor: colors.secondary.main,
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontFamily: colors.fontFamily,
        marginTop: '20px',
        marginLeft: '10px'
      }
    }, 'Customize Colors')
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
        headingFont: "'Playfair Display', serif"
      },
      dark: {
        primary: calculateShades('#9b59b6'),
        secondary: calculateShades('#2ecc71'),
        background: '#2c3e50',
        text: '#ecf0f1',
        fontFamily: "'cursive', sans-serif",
        headingFont: "'cursive', sans-serif"
      }
    },
    children: React.createElement(ThemeDemo, null)
  })
};
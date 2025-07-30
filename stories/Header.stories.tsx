import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import Header, { NavButton } from '../src/Container/Header';
import { ThemeProvider } from '../src/Theme/ThemeProvider';

const meta: Meta<typeof Header> = {
  title: 'Beta/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof Header>;

const Logo = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#FF5733" />
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="Arial" dy=".3em">K</text>
  </svg>
);

const navButtons: NavButton[] = [
  {
    label: 'Accueil',
    onClick: () => alert('Accueil'),
  },
  {
    label: 'Profil',
    onClick: () => alert('Profil'),
  },
  {
    label: 'Déconnexion',
    onClick: () => alert('Déconnexion'),
  },
];

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <Header
        logo={Logo}
        title="Kariu App"
        navButtons={navButtons}
      />
    </ThemeProvider>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider initialTheme="dark">
      <Header
        logo={Logo}
        title="Kariu App (Dark)"
        navButtons={navButtons}
      />
    </ThemeProvider>
  ),
}; 
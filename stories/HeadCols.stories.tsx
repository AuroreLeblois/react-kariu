import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HeadCols from '../src/Components/calendar/HeadCols';

const meta: Meta<typeof HeadCols> = {
  title: 'Components/Calendar/HeadCols',
  component: HeadCols,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    language: { 
      control: 'select', 
      options: ['fr', 'en'],
      description: 'Langue d\'affichage du calendrier'
    },
    yearSelected: { 
      control: 'number',
      description: 'Année sélectionnée' 
    },
    monthSelected: { 
      control: 'number', 
      min: 1, 
      max: 12,
      description: 'Mois sélectionné (1-12)' 
    },
    fontFamily: { 
      control: 'text',
      description: 'Police d\'écriture' 
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeadCols>;

// Story de base - Jours de la semaine en français
export const DefaultFrench: Story = {
  args: {
    language: 'fr',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
        <Story />
      </div>
    ),
  ],
};

// Story en anglais
export const DefaultEnglish: Story = {
  args: {
    language: 'en',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
        <Story />
      </div>
    ),
  ],
};

// Mois actuel en français
export const CurrentMonthFrench: Story = {
  args: {
    language: 'fr',
    yearSelected: new Date().getFullYear(),
    monthSelected: new Date().getMonth() + 1,
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '5px', maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

// Mois actuel en anglais
export const CurrentMonthEnglish: Story = {
  args: {
    language: 'en',
    yearSelected: new Date().getFullYear(),
    monthSelected: new Date().getMonth() + 1,
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '5px', maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

// Mois spécifique (décembre 2023)
export const SpecificMonth: Story = {
  args: {
    language: 'fr',
    yearSelected: 2023,
    monthSelected: 12,
    fontFamily: 'Arial',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '5px', maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

// Police personnalisée
export const CustomFont: Story = {
  args: {
    language: 'fr',
    yearSelected: new Date().getFullYear(),
    monthSelected: new Date().getMonth() + 1,
    fontFamily: 'Courier New',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '5px', maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};
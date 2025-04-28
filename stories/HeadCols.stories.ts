import { Meta, StoryObj } from '@storybook/react';
import HeadCols from '../src/Container/calendar/HeadCols';

const meta = {
  title: 'Beta/Calendar/HeadCols',
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
  }
};


// Story en anglais
export const DefaultEnglish: Story = {
  args: {
    language: 'en',
  }
};

// Mois actuel en français
export const CurrentMonthFrench: Story = {
  args: {
    language: 'fr',
    yearSelected: new Date().getFullYear(),
    monthSelected: new Date().getMonth() + 1,
  }
};

// Mois actuel en anglais
export const CurrentMonthEnglish: Story = {
  args: {
    language: 'en',
    yearSelected: new Date().getFullYear(),
    monthSelected: new Date().getMonth() + 1,
  }
};

// Mois spécifique (décembre 2023)
export const SpecificMonth: Story = {
  args: {
    language: 'fr',
    yearSelected: 2023,
    monthSelected: 12,
    fontFamily: 'Arial',
  }
};

// Police personnalisée
export const CustomFont: Story = {
  args: {
    language: 'fr',
    yearSelected: new Date().getFullYear(),
    monthSelected: new Date().getMonth() + 1,
    fontFamily: 'Courier New',
  }
};
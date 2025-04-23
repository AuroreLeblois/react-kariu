import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, Text } from '../src';

// Configuration de base pour le composant Card
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    width: { control: 'text' },
    grow: { control: 'number' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'accordion', 'elevated'],
    },
    showCard: { control: 'boolean' },
    showContent: { control: 'boolean' },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Story pour la variante par défaut
export const Default: Story = {
  args: {
    title: 'Default',
    showCard: true,
    children: React.createElement(Text, { text: "Content" }),
  },
};

// Story pour la variante accordion
export const Accordion: Story = {
  args: {
    title: 'Accordion',
    showCard: true,
    variant: 'accordion',
    children: React.createElement(Text, { text: "Accordion content" }),
  },
};

// Story pour la variante elevated
export const Elevated: Story = {
  args: {
    title: 'Elevated',
    variant: 'elevated',
    children: React.createElement(Text, { text: "Elevated card" }),
  },
};

// Story avec couleurs personnalisées
export const CustomColors: Story = {
  args: {
    title: 'Custom colors',
    backgroundColor: '#f0f8ff',
    textColor: '#0066cc',
    children: React.createElement(Text, { text: "Custom colors" }),
  },
};

// Story avec contenu long
export const WithLongContent: Story = {
  args: {
    title: 'Long content',
    children: React.createElement(Text, { 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio." 
    }),
  },
};

// Story sans carte (uniquement le contenu)
export const WithoutCard: Story = {
  args: {
    title: 'Without card',
    showCard: false,
    children: React.createElement(Text, { text: "Content displayed without the card frame" }),
  },
};

// Story avec largeur personnalisée
export const CustomWidth: Story = {
  args: {
    title: 'Custom width',
    width: '300px',
    children: React.createElement(Text, { text: "This card has a fixed width of 300px" }),
  },
};

// Story avec contenu caché initialement
export const HiddenContent: Story = {
  args: {
    title: 'Hidden content',
    variant: 'accordion',
    showContent: false,
    children: React.createElement(Text, { text: "Hidden content" }),
  },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from '../src';

const meta = {
  title: 'Atoms/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    children: [
      <ListItem key="1">Item 1</ListItem>,
      <ListItem key="2">Item 2</ListItem>,
      <ListItem key="3">Item 3</ListItem>,
    ],
  },
};

export const CustomStyle: Story = {
  args: {
    style: { background: '#e3f2fd', border: '2px dashed #1976d2' },
    children: [
      <ListItem key="1" style={{ color: '#1976d2', fontWeight: 'bold' }}>Personnalisé 1</ListItem>,
      <ListItem key="2" style={{ color: '#388e3c' }}>Personnalisé 2</ListItem>,
      <ListItem key="3" style={{ color: '#d32f2f' }}>Personnalisé 3</ListItem>,
    ],
  },
};

export const WithLongContent: Story = {
  args: {
    children: [
      <ListItem key="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListItem>,
      <ListItem key="2">Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.</ListItem>,
      <ListItem key="3">Vitae scelerisque enim ligula venenatis dolor.</ListItem>,
    ],
  },
};

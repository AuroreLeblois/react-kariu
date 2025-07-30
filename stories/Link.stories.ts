import type { Meta, StoryObj } from '@storybook/react-vite';
import Link from '../src/Atoms/Link/Link';

// Plus d'informations sur la configuration des histoires : https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    // Paramètre optionnel pour centrer le composant dans le Canvas. Plus d'infos : https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // Ce composant aura une entrée Autodocs générée automatiquement : https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Plus d'infos sur argTypes : https://storybook.js.org/docs/api/argtypes
  argTypes: {
    href: { control: 'text' },
    label: { control: 'text' },
    className: { control: 'text' },
    external: { control: 'boolean' },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// Plus d'infos sur l'écriture d'histoires avec des args : https://storybook.js.org/docs/writing-stories/args
export const InternalLink: Story = {
  args: {
    href: '/internal-page',
    label: 'Internal Link',
    className: 'internal-link',
    external: false,
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://www.example.com',
    label: 'External Link',
    className: 'external-link',
    external: true,
  },
};
// src/stories/Welcome.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Welcome from './Welcome';

const meta = {
  component: Welcome,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
} satisfies Meta<typeof Welcome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Introduction: Story = {};

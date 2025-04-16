import type { Meta, StoryObj } from '@storybook/react';
import Title from '../src/Atoms/Text/Title';

const meta = {

  title: 'Atoms/Title',

  component: Title,

  tags: ['autodocs'],

  parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
  },
  argTypes: {
      priority: { control: 'select' }
    },

} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const H1: Story = {
  args: {
    text: 'This is a default text.',
    priority: 1,
  },
};

export const H2: Story = {
  args: {
    text: 'This is a default text.',
    priority: 2,
  },
};

export const H3: Story = {
  args: {
    text: 'This is a default text.',
    priority: 3,
  },
};

export const H4: Story = {
  args: {
    text: 'This is a default text.',
    priority: 4,
  },
};

export const H5: Story = {
  args: {
    text: 'This is a default text.',
    priority: 5,
  },
};

export const H6: Story = {
  args: {
    text: 'This is a default text.',
    priority: 6,
  },
};





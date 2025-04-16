import type { Meta, StoryObj } from '@storybook/react';
import Dot from '../src/Atoms/Assets/Dot';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Dot',
  component: Dot,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      customColor: { control: 'color' },
    },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Dot>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Marked: Story = {
  args: {
    marked: true,
  },
};

export const Special: Story = {
  args: {
    special: true,
  },
};

export const SpecialAndMarked: Story = {
  args: {
    marked: true,
    special: true,
  } 
};

export const CustomColor: Story = {
  args: {
    customColor: 'cyan',
  }
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Avatar } from '../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    name: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    name: 'TEST NAME',
    size: "large"
  },
};

export const Url: Story = {
  args: {
    name: 'TEST NAME',
    backgroundColor: 'tomato',
    size: "large",
    url: "https://imgs.search.brave.com/OXO2hNxtSfBrF6crw3ZQm1krkt_hidFc5PDlPtdH3EQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL1AyLXJl/Z2lvbmFsLWlTdG9j/ay0xNDAxOTI3Mjgx/LmpwZw"
  },
};

export const Square: Story = {
  args: {
    shape: "square",
    name: 'TEST NAME',
    size: "large",
  }
};
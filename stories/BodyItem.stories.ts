import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import BodyItem from '../src/Components/calendar/BodyItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/BodyItem',
  component: BodyItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof BodyItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const itemDay= {
  activity_code: 'WORK',
  time_start: '12:00',
  time_end: '19:00',
}

const itemNight= {
  activity_code: 'WORK',
  time_start: '19:00',
  time_end: '08:00',
}

const itemAway= {
  unavailability_code: 'AWAY',
  time_start: '19:00',
  time_end: '08:00',
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    item: itemDay
  },
};

export const Night: Story = {
  args: {
    item: itemNight
  },
};

export const Away: Story = {
  args: {
    item: itemAway
  }
};
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import BodyItem from '../src/Components/calendar/BodyItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Calendar/BodyItem',
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    item: itemDay,
    ripple: true,
    rippleDuration: 500,
    rippleColor: 'rgba(0, 0, 0, 0.3)'
  },
};

const itemNight= {
  activity_code: 'WORK',
  time_start: '19:00',
  time_end: '08:00',
}

export const Night: Story = {
  args: {
    item: itemNight
  },
};

const itemAway= {
  unavailability_code: 'AWAY',
  time_start: '19:00',
  time_end: '08:00',
}
export const Away: Story = {
  args: {
    item: itemAway
  }
};

const itemMarked= {
  activity_code: 'WORK',
  time_start: '19:00',
  time_end: '08:00',
  marked: true,
};
export const Marked: Story = {
  args: {
    item: itemMarked
  }
};

const itemSpecial= {
  activity_code: 'WORK',
  time_start: '19:00',
  time_end: '08:00',
  special: true,
};

export const Special: Story = {
  args: {
    item: itemSpecial
  }
};

const itemHoliday= {
  unavailability_code : 'AWAY',
  time_start: '19:00',
  time_end: '08:00',
  holiday: true,
};

export const Holiday: Story = {
  args: {
    item: itemHoliday
  }
};

const itemMarkedAndSpecial= {
  unavailability_code : 'AWAY',
  time_start: '19:00',
  time_end: '08:00',
  marked: true,
  special: true,
};

export const MarkedAndSpecial: Story = {
  args: {
    item: itemMarkedAndSpecial
  }
};




import type { Meta, StoryObj } from '@storybook/react-vite';
import { BodyItem } from '../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Beta/Calendar/BodyItem',
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
  // Actions can be added here if needed
  args: {},
} satisfies Meta<typeof BodyItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const eventDay = {
  date: '2025-05-01',
  label: 'WORK',
  startTime: '12:00',
  endTime: '19:00',
  variant: 'info' as const,
  marked: false,
  special: false,
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    event: eventDay,
    ripple: true,
    rippleDuration: 500,
    rippleColor: 'rgba(0, 0, 0, 0.3)'
  },
};

const eventNight = {
  date: '2025-05-02',
  label: 'WORK',
  startTime: '19:00',
  endTime: '08:00',
}

export const Night: Story = {
  args: {
    event: eventNight
  },
};

const eventAway = {
  date: '2025-05-03',
  label: 'AWAY',
  variant: 'unavailability' as const,
}
export const Away: Story = {
  args: {
    event: eventAway
  }
};

const eventMarked = {
  date: '2025-05-04',
  label: 'WORK',
  startTime: '19:00',
  endTime: '08:00',
  marked: true,
};
export const Marked: Story = {
  args: {
    event: eventMarked
  }
};

const eventSpecial = {
  date: '2025-05-05',
  label: 'WORK',
  startTime: '19:00',
  endTime: '08:00',
  special: true,
};

export const Special: Story = {
  args: {
    event: eventSpecial
  }
};

const eventHoliday = {
  date: '2025-05-06',
  label : 'AWAY',
  variant: 'unavailability' as const,
};

export const Holiday: Story = {
  args: {
    event: eventHoliday,
    isHoliday: true,
  }
};

const eventMarkedAndSpecial = {
  date: '2025-05-07',
  label : 'AWAY',
  variant: 'unavailability' as const,
  marked: true,
  special: true,
};

export const MarkedAndSpecial: Story = {
  args: {
    event: eventMarkedAndSpecial
  }
};




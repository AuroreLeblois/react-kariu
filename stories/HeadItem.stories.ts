import type { Meta, StoryObj } from '@storybook/react';
import HeadItem from '../src/Container/calendar/HeadItem';

const meta = {
  title: 'Beta/Calendar/HeadItem',
  component: HeadItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeadItem>;

export default meta;
type Story = StoryObj<typeof HeadItem>;

export const CalendarMode: Story = {
  args: {
    date: {
      day: 'Lun',
      number: 15,
      isToday: false,
    },
    className: '',
    fontFamily: 'Arial',
  },
};

export const TodayCalendarMode: Story = {
  args: {
    date: {
      day: 'Mar',
      number: 16,
      isToday: true,
    },
    className: '',
    fontFamily: 'Arial',
  },
};

export const DatepickerMode: Story = {
  args: {
    date: {
      day: 'Mer',
      number: 0,
      isToday: false,
    },
    className: '',
    fontFamily: 'Arial',
  },
}; 
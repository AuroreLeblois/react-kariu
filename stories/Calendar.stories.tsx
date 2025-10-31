import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../src';

const meta = {
  title: 'Beta/Calendar/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

const sampleEvents = [
  { person: 'Alice', events:[{ date: '2025-05-03', label: 'Day', startTime: '08:00', endTime: '16:00', variant: 'default' as const },{ date: '2025-05-05', label: 'OFF', variant: 'unavailability' as const }]},
  { person: 'Bob',   events:[{ date: '2025-05-02', label: 'Night', startTime: '21:00', endTime: '06:00', special: true }] },
];

const sampleVHead = [{ name: 'Alice' }, { name: 'Bob' }];

const sampleHolidays = [
  { month_day: '5-01' }, // May 1st
  { month_day: '5-08' },
];

export const Basic: Story = {
  args: {
    language: 'en',
    yearSelected: 2025,
    monthSelected: 5,
    vhead: sampleVHead,
    events: sampleEvents,
    holidays: sampleHolidays,
    showAvatar: true,
  },
};



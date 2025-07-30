import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import RadioGroup from '../src/Form/RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// Options communes pour les exemples
const defaultOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export const Default: Story = {
  args: {
    name: 'default-example',
    options: defaultOptions,
    defaultValue: 'option1',
    direction: 'column',
  },
};

export const InlineDirection: Story = {
  args: {
    ...Default.args,
    direction: 'row',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    ...Default.args,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2 (désactivée)', value: 'option2', disabled: true },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const AllDisabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const CustomColor: Story = {
  args: {
    ...Default.args,
    color: '#ff5722',
  },
}; 
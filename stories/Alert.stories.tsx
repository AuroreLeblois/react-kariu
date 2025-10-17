import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '../src';
import React from 'react';

const meta = {
  title: 'Container/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'danger'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
    closable: { control: 'boolean' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an information alert.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your operation completed successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please verify the provided information.',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Error',
    message: 'A critical error occurred.',
  },
};

export const Closable: Story = {
  args: {
    variant: 'info',
    title: 'Closable',
    message: 'You can close this alert.',
    closable: true,
    onClose: () => console.log('Alert closed'),
  },
};

export const WithChildren: Story = {
  args: {
    variant: 'info',
    title: 'With custom content',
    children: (
      <React.Fragment>
        <p style={{ margin: 0 }}>Main text.</p>
        <small>Additional secondary text.</small>
      </React.Fragment>
    ),
  },
};



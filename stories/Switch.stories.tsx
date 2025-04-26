import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Switch from '../src/Atoms/Input/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Input/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A switch component to toggle features on and off.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the switch',
    },
    checked: {
      control: 'boolean',
      description: 'Current state of the switch',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch',
    },
    label: {
      control: 'text',
      description: 'Text to display next to the switch',
    },
    color: {
      control: 'color',
      description: 'Custom color for the switch',
    },
    ripple: {
      control: 'boolean',
      description: 'Enables/disables the ripple effect',
    },
    rippleDuration: {
      control: { type: 'number', min: 100, max: 2000, step: 100 },
      description: 'Duration of the ripple animation in ms',
    },
    rippleColor: {
      control: 'color',
      description: 'Color of the ripple effect',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Basic switch story
export const Default: Story = {
  args: {
    label: 'Dark Mode',
    checked: false,
    size: 'medium',
    disabled: false,
    ripple: true,
    rippleDuration: 500,
  },
};

// Interactive story with state
export const Interactive = () => {
  const [checked, setChecked] = useState(false);
  
  return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Switch 
          label={`Switch is ${checked ? 'on' : 'off'}`} 
          checked={checked} 
          onChange={(e) => setChecked(e.target.checked)} 
        />
      </div>
  );
};

// Story showing different sizes
export const Sizes = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch label="Small size" size="small" />
      <Switch label="Medium size (default)" size="medium" />
      <Switch label="Large size" size="large" />
    </div>
);

// Story showing different states
export const States = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch label="Default state" />
      <Switch label="Checked state" checked={true} />
      <Switch label="Disabled state" disabled={true} />
      <Switch label="Checked and disabled" checked={true} disabled={true} />
    </div>
);

// Story with custom colors
export const CustomColors = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch label="Primary color (default)" checked={true} />
      <Switch label="Custom blue" checked={true} color="#2196F3" />
      <Switch label="Custom green" checked={true} color="#4CAF50" />
      <Switch label="Custom purple" checked={true} color="#9C27B0" />
    </div>
);

// Story without ripple effect
export const NoRipple = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch label="Switch with ripple (default)" />
      <Switch label="Switch without ripple" ripple={false} />
    </div>
); 
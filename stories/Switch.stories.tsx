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

// Interactive story with state
export const Default = () => {
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
export const Sizes = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch label="Small size" size="small" checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />
      <Switch label="Medium size (default)" size="medium" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} />
      <Switch label="Large size" size="large" checked={checked3} onChange={(e) => setChecked3(e.target.checked)} />
    </div>
  );
};

// Story showing different states
export const States = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch label="Default state" checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />
      <Switch label="Checked state" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} />
      <Switch label="Disabled state" disabled={true} checked={checked3} onChange={(e) => setChecked3(e.target.checked)} />
      <Switch label="Checked and disabled" checked={checked4} disabled={true} />
    </div>
  );
};

// Story with custom colors
export const CustomColors = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch label="Primary color (default)"/>
      <Switch label="Custom blue"  color="#2196F3" />
      <Switch label="Custom green" color="#4CAF50" />
      <Switch label="Custom purple" color="#9C27B0" />
    </div>
  );
};

// Story without ripple effect
export const NoRipple = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch label="Switch with ripple (default)" checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />
      <Switch label="Switch without ripple" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} ripple={false} />
    </div>
  );
}; 
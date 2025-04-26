import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CheckBox from '../src/Atoms/Input/CheckBox';

export default {
  title: 'Atoms/Input/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    size: { 
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    disabled: { control: 'boolean' },
    ripple: { control: 'boolean' },
    rippleDuration: { control: 'number' },
    color: { control: 'color' },
  },
} as Meta<typeof CheckBox>;

// Template de base
const Template: StoryFn<typeof CheckBox> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked || false);
  
  return (
      <CheckBox 
        {...args} 
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
  );
};

// Stories par défaut
export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  checked: false,
  size: 'medium',
  disabled: false,
  ripple: true,
};

// Checkbox cochée
export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  label: 'Checked',
  checked: true,
};

// Small checkbox
export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  label: 'Small',
  size: 'small',
};

// Large checkbox
export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  label: 'Large',
  size: 'large',
};

// Disabled checkbox
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  label: 'Disabled',
  disabled: true,
};

// Disabled and checked checkbox
export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  ...Default.args,
  label: 'Disabled and checked',
  checked: true,
  disabled: true,
};

// Checkbox with custom color
export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  label: 'Custom color',
  color: '#9c27b0',
};

// Checkbox without ripple
export const NoRipple = Template.bind({});
NoRipple.args = {
  ...Default.args,
  label: 'No ripple',
  ripple: false,
};

// Checkbox group
export const CheckboxGroup = () => {
  const [options, setOptions] = useState({
    option1: true,
    option2: false,
    option3: false,
  });

  const handleChange = (option: keyof typeof options) => {
    setOptions({
      ...options,
      [option]: !options[option],
    });
  };

  return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <CheckBox 
          label="Option 1" 
          checked={options.option1} 
          onChange={() => handleChange('option1')}
        />
        <CheckBox 
          label="Option 2" 
          checked={options.option2} 
          onChange={() => handleChange('option2')}
        />
        <CheckBox 
          label="Option 3" 
          checked={options.option3} 
          onChange={() => handleChange('option3')}
        />
      </div>
  );
}; 
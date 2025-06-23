import React, { useState } from 'react';
import TextArea from '../src/Input/TextArea';
import { ThemeProvider } from '../src/Theme/ThemeProvider';

export default {
  title: 'Atoms/Input/TextArea',
  component: TextArea,
  argTypes: {
    label: {
      control: 'string'
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    shape: {
      control: 'radio',
      options: ['square', 'round'],
    },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
      <TextArea
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Your message...',
  label: 'Your message'
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  placeholder: 'Small',
  size: 'small',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  placeholder: 'Large',
  size: 'large',
};

export const SquareShape = Template.bind({});
SquareShape.args = {
  placeholder: 'Square',
  shape: 'square',
};

export const WithRipple = Template.bind({});
WithRipple.args = {
  placeholder: 'With ripple effect',
  ripple: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  disabled: true,
}; 
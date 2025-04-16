import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Ripple } from '../src/Atoms';

const meta: Meta<typeof Ripple> = {
  title: 'Atoms/Ripple',
  component: Ripple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    duration: {
      control: { type: 'number' },
      description: 'Duration of the animation in milliseconds',
    },
    color: {
      control: { type: 'color' },
      description: 'Color of the ripple effect',
    },
    animationType: {
      control: { type: 'select' },
      description: 'Type of animation',
      options: ['circle', 'square', 'fade', 'expand'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Ripple>;

// Conteneur pour montrer l'effet de façon plus visible
const RippleContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className='ripple-container' 
  style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0', 
  display: 'flex', justifyContent: 'center', 
  alignItems: 'center', borderRadius: '4px', cursor: 'pointer' }}>
    <span>Click me! the ripple is here</span>
   {children}
  </div>
);

export const Default: Story = {
  args: {
    duration: 800,
    color: 'rgba(0, 0, 0, 0.1)',
  },
  render: (args) => (
    <RippleContainer>
      <Ripple {...args} />
    </RippleContainer>
  ),
};

export const Fast: Story = {
  args: {
    duration: 100,
    color: 'rgba(0, 0, 0, 0.2)',
  },
  render: (args) => (
    <RippleContainer>
      <Ripple {...args} />
    </RippleContainer>
  ),
};

export const Slow: Story = {
  args: {
    duration: 1500,
    color: 'rgba(0, 0, 0, 0.1)',
  },
  render: (args) => (
    <RippleContainer>
      <Ripple {...args} />
    </RippleContainer>
  ),
};

export const Colored: Story = {
  args: {
    duration: 800,
    color: 'rgba(238, 125, 19, 0.3)',
  },
  render: (args) => (
    <RippleContainer>
      <Ripple {...args} />
    </RippleContainer>
  ),
};

export const SquareAnimation: Story = {
  args: {
    duration: 800,
    color: 'rgba(63, 81, 181, 0.3)',
    animationType: 'square',
  },
  render: (args) => (
    <RippleContainer>
      <Ripple {...args} />
    </RippleContainer>
  ),
};

export const FadeAnimation: Story = {
  args: {
    duration: 800,
    color: 'rgba(76, 175, 80, 0.3)',
    animationType: 'fade',
  },
  render: (args) => (
    <RippleContainer>
      <Ripple {...args} />
    </RippleContainer>
  ),
};

export const ExpandAnimation: Story = {
  args: {
    duration: 800,
    color: 'rgba(233, 30, 99, 0.3)',
    animationType: 'expand',
  },
  render: (args) => (
    <RippleContainer>
      <Ripple {...args} />
    </RippleContainer>
  ),
}; 
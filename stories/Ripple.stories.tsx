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
  },
};

export default meta;
type Story = StoryObj<typeof Ripple>;

// Conteneur pour montrer l'effet de façon plus visible
const RippleContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className='ripple-container' 
  style={{ width: '200px', height: '200px', backgroundColor: '#f0f0f0', 
  display: 'flex', justifyContent: 'center', 
  alignItems: 'center', borderRadius: '4px', cursor: 'pointer' }}>
   
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
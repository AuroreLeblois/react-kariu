import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { HoverAnimation } from '../src/Animation';
import { Button } from '../src/Atoms';

const meta: Meta<typeof HoverAnimation> = {
  title: 'Animation/HoverAnimation',
  component: HoverAnimation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['scale', 'rotate', 'translate', 'opacity', 'elevate', 'shake'],
      description: "Type of hover animation"
    },
    intensity: {
      control: { type: 'range', min: 0.5, max: 3, step: 0.5 },
      description: "Animation intensity"
    },
    duration: {
      control: { type: 'range', min: 100, max: 1000, step: 100 },
      description: "Animation duration in milliseconds"
    },
    children: {
      description: "Content to animate"
    }
  },
};

export default meta;
type Story = StoryObj<typeof HoverAnimation>;

// Common style for examples
const boxStyle = {
  width: '150px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#3498db',
  color: 'white',
  borderRadius: '8px',
  fontWeight: 'bold'
};

// Base story
export const Default: Story = {
  args: {
    type: 'scale',
    intensity: 1,
    duration: 300,
    children: <div style={boxStyle}>Hover me</div>
  }
};

// Scale example
export const Scale: Story = {
  args: {
    type: 'scale',
    intensity: 1.5,
    duration: 300,
    children: <div style={boxStyle}>Scale Effect</div>
  }
};

// Rotate example
export const Rotate: Story = {
  args: {
    type: 'rotate',
    intensity: 1,
    duration: 300,
    children: <div style={boxStyle}>Rotate Effect</div>
  }
};

// Translate example
export const Translate: Story = {
  args: {
    type: 'translate',
    intensity: 1,
    duration: 300,
    children: <div style={boxStyle}>Translate Effect</div>
  }
};

// Opacity example
export const Opacity: Story = {
  args: {
    type: 'opacity',
    intensity: 1,
    duration: 300,
    children: <div style={boxStyle}>Opacity Effect</div>
  }
};

// Elevate example
export const Elevate: Story = {
  args: {
    type: 'elevate',
    intensity: 1.5,
    duration: 300,
    children: <div style={boxStyle}>Shadow Effect</div>
  }
};

// Shake example
export const Shake: Story = {
  args: {
    type: 'shake',
    intensity: 1,
    duration: 300,
    children: <div style={boxStyle}>Shake Effect</div>
  }
};

// Fast animation example
export const FastAnimation: Story = {
  args: {
    type: 'scale',
    intensity: 1,
    duration: 100,
    children: <div style={boxStyle}>Fast Animation</div>
  }
};

// Slow animation example
export const SlowAnimation: Story = {
  args: {
    type: 'scale',
    intensity: 1,
    duration: 800,
    children: <div style={boxStyle}>Slow Animation</div>
  }
};

// High intensity example
export const HighIntensity: Story = {
  args: {
    type: 'scale',
    intensity: 3,
    duration: 300,
    children: <div style={boxStyle}>High Intensity</div>
  }
};

// Button component example
export const KariuButton: Story = {
  args: {
    type: 'scale',
    intensity: 1.2,
    duration: 300,
    children: (
      <Button 
        primary={true}
        size="medium"
        label="Hover Effect"
        shape="round"
        ripple={true}
      />
    )
  }
};

// Button component with different animation
export const KariuButtonShake: Story = {
  args: {
    type: 'shake',
    intensity: 0.8,
    duration: 400,
    children: (
      <Button 
        primary={false}
        size="large"
        label="Shake Effect"
        shape="square"
        ripple={true}
      />
    )
  }
}; 
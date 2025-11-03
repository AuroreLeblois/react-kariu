import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TypingEffect from '../src/Animation/TypingEffect/TypingEffect';
import type { TypingEffectProps } from '../src/Animation/TypingEffect/TypingEffect.types';
import { ThemeProvider } from '../src/Theme/ThemeProvider';

const meta: Meta<typeof TypingEffect> = {
  title: 'Animation/TypingEffect',
  component: TypingEffect,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="light">
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  ],
  argTypes: {
    text: { control: 'text' },
    typeSpeed: { control: { type: 'number', min: 10, max: 300, step: 10 } },
    showCursor: { control: 'boolean' },
    cursorBlinkSpeed: { control: { type: 'number', min: 200, max: 1200, step: 50 } },
    textColor: { control: 'color' },
    variant: { 
      control: 'select',
      options: ['default', 'label', 'description', 'disabled', 'danger', 'italic', 'strong']
    },
    component: {
      control: 'select',
      options: ['span', 'p', 'pre', 'div']
    }
  }
};

export default meta;
type Story = StoryObj<typeof TypingEffect>;

export const Basic: Story = {
  args: {
    text: 'Hello World!',
    typeSpeed: 80,
    showCursor: true
  } satisfies TypingEffectProps
};

export const FastTyping: Story = {
  args: {
    text: 'Typing fast',
    typeSpeed: 40
  }
};

export const SlowTyping: Story = {
  args: {
    text: 'Slow and steady...',
    typeSpeed: 140
  }
};

export const CursorOff: Story = {
  args: {
    text: 'Without a blinking cursor',
    showCursor: false
  }
};

export const NoLoop: Story = {
  args: {
    text: 'Only once',
  }
};

export const CustomColor: Story = {
  args: {
    text: 'Custom color',
    textColor: '#e74c3c'
  }
};

export const WithVariant: Story = {
  args: {
    text: 'Strong text with variant',
    variant: 'strong',
    typeSpeed: 90
  }
};

export const AsParagraph: Story = {
  args: {
    text: 'This is a paragraph component',
    component: 'p',
    variant: 'description'
  }
};

export const LongText: Story = {
  args: {
    text: 'This is a longer text that demonstrates how the typing effect works with more content.',
      typeSpeed: 90,
  }
};



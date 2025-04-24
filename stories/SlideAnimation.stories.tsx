import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SlideAnimation from '../src/Atoms/Animation/SlideAnimation';

const meta: Meta<typeof SlideAnimation> = {
  title: 'Atoms/Animation/SlideAnimation',
  component: SlideAnimation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Direction of the animation',
    },
    duration: {
      control: { type: 'number', min: 100, max: 5000, step: 100 },
      description: 'Duration of the animation in milliseconds',
    },
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Delay before the animation starts',
    },
    onScroll: {
      control: 'boolean',
      description: 'Trigger the animation on scroll',
    },
    trigger: {
      control: 'boolean',
      description: 'Trigger the animation manually',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SlideAnimation>;

// Style de base pour le contenu d'exemple
const boxStyle = {
  width: '300px',
  height: '150px',
  backgroundColor: '#3498db',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center' as const,
  fontFamily: 'Arial, sans-serif',
};

// Style pour le bouton de déclenchement
const buttonStyle = (isActive: boolean) => ({
  padding: '10px 20px',
  backgroundColor: isActive ? '#e74c3c' : '#2ecc71',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginBottom: '20px',
});

// Helper pour encapsuler n'importe quelle animation avec un bouton de déclenchement
const withTriggerButton = (
  StoryComponent: React.FC<{ trigger: boolean }>,
  title: string
) => {
  return () => {
    const [isAnimated, setIsAnimated] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button 
          onClick={() => setIsAnimated(!isAnimated)}
          style={buttonStyle(isAnimated)}
        >
          {isAnimated ? 'Reset' : `Trigger ${title}`}
        </button>
        
        <StoryComponent trigger={isAnimated} />
      </div>
    );
  };
};

// Story par défaut
export const Default: Story = {
  render: withTriggerButton(
    ({ trigger }) => (
      <SlideAnimation direction="left" duration={500} delay={0} trigger={trigger}>
        <div style={boxStyle}>Default animation (from the left)</div>
      </SlideAnimation>
    ),
    "the animation"
  ),
};

// Animation depuis la droite
export const FromRight: Story = {
  render: withTriggerButton(
    ({ trigger }) => (
      <SlideAnimation direction="right" duration={500} delay={0} trigger={trigger}>
        <div style={boxStyle}>Animation from the right</div>
      </SlideAnimation>
    ),
    "the animation from the right"
  ),
};

// Animation depuis le haut
export const FromTop: Story = {
  render: withTriggerButton(
    ({ trigger }) => (
      <SlideAnimation direction="top" duration={500} delay={0} trigger={trigger}>
        <div style={boxStyle}>Animation from the top</div>
      </SlideAnimation>
    ),
    "the animation from the top"
  ),
};

// Animation depuis le bas
export const FromBottom: Story = {
  render: withTriggerButton(
    ({ trigger }) => (
      <SlideAnimation direction="bottom" duration={500} delay={0} trigger={trigger}>
        <div style={boxStyle}>Animation from the bottom</div>
      </SlideAnimation>
    ),
    "the animation from the bottom"
  ),
};

// Animation lente
export const SlowAnimation: Story = {
  render: withTriggerButton(
    ({ trigger }) => (
      <SlideAnimation direction="left" duration={1500} delay={0} trigger={trigger}>
        <div style={boxStyle}>Slow animation (1500ms)</div>
      </SlideAnimation>
    ),
    "the slow animation"
  ),
};

// Animation avec délai
export const WithDelay: Story = {
  render: withTriggerButton(
    ({ trigger }) => (
      <SlideAnimation direction="bottom" duration={500} delay={800} trigger={trigger}>
        <div style={boxStyle}>Animation with delay (800ms)</div>
      </SlideAnimation>
    ),
    "the animation with delay"
  ),
};

// Exemple avec styles personnalisés
export const WithCustomStyles: Story = {
  render: withTriggerButton(
    ({ trigger }) => (
      <SlideAnimation 
        direction="left" 
        duration={700} 
        delay={200} 
        trigger={trigger}
        sx={{ 
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          borderRadius: '12px',
        }}
      >
        <div style={{...boxStyle, backgroundColor: '#e74c3c'}}>Animation with custom styles</div>
      </SlideAnimation>
    ),
    "the styled animation"
  ),
};

// Animations multiples avec bouton de déclenchement
export const MultipleElements: Story = {
  render: withTriggerButton(
    ({ trigger }) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <SlideAnimation direction="left" delay={0} trigger={trigger}>
          <div style={{...boxStyle, backgroundColor: '#3498db'}}>First element</div>
        </SlideAnimation>
        <SlideAnimation direction="right" delay={300} trigger={trigger}>
          <div style={{...boxStyle, backgroundColor: '#2ecc71'}}>Second element</div>
        </SlideAnimation>
        <SlideAnimation direction="left" delay={600} trigger={trigger}>
          <div style={{...boxStyle, backgroundColor: '#e74c3c'}}>Third element</div>
        </SlideAnimation>
      </div>
    ),
    "the animations in sequence"
  ),
}; 
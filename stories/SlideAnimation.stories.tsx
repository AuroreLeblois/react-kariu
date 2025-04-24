import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SlideAnimation } from '../src/Atoms';

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
      description: 'Direction de l\'animation',
    },
    duration: {
      control: { type: 'number', min: 100, max: 5000, step: 100 },
      description: 'Durée de l\'animation en millisecondes',
    },
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Délai avant le début de l\'animation',
    },
    onScroll: {
      control: 'boolean',
      description: 'Déclencher l\'animation au défilement',
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

// Story par défaut
export const Default: Story = {
  args: {
    children: <div style={boxStyle}>Animation par défaut (depuis la gauche)</div>,
    direction: 'left',
    duration: 500,
    delay: 0,
    onScroll: false,
  },
};

// Animation depuis la droite
export const FromRight: Story = {
  args: {
    children: <div style={boxStyle}>Animation depuis la droite</div>,
    direction: 'right',
    duration: 500,
    delay: 0,
    onScroll: false,
  },
};

// Animation depuis le haut
export const FromTop: Story = {
  args: {
    children: <div style={boxStyle}>Animation depuis le haut</div>,
    direction: 'top',
    duration: 500,
    delay: 0,
    onScroll: false,
  },
};

// Animation depuis le bas
export const FromBottom: Story = {
  args: {
    children: <div style={boxStyle}>Animation depuis le bas</div>,
    direction: 'bottom',
    duration: 500,
    delay: 0,
    onScroll: false,
  },
};

// Animation lente
export const SlowAnimation: Story = {
  args: {
    children: <div style={boxStyle}>Animation lente (1500ms)</div>,
    direction: 'left',
    duration: 1500,
    delay: 0,
    onScroll: false,
  },
};

// Animation avec délai
export const WithDelay: Story = {
  args: {
    children: <div style={boxStyle}>Animation avec délai (800ms)</div>,
    direction: 'bottom',
    duration: 500,
    delay: 800,
    onScroll: false,
  },
};

// Animation au défilement (difficile à montrer dans Storybook)
export const OnScroll: Story = {
  args: {
    children: <div style={boxStyle}>Cette animation se déclenche au défilement (peut être difficile à voir dans Storybook)</div>,
    direction: 'right',
    duration: 500,
    delay: 0,
    onScroll: true,
  },
};

// Exemple avec styles personnalisés
export const WithCustomStyles: Story = {
  args: {
    children: <div style={{...boxStyle, backgroundColor: '#e74c3c'}}>Animation avec styles personnalisés</div>,
    direction: 'left',
    duration: 700,
    delay: 200,
    onScroll: false,
    sx: { 
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      borderRadius: '12px',
    },
  },
};

// Multiple animations
export const MultipleElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SlideAnimation direction="left" delay={0}>
        <div style={{...boxStyle, backgroundColor: '#3498db'}}>Premier élément</div>
      </SlideAnimation>
      <SlideAnimation direction="right" delay={300}>
        <div style={{...boxStyle, backgroundColor: '#2ecc71'}}>Deuxième élément</div>
      </SlideAnimation>
      <SlideAnimation direction="left" delay={600}>
        <div style={{...boxStyle, backgroundColor: '#e74c3c'}}>Troisième élément</div>
      </SlideAnimation>
    </div>
  ),
};

// Animations multiples avec bouton de déclenchement
export const MultipleElementsWithTrigger: Story = {
  render: () => {
    const [isAnimated, setIsAnimated] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <button 
          onClick={() => setIsAnimated(!isAnimated)}
          style={{
            padding: '10px 20px',
            backgroundColor: isAnimated ? '#e74c3c' : '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}
        >
          {isAnimated ? 'Réinitialiser' : 'Déclencher les animations'}
        </button>
        
        <SlideAnimation direction="left" delay={0} trigger={isAnimated}>
          <div style={{...boxStyle, backgroundColor: '#3498db'}}>Premier élément</div>
        </SlideAnimation>
        <SlideAnimation direction="right" delay={300} trigger={isAnimated}>
          <div style={{...boxStyle, backgroundColor: '#2ecc71'}}>Deuxième élément</div>
        </SlideAnimation>
        <SlideAnimation direction="left" delay={600} trigger={isAnimated}>
          <div style={{...boxStyle, backgroundColor: '#e74c3c'}}>Troisième élément</div>
        </SlideAnimation>
      </div>
    );
  },
}; 
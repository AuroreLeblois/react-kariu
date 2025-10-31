import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "../src/Animation";

const meta = {
  title: "Animation/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: 'select',
      options: ['linear', 'circular'],
      description: 'La variante de la barre de progression'
    },
    indeterminate: {
      control: 'boolean',
      description: 'Mode continu avec animation en boucle'
    },
    size: {
      control: { type: 'number', min: 50, max: 300, step: 10 },
      description: 'Taille de la barre circulaire (uniquement pour variant="circular")'
    },
    thickness: {
      control: { type: 'number', min: 4, max: 20, step: 1 },
      description: 'Épaisseur du trait circulaire (uniquement pour variant="circular")'
    },
  }
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories Linéaires
export const DefaultLinear: Story = {
  args: {
    value: 40,
    max: 100,
    color: '#3498db',
    displayPercentage: false,
    primary: true,
    variant: 'linear',
  },
};

export const WithPercentage: Story = {
  args: {
    value: 65,
    max: 100,
    color: '#3498db',
    displayPercentage: true,
    primary: true,
    variant: 'linear',
  },
};

export const CustomColor: Story = {
  args: {
    value: 70,
    max: 100,
    color: '#e74c3c',
    displayPercentage: false,
    primary: true,
    variant: 'linear',
  },
};

export const Secondary: Story = {
  args: {
    value: 55,
    max: 100,
    displayPercentage: false,
    primary: false,
    variant: 'linear',
  },
};

export const LinearIndeterminate: Story = {
  args: {
    value: 0,
    max: 100,
    color: '#3498db',
    displayPercentage: false,
    primary: true,
    variant: 'linear',
    indeterminate: true,
  },
};

export const WithClassAndStyle: Story = {
  args: {
    value: 85,
    max: 100,
    color: '#9b59b6',
    className: 'my-custom-class',
    sx: { height: '20px', borderRadius: '10px' },
    displayPercentage: false,
    primary: true,
    variant: 'linear',
  },
};

// Stories Circulaires
export const Circular: Story = {
  args: {
    value: 60,
    max: 100,
    color: '#3498db',
    displayPercentage: false,
    primary: true,
    variant: 'circular',
    size: 100,
    thickness: 8,
  },
};

export const CircularWithPercentage: Story = {
  args: {
    value: 75,
    max: 100,
    color: '#2ecc71',
    displayPercentage: true,
    primary: true,
    variant: 'circular',
    size: 120,
    thickness: 10,
  },
};

export const CircularSecondary: Story = {
  args: {
    value: 45,
    max: 100,
    displayPercentage: true,
    primary: false,
    variant: 'circular',
    size: 100,
    thickness: 8,
  },
};

export const CircularIndeterminate: Story = {
  args: {
    value: 0,
    max: 100,
    color: '#3498db',
    displayPercentage: false,
    primary: true,
    variant: 'circular',
    indeterminate: true,
    size: 100,
    thickness: 8,
  },
};

export const CircularLarge: Story = {
  args: {
    value: 80,
    max: 100,
    color: '#9b59b6',
    displayPercentage: true,
    primary: true,
    variant: 'circular',
    size: 150,
    thickness: 12,
  },
};

export const CircularThin: Story = {
  args: {
    value: 50,
    max: 100,
    color: '#e74c3c',
    displayPercentage: true,
    primary: true,
    variant: 'circular',
    size: 80,
    thickness: 4,
  },

 
}; 

export const CircularSmall: Story = {
  args: {
    value: 50,
    max: 100,
    color: '#e74c3c',
    displayPercentage: false,
    primary: true,
    variant: 'circular',
    size: 25,
    thickness: 4,
  },
};